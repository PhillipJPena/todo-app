<script>
	import { todos } from './../lib/stores/todos.js';
	import { Todo } from './../lib/classes/todo.js';
	import TodoItem from '../lib/components/TodoItem.svelte';
	import AddTodoForm from '../lib/components/AddTodoForm.svelte';

	//when text input is submitted
	const handleChange = (e) => {
		let text = e.target.value;
		let desc = 'default';
		$todos = [...$todos, new Todo(text, desc)];
		//reset the text input
		e.target.value = '';
	};

	//delete todo item
	const removeFromList = (uid) => {
		let index = $todos.findIndex((todo) => todo.uid === uid);
		$todos.splice(index, 1);
		$todos = $todos;
	};

	const handleSubmit = (e) => {
		const formData = new FormData(e.target);
		const data = {};

		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}

		$todos = [...$todos, new Todo(data)];
		e.target.reset();
	};
</script>

<div class="p-4">
	<h1 class="p-4 text-xl font-bold">Inbox</h1>
	<ul class="my-2">
		{#each $todos as todo (todo.uid)}
			<li>
				<TodoItem {todo} on:click={removeFromList(todo.uid)} />
			</li>
			<div class="divider my-1" />
		{/each}
	</ul>

	<AddTodoForm on:submit={handleSubmit} />
</div>
