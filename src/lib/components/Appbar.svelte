<script>
	import { isSidebarOpen } from '$lib/stores/sidebar.js';
	import Icon from '@iconify/svelte';
</script>

<div class="navbar  bg-base-300">
	<p class="navbar-start">
		<button class="btn btn-square" on:click>
			{#if $isSidebarOpen}
				<Icon icon="pixelarticons:backburger" height="24" />
			{:else}
				<Icon icon="pixelarticons:menu" height="24" />
			{/if}
		</button>
	</p>
	<p class="navbar-center text-2xl font-bold">Todo</p>
	<p class="navbar-end">goodbye</p>
</div>
