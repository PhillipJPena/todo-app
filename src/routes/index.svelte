<script>
	import { Todo } from './../lib/classes/todo.js';
	import TodoItem from '../lib/components/TodoItem.svelte';

	let todos = [
		new Todo('cat', 'meow'),
		new Todo('dog', 'woof'),
		new Todo('duck', 'quack'),
		new Todo('cow', 'moo')
	];

	//when text input is submitted
	const handleChange = (e) => {
		let text = e.target.value;
		let desc = 'default';
		todos = [...todos, new Todo(text, desc)];
		//reset the text input
		e.target.value = '';
	};

	//delete todo item
	const removeFromList = (uid) => {
		let index = todos.findIndex((todo) => todo.uid === uid);
		todos.splice(index, 1);
		todos = todos;
	};
</script>

<div class="p-2">
	<h1 class="p-4 text-xl font-bold">inbox</h1>
	<ul class="my-2">
		{#each todos as todo (todo.uid)}
			<li>
				<TodoItem {todo} on:click={removeFromList(todo.uid)} />
			</li>
			<div class="divider my-1" />
		{/each}
	</ul>
	<div class="flex gap-2">
		<p>Add Todo:</p>
		<input type="text" class="input input-bordered input-sm" on:change={handleChange} />
	</div>
</div>
