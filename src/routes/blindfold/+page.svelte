<script lang="ts">
	import TextSlideY from '$lib/components/effects/TextSlideY.svelte';
	import DetailOverlay from '$lib/components/gallery/DetailOverlay.svelte';
	import { images } from '$lib/constants/images';
	import type { Image } from '$lib/constants/images';
	import { colorState } from '$lib/states/color.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { sineOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const image: Image = images[5];
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
		'FEBRUARY 2025',
		'PASSION',
		'FULL-STACK DEV & MOTION',
		'BLINDFOLD'
	];
	const rightFields: Array<string> = [
		'TOTAL DARKNESS IN COMPLETE FOCUS',
		'COMFORT FOR EVERY MOMENT'
	];
	const description: Array<string> = [
		'TOTAL DARKNESS IN COMPLETE FOCUS',
		'COMFORT FOR EVERY MOMENT'
	];

	onMount(() => {
		colorState.overlayColor = image.overlayColor;
		colorState.backgroundColor = image.backgroundColor;
		colorState.selectedIndex = 5;
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
	style:color={image.overlayColor}
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
			class="absolute left-[5%] top-[25%] h-[50%] w-[50%] object-cover object-center"
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
				class="absolute top-[10%] left-[73.5%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-54.5vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				B
			</div>
			<div
				class="absolute top-[10%] left-[78.5%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-48.5vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				L
			</div>
			<div
				class="absolute top-[10%] left-[82.5%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-37.5vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				I
			</div>
			<div
				class="absolute top-[10%] left-[85%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-25vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				N
			</div>
			<div
				class="absolute top-[10%] left-[90%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-18vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				D
			</div>
			<div
				class="absolute top-[55%] left-[77%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-53vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				F
			</div>
			<div
				class="absolute top-[55%] left-[81%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-41vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				O
			</div>
			<div
				class="absolute top-[55%] left-[86%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-19vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				L
			</div>
			<div
				class="absolute top-[55%] left-[90%] w-[8vw] h-[30vh] flex items-center justify-start"
				transition:fly={{ x: '-12vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				D
			</div>
		</div>

		<!-- <div class="absolute left-[5%] top-[85%] text-jws text-md leading-[1rem]"> -->
		<!-- 	{#each description as line} -->
		<!-- 		<TextSlideY -->
		<!-- 			text={line} -->
		<!-- 			center={false} -->
		<!-- 			stagger={true} -->
		<!-- 			letterDelay={10} -->
		<!-- 			delay={1000} -->
		<!-- 			distance={'1lh'} -->
		<!-- 		/> -->
		<!-- 	{/each} -->
		<!-- </div> -->
	{/if}
</div>
