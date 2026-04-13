<script lang="ts">
    import Modal from "$lib/Modal.svelte";
    import { fade } from 'svelte/transition';
    import { taskToEdit, tasks } from "$lib/stores";
    import { editTask, deleteTask } from "$lib/db";
    import { dateFormat } from "$lib/dateFormat";
    import { v4 as uuidv4 } from 'uuid';
    import { afterUpdate } from "svelte";

    export let visible;

    const getNewId = () => {
        let newId = uuidv4().split('-')[0];
        const currentIds = $tasks.map(x => x.id);
        while (currentIds.includes(newId)){
            newId = uuidv4().split('-')[0];
        }
        return newId
    }
    $: addOrEdit = !!$taskToEdit ? 'edit' : 'add';
    $: task = $taskToEdit || {name: '', history: [], scheduled: [], id: getNewId()};

    // Both arrays stay sorted ascending internally; history is displayed newest-first.
    let historyDates: string[] = [];
    $: historyDates = [...(task.history || [])];

    let scheduledDates: string[] = [];
    $: scheduledDates = [...(task.scheduled || [])];

    let newHistoryStr = '';
    let newScheduledStr = '';

    // Warn if the user tries to close with a date selected but not yet added.
    let showPendingWarning = false;
    $: pendingFields = [
        newHistoryStr   ? 'History'   : null,
        newScheduledStr ? 'Scheduled' : null,
    ].filter(Boolean) as string[];
    // Auto-clear the warning once all pending pickers are cleared.
    $: if (pendingFields.length === 0) showPendingWarning = false;

    const tryClose = () => {
        newHistoryStr = '';
        newScheduledStr = '';
        visible.update(() => false);
    };

    const addHistory = () => {
        if (!newHistoryStr) return;
        const d = newHistoryStr.replaceAll('-', '');
        if (!historyDates.includes(d)) {
            historyDates = [...historyDates, d].sort();
        }
        newHistoryStr = '';
    };

    const removeHistory = (d: string) => {
        historyDates = historyDates.filter(x => x !== d);
    };

    const addScheduled = () => {
        if (!newScheduledStr) return;
        const d = newScheduledStr.replaceAll('-', '');
        if (!scheduledDates.includes(d)) {
            scheduledDates = [...scheduledDates, d].sort();
        }
        newScheduledStr = '';
    };

    const removeScheduled = (d: string) => {
        scheduledDates = scheduledDates.filter(x => x !== d);
    };

    const submitFunc = async (event, id) => {
        if (pendingFields.length > 0) {
            showPendingWarning = true;
            return;
        }
        const { name } = event.target.elements;
        const result = await editTask({
            name: name.value,
            history: historyDates,
            scheduled: scheduledDates,
        }, id);
        if (result === 'success'){
            visible.update(() => false);
        }
    }
    const deleteFunc = async () => {
        const result = await deleteTask(task);
        if (result === 'success'){
            visible.update(() => false);
        }
    }
    let error;
    afterUpdate(() => {
        if ($visible && addOrEdit === 'add'){
            const el = document.getElementById('name') as HTMLInputElement;
            el.focus();
        }
    })
</script>

<Modal visible={visible}>
    <h2>{addOrEdit === 'edit' ? `Edit task: ${task.name}` : 'Add task'}</h2>
    <form on:submit|preventDefault={(event) => submitFunc(event, task.id)}>
        <div class="form-grid">
            <label for="name">Name</label>
            <input id="name" type="text" value={task.name} required />

                <label>History</label>
                <div class="date-section" class:warn={showPendingWarning && !!newHistoryStr}>
                    {#if historyDates.length > 0}
                        <ul class="date-list">
                            {#each [...historyDates].reverse() as d (d)}
                                <li class="date-item">
                                    <span>{dateFormat(d)}</span>
                                    <button
                                        type="button"
                                        class="remove-btn"
                                        aria-label="Remove {dateFormat(d)}"
                                        on:click={() => removeHistory(d)}
                                    >×</button>
                                </li>
                            {/each}
                        </ul>
                    {:else}
                        <p class="no-dates">No history yet</p>
                    {/if}
                    <div class="add-date-row">
                        <input type="date" bind:value={newHistoryStr} />
                        <button type="button" on:click={addHistory}>Add</button>
                        {#if newHistoryStr}
                            <button type="button" on:click={() => newHistoryStr = ''}>Clear</button>
                        {/if}
                    </div>
                </div>

                <label>Scheduled</label>
                <div class="date-section" class:warn={showPendingWarning && !!newScheduledStr}>
                    {#if scheduledDates.length > 0}
                        <ul class="date-list">
                            {#each scheduledDates as d (d)}
                                <li class="date-item">
                                    <span>{dateFormat(d)}</span>
                                    <button
                                        type="button"
                                        class="remove-btn"
                                        aria-label="Remove {dateFormat(d)}"
                                        on:click={() => removeScheduled(d)}
                                    >×</button>
                                </li>
                            {/each}
                        </ul>
                    {:else}
                        <p class="no-dates">No scheduled dates</p>
                    {/if}
                    <div class="add-date-row">
                        <input type="date" bind:value={newScheduledStr} />
                        <button type="button" on:click={addScheduled}>Add</button>
                        {#if newScheduledStr}
                            <button type="button" on:click={() => newScheduledStr = ''}>Clear</button>
                        {/if}
                    </div>
                </div>
        </div>

        {#if error}
            <div transition:fade class="error-msg">{error.message}</div>
        {/if}
        {#if showPendingWarning}
            <div transition:fade class="pending-warning">
                Add or clear the date in <strong>{pendingFields.join(' and ')}</strong> before continuing.
            </div>
        {/if}
        <div class="button-row">
            <button type="submit" class="primary">Save</button>
            {#if addOrEdit === 'edit'}
                <button class="danger" on:click|preventDefault={deleteFunc}>Delete</button>
            {/if}
            <button on:click|preventDefault={tryClose}>Cancel</button>
        </div>
    </form>
</Modal>

<style>
    .form-grid {
        display: grid;
        max-width: 24em;
        gap: 0.35rem;
        margin-bottom: 1.25rem;
    }

    label {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--c-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-top: 0.5rem;
    }

    input[type="text"] {
        width: 100%;
    }

    /* ── Date sections (shared by history + scheduled) ── */

    .date-section {
        border: 1.5px solid var(--c-border);
        border-radius: 6px;
        padding: 0.5rem 0.625rem;
        background: var(--c-bg);
    }

    .date-list {
        list-style: none;
        margin: 0 0 0.5rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        max-height: 9rem;
        overflow-y: auto;
    }

    .date-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--c-surface);
        border: 1.5px solid var(--c-border);
        border-radius: 4px;
        padding: 0.3rem 0.5rem;
        font-size: 0.9rem;
    }

    .remove-btn {
        padding: 0 0.3rem;
        font-size: 1rem;
        line-height: 1;
        color: var(--c-muted);
        border-color: transparent;
        background: transparent;
    }

    .remove-btn:hover {
        color: var(--c-danger);
        background: transparent;
        border-color: transparent;
    }

    .no-dates {
        font-size: 0.85rem;
        color: var(--c-muted);
        font-style: italic;
        margin: 0 0 0.5rem;
    }

    .add-date-row {
        display: flex;
        gap: 0.4rem;
        align-items: center;
    }

    .add-date-row input[type="date"] {
        flex: 1;
        min-width: 0;
    }

    .date-section.warn {
        border-color: var(--c-danger);
    }

    /* ── Form actions ── */

    .button-row {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .error-msg {
        color: var(--c-danger);
        font-size: 0.875rem;
        margin-bottom: 0.75rem;
    }

    .pending-warning {
        font-size: 0.875rem;
        color: var(--c-danger);
        margin-bottom: 0.75rem;
    }
</style>
