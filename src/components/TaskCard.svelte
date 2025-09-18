<script lang="ts">
  import type { Task } from "$lib/types";
  let { task, onEdit, onDelete } = $props<{
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: string) => void;
  }>();
</script>

<div
  class="bg-white dark:bg-gray-800 shadow rounded p-4 mb-2 flex flex-col gap-2 transition hover:bg-gray-50 dark:hover:bg-gray-700"
  aria-label="Task"
>
  <div class="flex justify-between items-center">
    <h2 class="font-semibold text-lg text-gray-900 dark:text-gray-100">{task.title}</h2>
    <span
      class="px-2 py-1 rounded text-xs bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-100"
    >
      {task.status}
    </span>
  </div>
  <p class="text-gray-700 dark:text-gray-300 text-sm">{task.description}</p>
  <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400">
    <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
    <span>
      <button
        class="text-blue-600 hover:underline dark:text-blue-400"
        onclick={() => onEdit(task)}
      >
        Edit
      </button>
      <button
        class="ml-2 text-red-600 hover:underline dark:text-red-400"
        onclick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </span>
  </div>
</div>
