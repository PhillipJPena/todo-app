<script>
	export let todo = {};
</script>

<div class="flex justify-between">
	<div class="flex items-center gap-4">
		<input type="checkbox" class="checkbox" />
		<p>{todo.text}</p>
	</div>
	<button class="btn btn-outline btn-xs" on:click>delete </button>
</div>
