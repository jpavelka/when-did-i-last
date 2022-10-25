<script lang="ts">
    import { dateFormat } from '$lib/dateFormat';
    import { showEditTask, taskToEdit, showCompleteTask, taskToComplete, showScheduleTask, taskToSchedule } from "$lib/stores";
    export let task;
    const today = new Date();
    const todayS = today.toISOString().slice(0, 10).replaceAll('-', '');
</script>

<div class=taskWrapper>
    <div class=taskName>
        {task.name}
    </div>
    {#if task.history.length > 0}
        <div class=lastNext>
            Last: {dateFormat(task.history[task.history.length - 1])}
        </div>
    {/if}
    {#if task.scheduled.length > 0}
        <div
            class=lastNext
            class:overdue={todayS >= task.scheduled[0]}
        >
            Next: {dateFormat(task.scheduled[0])}
        </div>
    {/if}
    <div>
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
        border: 1pt solid gray;
        padding: 3pt;
        margin: 1pt;
    }
    .taskName {
        font-weight: bold;
        font-size: 16pt;
    }
    .lastNext {
        margin-left: 0.5em;
    }
    .overdue {
        color: firebrick;
    }
    button {
        padding: 8pt;
    }
</style>