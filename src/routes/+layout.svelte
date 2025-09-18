<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import DarkModeToggle from '../components/DarkModeToggle.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<ModeWatcher />
<div class="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
	 <DarkModeToggle />
    {@render children?.()}
</div>

<!-- {@render children?.()} -->
