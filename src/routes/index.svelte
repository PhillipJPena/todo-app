<script>
	import '../app.css';

	let projects = ['Inbox', 'Chores', 'Shopping List', 'Gym Routine'];
	let openProject = projects[0];
</script>

<div class="flex h-full flex-col p-3">
	<header class="flex justify-center ">
		<h1 class="text-2xl font-bold ">Todo List</h1>
	</header>

	<div class="flex flex-1 flex-col gap-3">
		<h1 class="text-4xl font-bold">{openProject}</h1>
		<ul class="flex h-full flex-col gap-2 rounded-lg border">
			{#each projects as proj}
				<li>
					<button class="btn btn-block" on:click={() => (openProject = proj)}>{proj}</button>
				</li>
			{/each}
		</ul>
		<div class="flex h-12 w-full justify-between rounded-lg bg-black">
			<button class="btn btn-ghost text-white">Projects</button>
			<button class="btn btn-ghost text-white">+Add Todo</button>
		</div>
	</div>
</div>
