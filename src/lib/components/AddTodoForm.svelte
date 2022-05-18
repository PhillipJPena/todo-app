<script>
</script>

<form
	class="form-control max-w-2xl rounded-xl border border-slate-600 py-2 px-4"
	on:submit|preventDefault
>
	<label for="text" class="label">
		<span class="label-text text-lg font-semibold">Add Todo</span>
	</label>
	<input type="text" name="text" id="text" class="input input-bordered input-sm" />

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
	/>

	<div class="flex gap-8">
		<div class="flex flex-col">
			<label for="dueDate" class="label">
				<span class="label-text">Due Date</span>
				<span class="label-text-alt ">*optional</span>
			</label>
			<input type="date" name="dueDate" id="dueDate" class="input input-bordered input-sm" />
		</div>

		<div>
			<label for="priority" class="label">
				<span class="label-text">Priority</span>
				<span class="label-text-alt">*optional</span>
			</label>
			<div class="mt-1  flex gap-4">
				<label for="low-priority" class="label-text-alt">low</label>
				<input
					type="radio"
					name="priority"
					id="low-priority"
					value="low"
					class="radio checked:bg-yellow-500"
				/>
				<label for="med-priority" class="label-text-alt">medium</label>
				<input
					type="radio"
					name="priority"
					id="med-priority"
					value="medium"
					class="radio checked:bg-orange-500"
				/>
				<label for="high-priority" class="label-text-alt">high</label>
				<input
					type="radio"
					name="priority"
					id="high-priority"
					value="high"
					class="radio checked:bg-red-500"
				/>
			</div>
		</div>
	</div>
	<input type="submit" value="Submit" class="btn my-4 place-self-start" />
</form>
