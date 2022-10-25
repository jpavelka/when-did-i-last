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

<div class=mainContent>
    <EditTask visible={showEditTask} />
    <CompleteTask visible={showCompleteTask} />
    <ScheduleTask visible={showScheduleTask} />
    Search: <input bind:value={searchStr}>
    <div class=taskList>
        {#each matchingTasks as t}
            <div transition:fade>
                <InlineTask task={t} />
            </div>
        {/each}
    </div>
    <button on:click={() => {
        taskToEdit.update(() => undefined);
        showEditTask.update(() => true);
    }}>Add Task</button>
    <button on:click={signOutFunc}>Log Out</button>
</div>

<style>
    .mainContent {
        font-size: 1.2em;
    }
    .taskList {
        max-height: 70vh;
        overflow-y: auto;
    }
    input {
        padding:5pt;
        margin-bottom: 3pt;
    }
</style>
