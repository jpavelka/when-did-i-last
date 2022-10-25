import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { tasks } from "./stores";
import { get } from "svelte/store";
import type { Task } from './types';

export const editTask = async (taskData: Task, taskId: string) => {
    const docData = {
        'tasks': {}
    }
    delete taskData.id;
    docData.tasks[taskId] = taskData;
    const userId = ((auth.currentUser || {}).uid || '').toString();
    const result = await setDoc(
        doc(db, 'tasks', userId), docData, {merge: true}
    ).then(() => {
        taskData.id = taskId;
        const newTasks = get(tasks).filter(t => t.id !== taskId).concat(taskData)
        tasks.update(() => newTasks);
        alert('Success!');
        return 'success'
    }).catch(error => {
        alert('There was an issue completing your request. Please try again later.')
        console.log(error);
        return 'failure'
    })
    return result
}