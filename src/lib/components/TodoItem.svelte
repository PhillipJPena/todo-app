<script>
	export let todo = {};

	let editEnabled = false;

	const updateTodo = (e) => {
		editEnabled = false;
	};
</script>

<div class="flex justify-between">
	<div class="flex items-center gap-4">
		<input type="checkbox" class="checkbox" />
		{#if editEnabled}
			<input type="text" bind:value={todo.text} on:change={updateTodo} />
			<input type="text" bind:value={todo.description} on:change={updateTodo} />
		{:else}
			<p on:dblclick={() => (editEnabled = true)}>{todo.text}</p>
			<p on:dblclick={() => (editEnabled = true)}>{todo.description}</p>
			{#if todo.dueDate}
				<p on:dblclick={() => (editEnabled = true)}>due: {todo.dueDate}</p>
			{/if}
			{#if todo.priority}
				<p on:dblclick={() => (editEnabled = true)}>priority: {todo.priority}</p>
			{/if}
		{/if}
	</div>
	<div>
		{#if editEnabled}
			<button class="btn btn-outline btn-xs" on:click={() => (editEnabled = false)}
				>cancel edit</button
			>
		{:else}
			<button class="btn btn-outline btn-xs" on:click={() => (editEnabled = true)}>edit </button>
		{/if}
		<button class="btn btn-outline btn-xs" on:click>delete </button>
	</div>
</div>
