import { auth, db } from "./firebase";
import { doc, setDoc, updateDoc, deleteField } from "firebase/firestore";
import type { Task } from './types';

export const editTask = async (taskData: Task, taskId: string) => {
    const docData = {
        'tasks': {}
    }
    delete taskData.id;
    docData.tasks[taskId] = taskData;
    const userId = getUserId();
    const result = await setDoc(
        doc(db, 'tasks', userId), docData, {merge: true}
    ).then(() => {
        alert('Success!');
        return 'success'
    }).catch(error => {
        alert('There was an issue completing your request. Please try again later.')
        console.log(error);
        return 'failure'
    })
    return result
}

export const deleteTask = async (task: Task) => {
    const doDelete = confirm(`Are you sure you want to delete task "${task.name}"?`);
    if (!doDelete) {
        return
    }
    let deleteObj = {};
    deleteObj[`tasks.${task.id}`] = deleteField();
    const userId = getUserId();
    const result = await updateDoc(
        doc(db, 'tasks', userId), deleteObj
    ).then(() => {
        alert('Deletion successful');
        return 'success'
    }).catch(error => {
        alert('There was an issue completing your request. Please try again later.')
        console.log(error);
        return 'failure'
    });
    return result
}

const getUserId = () => {
    return ((auth.currentUser || {}).uid || '').toString();
}