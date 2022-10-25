import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Task } from './types';

export const tasks: Writable<Array<Task>> = writable([]);

export const showEditTask: Writable<boolean> = writable(false);
export const showCompleteTask: Writable<boolean> = writable(false);
export const showScheduleTask: Writable<boolean> = writable(false);
export const taskToEdit: Writable<Task|undefined> = writable(undefined);
export const taskToComplete: Writable<Task|undefined> = writable(undefined);
export const taskToSchedule: Writable<Task|undefined> = writable(undefined);