<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from './Logo.svelte';
	import Description from './Description.svelte';
	import Crosshairs from './Crosshairs.svelte';
	import Socials from './Socials.svelte';
	// import Links from './Links.svelte';

	let {
		overlayColor,
		simple = true
	}: {
		overlayColor: string;
		simple?: boolean;
	} = $props();

	let load: boolean = $state(false);

	onMount(() => {
		load = true;
	});
</script>

<div
	class="w-screen h-screen absolute top-0 left-0
         [&>*]:transition-colors [&>*]:duration-1000 [&>*]:ease-out"
>
	{#if load}
		{#if !simple}
			<Crosshairs {overlayColor} />
			<Socials {overlayColor} />
			<Description {overlayColor} />
		{/if}
		<Logo {overlayColor} />
		<!-- {#if selectedIndex != -1} -->
		<!--   <Frame  -->
		<!--     overlayColor={overlayColor} -->
		<!--   /> -->
		<!-- {/if} -->
		<!-- <Links -->
		<!--   overlayColor={overlayColor} -->
		<!-- /> -->
	{/if}
</div>
