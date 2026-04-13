<script lang='ts'>
    import InlineTask from "./InlineTask.svelte";
    import EditTask from './EditTask.svelte';
    import CompleteTask from './CompleteTask.svelte';
    import ScheduleTask from "./ScheduleTask.svelte";
    import { showEditTask, showCompleteTask, showScheduleTask, tasks, taskToEdit } from "$lib/stores";
    import { signOutFunc } from "$lib/firebase";
    import { fade } from 'svelte/transition';
    let searchStr = '';
    const searchFunc = (ts, s) => ts.filter(t => t.name.toLowerCase().includes(s.toLowerCase()))
    .map(t => {
        t.scheduled = t.scheduled || [];
        t.history = t.history || [];
        return t
    })
    .sort((a, b) => {
        const getNext = (x) => {
            const scheduled = x.scheduled.concat(['99999999']);
            return scheduled[0];
        };
        return getNext(a) < getNext(b) ? -1 : 1;
    });
    $: matchingTasks = searchFunc($tasks, searchStr);
</script>

<EditTask visible={showEditTask} />
<CompleteTask visible={showCompleteTask} />
<ScheduleTask visible={showScheduleTask} />

<div class="main">
    <div class="search-row">
        <label for="search">Search</label>
        <input id="search" type="text" bind:value={searchStr} placeholder="Filter tasks...">
    </div>

    <div class="task-list">
        {#if matchingTasks.length > 0}
            {#each matchingTasks as t}
                <div transition:fade>
                    <InlineTask task={t} />
                </div>
            {/each}
        {:else}
            <div transition:fade class="empty-state">No tasks to show</div>
        {/if}
    </div>

    <div class="bottom-bar">
        <button class="primary" on:click={() => {
            taskToEdit.update(t => t === undefined ? null : undefined);
            showEditTask.update(() => true);
        }}>+ Add Task</button>
        <button on:click={signOutFunc}>Log Out</button>
    </div>
</div>

<style>
    .main {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-height: 0;
    }

    .search-row {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        margin-bottom: 0.75rem;
        flex-shrink: 0;
    }

    label {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--c-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        white-space: nowrap;
    }

    input {
        flex: 1;
    }

    .task-list {
        flex: 1;
        overflow-y: auto;
        min-height: 0;
        padding-right: 2px; /* keep box-shadows from clipping */
    }

    .empty-state {
        font-style: italic;
        color: var(--c-muted);
        padding: 1rem 0;
    }

    .bottom-bar {
        display: flex;
        gap: 0.5rem;
        padding-top: 0.875rem;
        flex-shrink: 0;
        align-items: center;
    }
</style>
