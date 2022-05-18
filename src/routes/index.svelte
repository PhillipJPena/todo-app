<script>
	let name = 'Hello World.';
	let items = [];
	const handleChange = (e) => {
		items = [...items, { text: e.target.value, id: Math.random() }];
		e.target.value = '';
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2>Todos</h2>
<input type="text" on:change={handleChange} />
<ul>
	{#each items as item (item.id)}
		<li>{item.text}</li>
	{/each}
</ul>
