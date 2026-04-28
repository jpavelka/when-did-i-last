<script lang="ts">
    import Modal from "$lib/Modal.svelte";
    import { taskToComplete } from "$lib/stores";
    import { editTask } from "$lib/db";
    import { dateFormat, addCadence } from "$lib/dateFormat";
    import { afterUpdate } from "svelte";

    export let visible;

    $: task = $taskToComplete;

    let step: 'form' | 'schedule-prompt' = 'form';
    let nextDateStr = ''; // YYYY-MM-DD for the date picker

    const submitFunc = async (event) => {
        const { newComplete, delSchedCheck } = event.target.elements;
        const completedDateStr = newComplete.value.replaceAll('-', '');
        task.history.push(completedDateStr);
        task.history.sort((a, b) => a < b ? -1 : 1);
        if ((delSchedCheck || {}).checked) {
            task.scheduled = task.scheduled.slice(1);
        }
        const result = await editTask(task, task.id);
        if (result === 'success') {
            // Pre-populate with cadence date if defined, otherwise leave blank.
            nextDateStr = task.cadence ? dateFormat(addCadence(completedDateStr, task.cadence)) : '';
            step = 'schedule-prompt';
        }
    }

    const acceptSchedule = async () => {
        const d = nextDateStr.replaceAll('-', '');
        const newScheduled = [...task.scheduled, d].sort((a, b) => a < b ? -1 : 1);
        const result = await editTask({
            name: task.name,
            history: task.history,
            scheduled: newScheduled,
            cadence: task.cadence,
        }, task.id);
        if (result === 'success') {
            step = 'form';
            visible.update(() => false);
        }
    }

    const skipSchedule = () => {
        step = 'form';
        visible.update(() => false);
    }

    const cadenceLabel = (cadence) => {
        if (!cadence) return null;
        const u = cadence.value === 1 ? cadence.unit.slice(0, -1) : cadence.unit;
        return `Every ${cadence.value} ${u}`;
    };

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
        if ($visible && step === 'form') {
            const dp = document.getElementById('completeDatePicker') as HTMLInputElement;
            dp.focus();
        }
        if ($visible && step === 'schedule-prompt') {
            const dp = document.getElementById('nextDatePicker') as HTMLInputElement;
            dp?.focus();
        }
    })
</script>

<Modal visible={visible}>
    {#if step === 'form'}
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
    {:else}
        <h2>Schedule next?</h2>
        <p class="cadence-note">Cadence: {cadenceLabel(task.cadence) ?? 'not configured'}</p>
        <input id="nextDatePicker" type="date" bind:value={nextDateStr}>
        <div class="button-row">
            <button class="primary" on:click={acceptSchedule} disabled={!nextDateStr}>Schedule</button>
            <button on:click={skipSchedule}>Skip</button>
        </div>
    {/if}
</Modal>

<style>
    input[type="date"] {
        width: 100%;
        margin-bottom: 0.75rem;
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

    .cadence-note {
        font-size: 0.875rem;
        color: var(--c-muted);
        margin-bottom: 0.75rem;
    }
</style>
