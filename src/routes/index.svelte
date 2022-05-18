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

<div id="index" class="ml-4">
	<h1 class="text-3xl font-bold">inbox</h1>
	<ul>
		{#each todos as todo (todo.uid)}
			<li class="mb-2">
				<TodoItem {todo} on:click={removeFromList(todo.uid)} />
			</li>
		{/each}
	</ul>
	<input type="text" class="border border-slate-600" on:change={handleChange} />
</div>
