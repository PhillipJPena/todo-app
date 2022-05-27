<script>
	import { todos } from './../stores/todos.js';
	import { Todo } from './../classes/todo.js';
	import TodoItem from './TodoItem.svelte';
	import AddTodoForm from './AddTodoForm.svelte';

	//delete todo item
	function removeTodo(uid) {
		$todos = $todos.filter((todo) => todo.uid !== uid);
	}
</script>

<div class="flex flex-1 justify-center">
	<div class="max-w-4xl flex-1 p-4">
		<h1 class="p-4 text-3xl font-bold">Inbox</h1>
		<ul class="my-2 flex-1 divide-y divide-slate-600">
			{#each $todos as todo (todo.uid)}
				<TodoItem {todo} on:click={removeTodo(todo.uid)} />
			{/each}
		</ul>
		<AddTodoForm />
	</div>
</div>
