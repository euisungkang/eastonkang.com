<script lang="ts">
	import TextSlideY from '$lib/components/effects/TextSlideY.svelte';
	import DetailOverlay from '$lib/components/gallery/DetailOverlay.svelte';
	import { images } from '$lib/constants/images';
	import type { Image } from '$lib/constants/images';
	import { colorState } from '$lib/states/color.svelte';
	import { onMount } from 'svelte';
	import { sineOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const image: Image = images[5];
	let visible: boolean = $state(false);

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
	});
</script>

<div
	class="h-screen w-screen flex items-center justify-center overflow-hidden"
	style:background-color={image.backgroundColor}
	style:color={image.overlayColor}
>
	{#if visible}
		<img
			src={image.image}
			class="absolute left-[5%] top-[25%] h-[50%] w-[50%] object-cover object-center"
			in:fly={{ x: '40%', duration: 1000, easing: sineOut, opacity: 1 }}
			alt="Test"
		/>
		<DetailOverlay
			color={colorState.overlayColor}
			{leftFields}
			{rightFields}
			invert={true}
			path={'/gallery'}
		/>

		<div
			class="relative w-full h-full font-tny text-[20vw] pointer-events-none"
			style:color={colorState.overlayColor}
		>
			<div
				class="absolute top-[10%] left-[73.5%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-51vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				B
			</div>
			<div
				class="absolute top-[10%] left-[78.5%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-45vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				L
			</div>
			<div
				class="absolute top-[10%] left-[82.5%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-35vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				I
			</div>
			<div
				class="absolute top-[10%] left-[85%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-25vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				N
			</div>
			<div
				class="absolute top-[10%] left-[90%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-18vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				D
			</div>
			<div
				class="absolute top-[55%] left-[77%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-51vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				F
			</div>
			<div
				class="absolute top-[55%] left-[81%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-40vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				O
			</div>
			<div
				class="absolute top-[55%] left-[86%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-18vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				L
			</div>
			<div
				class="absolute top-[55%] left-[90%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-12vw', duration: 1000, easing: sineOut, opacity: 1 }}
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
