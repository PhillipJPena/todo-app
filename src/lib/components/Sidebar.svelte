<script>
	import { isSidebarOpen } from '$lib/stores/sidebar.js';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';

	const WIDTH_CLOSED = 0;
	const WIDTH_OPEN = 240;
	//just here to remove errors thrown by svelte
	let innerWidth;

	const sidebarWidth = tweened(0, {
		duration: 200,
		easing: linear
	});

	//reactive statement to set sidebar width when isSidebarOpen state changes
	$: $isSidebarOpen ? sidebarWidth.set(WIDTH_OPEN) : sidebarWidth.set(WIDTH_CLOSED);
</script>

<svelte:window
	bind:innerWidth
	on:resize={() => {
		if (innerWidth > 640 && !$isSidebarOpen) {
			return ($isSidebarOpen = !$isSidebarOpen);
		} else if (innerWidth <= 640 && $isSidebarOpen) {
			setTimeout(() => ($isSidebarOpen = false), 150);
		}
	}}
/>

{#if $isSidebarOpen}
	<div
		class="top-0~ fixed h-full w-full bg-black opacity-40 sm:hidden"
		on:click={() => ($isSidebarOpen = !$isSidebarOpen)}
	/>
{/if}

<div
	class="absolute h-full overflow-hidden  bg-base-200 sm:relative"
	style:width="{$sidebarWidth}px"
>
	<slot />
</div>
