import { writable, derived } from 'svelte/store';
// import type { Task } from './types';
import mockTasks from '../mock/tasks.json';
import type { Task, TaskStatus } from '$lib/types';

export const tasks = writable<Task[]>(mockTasks as Task[]);

export const filter = writable<TaskStatus | "all">("all");

export const filteredTasks = derived([tasks, filter], ([$tasks, $filter]) =>
  $filter === "all" ? $tasks : $tasks.filter(task => task.status === $filter)
);
