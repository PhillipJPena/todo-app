<script>
	import { todos } from './../stores/todos.js';
	import { Todo } from './../classes/todo.js';
	import TodoItem from './TodoItem.svelte';
	import AddTodoForm from './AddTodoForm.svelte';

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

<div class="flex flex-1 justify-center">
	<div class="max-w-4xl flex-1 p-4">
		<h1 class="p-4 text-3xl font-bold">Inbox</h1>
		<ul class="my-2 flex-1 divide-y divide-slate-600">
			{#each $todos as todo (todo.uid)}
				<TodoItem {todo} />
			{/each}
		</ul>
		<AddTodoForm on:submit={handleSubmit} />
	</div>
</div>
