<script>
	export let todo = {};
</script>

<div class="flex items-center gap-4 pl-4">
	<input type="checkbox" />
	<p>{todo.text}</p>
	<button class="border border-slate-800 bg-slate-300 px-2 text-xs" on:click>delete </button>
</div>
