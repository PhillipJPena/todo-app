<script>
	import Icon from '@iconify/svelte';
	export let todo = {};
</script>

<li id="todoItem" class="flex flex-1 justify-between gap-4 p-2">
	<div id="wrapper" class="flex gap-4">
		<input type="checkbox" class="checkbox mt-2" />
		<div id="todoContent" class="flex flex-col gap-1">
			<p class="text-lg font-medium">{todo.text}</p>
			<p class="text-sm">{todo.description}</p>
			<div id="todoData" class="flex gap-4">
				<p class="text-sm">{todo.date}</p>
				<p class="text-sm">{todo.priority}</p>
				<p class="text-sm">{todo.project}</p>
			</div>
		</div>
	</div>
	<button class="btn btn-ghost btn-square btn-sm">
		<Icon icon="simple-line-icons:options" height="24" />
	</button>
</li>
