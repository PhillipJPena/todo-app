<script>
	import MainContent from './../lib/components/MainContent.svelte';
	import Appbar from '$lib/components/Appbar.svelte';
	import '../app.css';
	import Sidebar from '../lib/components/Sidebar.svelte';
</script>

<Appbar />
<div class="flex h-full">
	<Sidebar>
		<ul class="menu whitespace-nowrap">
			<li>a</li>
			<li>b</li>
			<li>c</li>
		</ul>
	</Sidebar>
	<MainContent />
</div>
