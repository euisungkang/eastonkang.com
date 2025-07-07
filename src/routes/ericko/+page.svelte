<script lang="ts">
	import DetailOverlay from '$lib/components/gallery/DetailOverlay.svelte';
	import { images } from '$lib/constants/images';
	import type { Image } from '$lib/constants/images';
	import { colorState } from '$lib/states/color.svelte';
	import { onMount } from 'svelte';
	import { sineOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const image: Image = images[1];
	let visible: boolean = $state(false);

	const leftFields: Array<string> = ['ONGOING', 'PORTFOLIO', 'FULL-STACK DEV & MOTION', 'ERIC KO'];
	const rightFields: Array<string> = [
		'PORTFOLIO OF ERIC KO, CREATIVE',
		'PHOTOGRAPHER AND DESIGNER'
	];

	onMount(() => {
		colorState.overlayColor = image.overlayColor;
		colorState.backgroundColor = image.backgroundColor;
		colorState.selectedIndex = 1;
		visible = true;
	});
</script>

<div
	class="h-screen w-screen flex items-center justify-center overflow-hidden"
	style:background-color={image.backgroundColor}
>
	{#if visible}
		<img
			src={image.image}
			class="absolute left-[5%] top-[25%] h-[50vh] w-[50vw] object-cover object-center"
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
				class="absolute top-[10%] left-[75%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-56vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				E
			</div>
			<div
				class="absolute top-[10%] left-[80%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-56vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				R
			</div>
			<div
				class="absolute top-[10%] left-[85%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-50vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				I
			</div>
			<div
				class="absolute top-[10%] left-[90%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-48vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				C
			</div>
			<div
				class="absolute top-[55%] left-[75%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-10vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				K
			</div>
			<div
				class="absolute top-[55%] left-[85%] w-[8vw] h-[30vh] flex items-center justify-start"
				in:fly={{ x: '-13vw', duration: 1000, easing: sineOut, opacity: 1 }}
			>
				O
			</div>
		</div>
	{/if}
</div>
