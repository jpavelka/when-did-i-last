<script lang="ts">
    import Modal from "$lib/Modal.svelte";
    import { taskToSchedule } from "$lib/stores";
    import { editTask } from "$lib/db";
    import { afterUpdate } from "svelte";
    
    export let visible;
    
    $: task = $taskToSchedule;
    const submitFunc = async (event) => {
        const { newComplete } = event.target.elements;
        task.scheduled.push(newComplete.value.replaceAll('-', ''));
        task.scheduled.sort((a, b) => a < b ? -1 : 1);
        const result = await editTask(task, task.id);
        if (result === 'success') {
            visible.update(() => false);
        }
    }
    const todayS = (new Date()).toISOString().slice(0, 10);
    afterUpdate(() => {
        if ($visible){  
            const dp = document.getElementById('scheduleDatePicker') as HTMLInputElement;
            dp.focus();
        }
    })
</script>

<Modal visible={visible}>
    <h2>Schedule task: {task.name}</h2>
    <form on:submit|preventDefault={(event) => submitFunc(event)}>
        <input id=scheduleDatePicker class=datePicker name=newComplete type=date value={todayS} required>
        <button>Save</button>
    </form>
</Modal>