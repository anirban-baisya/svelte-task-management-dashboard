<script lang="ts">
  let isDark = $state(false);
  function toggle() {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
  }
</script>

<button onclick={toggle} class="rounded bg-gray-300 px-3 py-1 dark:bg-gray-700">
  {isDark ? '🌙' : '☀️'} Dark Mode
</button>
