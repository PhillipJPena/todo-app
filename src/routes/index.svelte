<script>
	import MainContent from './../lib/components/MainContent.svelte';
	import Appbar from '$lib/components/Appbar.svelte';
	import '../app.css';
	import Sidebar from '../lib/components/Sidebar.svelte';

	let projects = ['inbox', 'today', 'tomorrow', 'next 7 days'];
</script>

<Appbar />
<div class="flex h-full">
	<Sidebar>
		<ul class="menu whitespace-nowrap">
			{#each projects as project}
				<!-- content here -->
				<li><a>{project}</a></li>
			{/each}
		</ul></Sidebar
	>
	<MainContent />
</div>
