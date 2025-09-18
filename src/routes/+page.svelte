

<script lang="ts">
  import type { Task, TaskStatus } from "$lib/types";
  import Sortable from "sortablejs";
  import ConfirmationDialog from "../components/ConfirmationDialog.svelte";
  import FilterBar from "../components/FilterBar.svelte";
  import TaskCard from "../components/TaskCard.svelte";
  import TaskEditModal from "../components/TaskEditModal.svelte";
  import TaskForm from "../components/TaskForm.svelte";
  import { filteredTasks, tasks } from "../stores/tasks";

  let showingEdit = $state(false);
  let editTask = $state<Task | null>(null); 
  let confirmDelete = $state(false); 
  let deleteId = $state<string | null>(null);

    // Drag-and-drop list element
    let list: HTMLElement;

  function addTask(e: {title: string; description: string; status: TaskStatus}) {
    console.log('Add task:', e);
    const newTask: Task = {
      id: Date.now().toString(),
      ...e,
      createdAt: new Date().toISOString()
    };
    tasks.update(tsks => [newTask, ...tsks]);
  }

  function handleEdit(task: Task) {
    console.log('Edit task:', task);
    showingEdit = true;
    editTask = task;
  }

  function handleDelete(id: string) {
    confirmDelete = true;
    deleteId = id;
  }

  function confirmDeleteTask() {
    tasks.update(tsks => tsks.filter(t => t.id !== deleteId));
    confirmDelete = false;
    deleteId = null;
  }


   $effect(() => {
    Sortable.create(list, {
      animation: 200,
      handle: ".drag-handle",
      onEnd: (evt: any) => {
        // evt.oldIndex and evt.newIndex are the drag source/target
        if (evt.oldIndex === undefined || evt.newIndex === undefined) return;
        // Only reorder the filteredTasks slice; use ids for reliability if necessary
        tasks.update(tsks => {
          const fromId = $filteredTasks[evt.oldIndex].id;
          const toId = $filteredTasks[evt.newIndex].id;
          const copy = [...tsks];
          // Find indexes in original array (not just filtered slice)
          const fromIdx = copy.findIndex(t => t.id === fromId);
          const [moved] = copy.splice(fromIdx, 1);
          const toIdx = copy.findIndex(t => t.id === toId);
          copy.splice(toIdx, 0, moved);
          return copy;
        });
      }
    });
  });

</script>

<main class="max-w-2xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-4 text-center">Task Management Dashboard</h1>
    <TaskForm onSubmit={addTask}/>
  <FilterBar />
 
   <ul bind:this={list} class="mt-4">
    {#each $filteredTasks as task, i (task.id)}
      <li class="flex items-center mb-2">
        <span class="drag-handle cursor-move mr-2">☰</span>
        <TaskCard {task} onEdit={handleEdit} onDelete={handleDelete}/>
      </li>
    {/each}
  </ul>

  {#if showingEdit}
    <TaskEditModal task={editTask!} onClose={() => showingEdit = false} onSave={updated =>
      tasks.update(tsks => tsks.map(t => t.id === updated.id ? updated : t))
    } />
  {/if}

  {#if confirmDelete}
    <ConfirmationDialog message="Are you sure you want to delete this task?" onConfirm={confirmDeleteTask} onCancel={() => confirmDelete = false} />
  {/if}
</main>

