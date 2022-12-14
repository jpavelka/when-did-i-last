<script lang="ts">
    import Modal from "$lib/Modal.svelte";
    import { fade } from 'svelte/transition';
    import { taskToEdit, tasks } from "$lib/stores";
    import { editTask, deleteTask } from "$lib/db";
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
    const submitFunc = async (event, id) => {
        const { name, history, scheduled } = event.target.elements;
        let obj = {
            name: name.value,
            history: history.value.split(',').map(x => x.trim()).filter(x => x !== ''),
            scheduled: scheduled.value.split(',').map(x => x.trim()).filter(x => x !== '')
        }
        const result = await editTask(obj, id);
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
            const dp = document.getElementById('name') as HTMLInputElement;
            dp.focus();
        }
    })
</script>

<Modal visible={visible}>
    <h2>{task.name.length > 0 ? `Edit task: ${task.name}` : 'Add task'}</h2>
    <form on:submit|preventDefault={(event) => submitFunc(event, task.id)}>
        <div class=formClass>
            <label for="name">Name</label>
            <input id="name" type="name" value={task.name} required />
            <label for="history">History</label>
            <input id="history" type="history" value={task.history.join(',')} />
            <label for="scheduled">Scheduled</label>
            <input id="scheduled" type="scheduled" value={task.scheduled.join(',')} />
        </div>
        {#if error}
            <div transition:fade>{error.message}</div>
        {/if}
        <div>
            <button type="submit">Save</button>
            {#if task.name.length > 0}
                <button on:click|preventDefault={deleteFunc}>Delete</button>
            {/if}
            <button on:click|preventDefault={() => visible.update(() => false)}>Cancel</button>
        </div>
    </form>
</Modal>

<style>
    .formClass {
        display: grid;
        max-width: 20em;
    }
    input {
        padding: 3pt;
        font-size: 16pt;
    }
    label {
        font-size: 16pt;
        font-weight: bold;
    }
</style>