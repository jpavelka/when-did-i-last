<script lang="ts">
    import Modal from "$lib/Modal.svelte";
    import { taskToComplete } from "$lib/stores";
    import { editTask } from "$lib/db";
    import { dateFormat } from "$lib/dateFormat";
    import { afterUpdate } from "svelte";

    export let visible;

    $: task = $taskToComplete;
    const submitFunc = async (event) => {
        const { newComplete, delSchedCheck } = event.target.elements;
        task.history.push(newComplete.value.replaceAll('-', ''));
        task.history.sort((a, b) => a < b ? -1 : 1);
        if ((delSchedCheck || {}).checked) {
            task.scheduled = task.scheduled.slice(1);
        }
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
        <input id="completeDatePicker" name="newComplete" type="date" value={todayS} required>
        <div class="quick-btns">
            <button on:click|preventDefault={() => setDateValue(todayS)}>Today</button>
            {#if nextSchedS !== undefined}
                <button on:click|preventDefault={() => setDateValue(nextSchedS)}>Scheduled</button>
            {/if}
        </div>
        {#if nextSchedS !== undefined}
            <div class="del-check">
                <input id="delSchedCheck" name="delSchedCheck" type="checkbox" checked>
                <label for="delSchedCheck">Delete earliest date from schedule ({getNextSchedS(task)})</label>
            </div>
        {/if}
        <div class="button-row">
            <button type="submit" class="primary">Save</button>
            <button on:click|preventDefault={() => visible.update(() => false)}>Cancel</button>
        </div>
    </form>
</Modal>

<style>
    input[type="date"] {
        width: 100%;
        margin-bottom: 0.5rem;
    }

    .quick-btns {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
    }

    .del-check {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0;
        margin-bottom: 0.75rem;
        font-size: 0.875rem;
        color: var(--c-muted);
    }

    .button-row {
        display: flex;
        gap: 0.5rem;
    }
</style>
