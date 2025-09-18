<script lang="ts">
	import type { TaskStatus } from "$lib/types";
	import { filter } from "../stores/tasks";
  let options: Array<"all" | TaskStatus> = ["all", "pending", "in-progress", "completed"];
</script>

<div class="flex gap-2 justify-center mb-4 mt-4">
  {#each options as option, index (index)}
    <button 
      class="px-3 py-1 rounded border { $filter === option ? 'bg-blue-500 text-white dark:bg-blue-400 dark:text-gray-900' 
      : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200'}"
      aria-label={`Filter ${option}`}
      onclick={() => filter.set(option)}
    >
      {option}
    </button>
  {/each}
</div>
