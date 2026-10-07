<script lang="ts">
	import DetailOverlay from '$lib/components/gallery/DetailOverlay.svelte';
	import { images } from '$lib/constants/images';
	import type { Image } from '$lib/constants/images';
	import { colorState } from '$lib/states/color.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { sineOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const image: Image = images[2];
	let visible: boolean = $state(false);
	let leaving: boolean = $state(false);
	// Forward from the gallery: replay the EXPLORE panel exiting (bottom)
	// in unison with the RETURN panel and letters entering.
	const fromGallery: boolean = colorState.enteringFromGallery;
	let exploreExiting: boolean = $state(fromGallery);

	function leave() {
		if (leaving) return;
		colorState.returning = true;
		visible = false; // plays the out:fly back to the gallery positions
		leaving = true; // brings in the gallery's EXPLORE panel in unison
		setTimeout(() => goto('/gallery'), 970);
	}

	function handleKeydown(e: KeyboardEvent) {
		// Up returns to the gallery, same as the RETURN link.
		if (e.key === 'ArrowUp') leave();
	}

	const leftFields: Array<string> = [
		'APRIL 2025',
		'FREELANCE',
		'FULL-STACK DEV & MOTION',
		'LAMINA'
	];
	const rightFields: Array<string> = [
		'CRAFTING BOLD, FLUID MOTION',
		'FOR CREATIVES AND WEB DESIGNERS'
	];

	onMount(() => {
		colorState.overlayColor = image.overlayColor;
		colorState.backgroundColor = image.backgroundColor;
		colorState.selectedIndex = 2;
		visible = true;
		if (fromGallery) {
			colorState.enteringFromGallery = false;
			requestAnimationFrame(() => (exploreExiting = false));
		}
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	class="h-screen w-screen flex items-center justify-center overflow-hidden"
	style:background-color={image.backgroundColor}
>
	{#if leaving}
		<DetailOverlay
			color={colorState.overlayColor}
			{leftFields}
			{rightFields}
			invert={false}
		/>
	{/if}
	{#if exploreExiting}
		<DetailOverlay
			color={colorState.overlayColor}
			{leftFields}
			{rightFields}
			invert={false}
			instant
			exit
		/>
	{/if}
	{#if visible}
		<img
			src={image.image}
			class="absolute left-[5%] top-[25%] h-[50vh] w-[50vw] object-cover object-center"
			transition:fly={{ x: '40%', duration: 1000, easing: sineOut, opacity: 1 }}
			alt="Test"
		/>
		<DetailOverlay
			color={colorState.overlayColor}
			{leftFields}
			{rightFields}
			invert={true}
			path={'/gallery'}
			onLeave={leave}
		/>
		<div
			class="relative w-full h-full font-tny text-[20vw] pointer-events-none"
			style:color={colorState.overlayColor}
		>
			<div
				class="absolute top-[10%] left-[80%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-65vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				L
			</div>
			<div
				class="absolute top-[10%] left-[85%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-60vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				A
			</div>
			<div
				class="absolute top-[10%] left-[90%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-55vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				M
			</div>
			<div
				class="absolute top-[55%] left-[80%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-20vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				I
			</div>
			<div
				class="absolute top-[55%] left-[85%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-15vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				N
			</div>
			<div
				class="absolute top-[55%] left-[90%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-10vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				A
			</div>
		</div>
	{/if}
</div>
