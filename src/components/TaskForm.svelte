<script lang="ts">
	import type { Task, TaskStatus } from '$lib/types';
   
  let { initial = {}, submitLabel = "Add Task", onSubmit } = $props<{
        initial?: Partial<Task>;
        submitLabel?: string;
        onSubmit: (payload: { title: string; description: string; status: TaskStatus }) => void;

    }>();

    const formData = $state({
        title: initial.title || "",
        description: initial.description || "",
        status: initial.status || "pending" as TaskStatus
    });

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (!formData.title.trim()) return;
    onSubmit && onSubmit({ ...formData }); // passing title, description, status
    formData.title = "";
    formData.description = "";
    formData.status = "pending" as TaskStatus;
  }
</script>

<form class="flex flex-col gap-3" onsubmit={handleSubmit} aria-label="Task Form">
  <label>
    Title*
    <input class="border rounded px-2 py-1 w-full" bind:value={formData.title} required />
  </label>
  <label>
    Description
    <textarea class="border rounded px-2 py-1 w-full" bind:value={formData.description}></textarea>
  </label>
  <label>
    Status
    <select class="border rounded px-2 py-1 w-full" bind:value={formData.status}>
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  </label>
  <button class="bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition" type="submit">{submitLabel}</button>
</form>
