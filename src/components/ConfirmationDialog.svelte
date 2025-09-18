<script lang="ts">
  let { message, onConfirm, onCancel } = $props<{
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
  }>();
</script>

<div class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
  <div class="bg-white dark:bg-gray-800 p-6 rounded shadow-md max-w-sm w-full text-gray-900 dark:text-gray-100">
    <p class="mb-4">{message}</p>
    <button
      class="bg-red-500 text-white px-3 py-1 rounded mr-2 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
      onclick={onConfirm}
    >
      Confirm
    </button>
    <button
      class="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
      onclick={onCancel}
    >
      Cancel
    </button>
  </div>
</div>
