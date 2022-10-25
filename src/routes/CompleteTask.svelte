<script lang="ts">
    import Modal from "$lib/Modal.svelte";
    import { taskToComplete } from "$lib/stores";
    import { editTask } from "$lib/db";
    import { dateFormat } from "$lib/dateFormat";
    import { afterUpdate } from "svelte";
    
    export let visible;
    
    $: task = $taskToComplete;
    const submitFunc = async (event) => {
        const { newComplete } = event.target.elements;
        task.history.push(newComplete.value.replaceAll('-', ''));
        task.history.sort((a, b) => a < b ? -1 : 1);
        const result = await editTask(task, task.id);
        if (result === 'success') {
            visible.update(() => false);
        }
    }
    const todayS = (new Date()).toISOString().slice(0, 10);
    const getNextSchedS = (t) => {
        if (((t || {}).scheduled || []).length == 0) {
            return undefined;
        }
        return (new Date(dateFormat(t.scheduled[0]))).toISOString().slice(0, 10)
    }
    $: nextSchedS = getNextSchedS(task);
    const setDateValue = (v) => {
        const dp = document.getElementById('completeDatePicker') as HTMLInputElement;
        dp.value = v;
    }
    afterUpdate(() => {
        if ($visible){  
            const dp = document.getElementById('completeDatePicker') as HTMLInputElement;
            dp.focus();
        }
    })
</script>

<Modal visible={visible}>
    <h2>Complete task: {task.name}</h2>
    <form on:submit|preventDefault={(event) => submitFunc(event)}>
        <input id=completeDatePicker class=datePicker name=newComplete type=date value={todayS} required>
        <button on:click|preventDefault={() => setDateValue(todayS)}>Today</button>
        {#if nextSchedS !== undefined}
            <button on:click|preventDefault={() => setDateValue(nextSchedS)}>Scheduled</button>
        {/if}
        <div><button>Save</button></div>
    </form>
</Modal>