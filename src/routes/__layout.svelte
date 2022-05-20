<script>
	import Appbar from '$lib/components/Appbar.svelte';
	import { isSidebarOpen } from '$lib/stores/sidebar.js';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';
	import '../app.css';

	//width in px
	const SIDEBAR_OPEN_WIDTH = 240;
	const SIDEBAR_CLOSED_WIDTH = 0;

	const sidebarWidth = tweened(0, {
		duration: 200,
		easing: linear
	});

	const toggleSidebar = () => {
		$isSidebarOpen = !$isSidebarOpen;

		return $isSidebarOpen
			? sidebarWidth.set(SIDEBAR_OPEN_WIDTH)
			: sidebarWidth.set(SIDEBAR_CLOSED_WIDTH);
	};
</script>

<Appbar on:click={toggleSidebar} {$isSidebarOpen} />
<div class="flex h-full">
	{#if $isSidebarOpen}
		<div class="absolute h-full w-full bg-black opacity-50 sm:hidden" on:click={toggleSidebar} />
	{/if}
	<div
		class="absolute h-full overflow-hidden  bg-base-200 sm:relative"
		style:width="{$sidebarWidth}px"
	>
		<ul class="menu whitespace-nowrap" style:width="{$sidebarWidth}px">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
	</div>
	<div class="flex flex-1 justify-center">
		<slot />
	</div>
</div>
