<script>
	import { Todo } from '../classes/todo';

	import { todos } from '../stores/todos';

	export let text;
	export let description;
	export let projectList = ['inbox'];
	export let dueDate;
	export let priority;
	let project = 'inbox';
	let hidden = true;

	function handleSubmit() {
		let submissionData = { text, description, project, dueDate, priority };
		$todos = [...$todos, new Todo(submissionData)];
	}
</script>

{#if hidden}
	<button class="btn btn-outline btn-accent normal-case" on:click={() => (hidden = !hidden)}
		>New Todo</button
	>
{/if}
<form
	class="form-control rounded-xl border border-slate-600 py-2 px-4"
	class:hidden
	on:submit|preventDefault={handleSubmit}
>
	<label for="text" class="label">
		<span class="label-text ">Todo</span>
	</label>
	<input
		type="text"
		name="text"
		id="text"
		class="input input-bordered input-sm"
		bind:value={text}
		required
	/>

	<label for="description" class="label">
		<span class="label-text">Description</span>
		<span class="label-text-alt">*optional</span>
	</label>
	<textarea
		name="description"
		id="description"
		cols="30"
		rows="3"
		class="textarea textarea-bordered"
		bind:value={description}
	/>

	<label for="project" class="label">
		<span class="label-text">Project</span>
		<span class="label-text-alt ">*optional</span>
	</label>

	<select
		name="project"
		id="project"
		class="select select-bordered select-sm w-full max-w-xs"
		bind:value={project}
	>
		{#each projectList as projectOption}
			<option>{projectOption}</option>
		{/each}
	</select>

	<label for="dueDate " class="label">
		<span class="label-text">Due Date</span>
		<span class="label-text-alt ">*optional</span>
	</label>
	<input
		type="date"
		name="dueDate"
		id="dueDate"
		class="input input-bordered input-sm max-w-xs"
		bind:value={dueDate}
	/>

	<div class="label max-w-[260px]">
		<span class="label-text">Priority</span>
		<span class="label-text-alt ">*optional</span>
	</div>

	<div class="flex ">
		<label for="low-priority" class="btn btn-ghost btn-sm">
			<span class="normal-case">Low</span>
			<input
				type="radio"
				name="priority"
				id="low-priority"
				value="low"
				class="radio ml-2"
				bind:group={priority}
			/>
		</label>
		<label for="med-priority" class="btn btn-ghost btn-sm">
			<span class="normal-case">Med</span>
			<input
				type="radio"
				name="priority"
				id="med-priority"
				value="medium"
				class="radio ml-2"
				bind:group={priority}
			/>
		</label>
		<label for="high-priority" class="btn btn-ghost btn-sm">
			<span class="normal-case">High</span>
			<input
				type="radio"
				name="priority"
				id="high-priority"
				value="high"
				class="radio ml-2"
				bind:group={priority}
			/>
		</label>
	</div>
	<div class="my-4">
		<input type="submit" value="Add Todo" class="btn btn-accent normal-case" />
		<button class="btn btn-outline normal-case" on:click={() => (hidden = !hidden)}>Cancel</button>
	</div>
</form>
