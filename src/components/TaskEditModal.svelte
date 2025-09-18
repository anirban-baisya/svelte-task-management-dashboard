<script lang="ts">
  import type { Task, TaskStatus } from '$lib/types';
  import TaskForm from './TaskForm.svelte';

  let { task, onClose, onSave } = $props<{
    task: Task;
    onClose: () => void;
    onSave: (updated: Task) => void;
  }>();

  function handleSubmit(e: { title: string; description: string; status: TaskStatus }) {
    onSave({ ...task, ...e });
    onClose();
  }
</script>

<div class="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center" aria-modal="true">
  <div class="bg-white dark:bg-gray-800 rounded p-6 shadow-md min-w-[300px] text-gray-900 dark:text-gray-100">
    <h2 class="text-lg font-bold mb-4">Edit Task</h2>
    <TaskForm initial={task} submitLabel="Save Changes" onSubmit={handleSubmit} />
    <button
      class="mt-4 text-gray-600 dark:text-gray-300 hover:underline"
      onclick={onClose}
    >
      Cancel
    </button>
  </div>
</div>
