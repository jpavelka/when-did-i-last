<script lang="ts">
    import { dateFormat } from '$lib/dateFormat';
    import { showEditTask, taskToEdit, showCompleteTask, taskToComplete, showScheduleTask, taskToSchedule } from "$lib/stores";
    export let task;
    const today = new Date();
    const todayS = today.toISOString().slice(0, 10).replaceAll('-', '');
</script>

<div class="taskWrapper">
    <div class="taskName">{task.name}</div>
    {#if task.history.length > 0}
        <div class="meta">Last: {dateFormat(task.history[task.history.length - 1])}</div>
    {/if}
    {#if task.scheduled.length > 0}
        <div class="meta" class:overdue={todayS >= task.scheduled[0]}>
            Next: {dateFormat(task.scheduled[0])}
        </div>
    {/if}
    <div class="actions">
        <button on:click={() => {
            taskToEdit.update(() => task);
            showEditTask.update(() => true);
        }}>Edit</button>
        <button on:click={() => {
            taskToComplete.update(() => task);
            showCompleteTask.update(() => true);
        }}>Complete</button>
        <button on:click={() => {
            taskToSchedule.update(() => task);
            showScheduleTask.update(() => true);
        }}>Schedule</button>
    </div>
</div>

<style>
    .taskWrapper {
        background: var(--c-surface);
        border: 1.5px solid var(--c-border);
        border-radius: var(--radius);
        padding: 0.875rem 1rem;
        margin-bottom: 0.5rem;
        box-shadow: var(--shadow);
    }

    .taskName {
        font-weight: 600;
        font-size: 1.05rem;
        margin-bottom: 0.2rem;
    }

    .meta {
        font-size: 0.875rem;
        color: var(--c-muted);
        margin-bottom: 0.1rem;
    }

    .overdue {
        color: var(--c-overdue);
        font-weight: 500;
    }

    .actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.75rem;
        flex-wrap: wrap;
    }
</style>
