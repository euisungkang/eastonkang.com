<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { images } from '$lib/constants/images';
	import { sineOut } from 'svelte/easing';
	import { colorState } from '$lib/states/color.svelte';
	import WavyOverlay from '$lib/components/gallery/WavyOverlay.svelte';
	import LaminaOverlay from '$lib/components/gallery/LaminaOverlay.svelte';
	import EricKoOverlay from '$lib/components/gallery/EricKoOverlay.svelte';
	import SpacePOverlay from '$lib/components/gallery/SpacePOverlay.svelte';
	import MilitaryOverlay from '$lib/components/gallery/MilitaryOverlay.svelte';
	import V1Overlay from '$lib/components/gallery/V1Overlay.svelte';
	import BlindOverlay from '$lib/components/gallery/BlindOverlay.svelte';
	import ArrowHelper from '$lib/components/overlay/ArrowHelper.svelte';
	import HhOverlay from '$lib/components/gallery/HHOverlay.svelte';

	// Arriving from a detail page: seed the track at the selected item so the
	// scroll position is correct on the first frame (no whole-track scroll-in).
	const returning: boolean = colorState.returning;
	const returnIndex: number = colorState.selectedIndex;
	const returnPercentage: number = -21 * returnIndex + 25;

	let gap: string = $state(returning ? '7%' : '1%');
	let selectedIndex: number = $derived(colorState.selectedIndex);
	let path: string = $derived(selectedIndex == -1 ? '' : images[selectedIndex].path);
	let grayscaleIndex: number = $state(returning ? returnIndex : 0);
	let mouseDownX: number = 0;
	let mouseUpX: number = returning ? returnPercentage : 50;
	let innerWidth: number = $state(0);
	let percentage: number = $state(returning ? returnPercentage : 50);
	let imagePercentage: number = $state(returning ? 50 : 100);
	let letterReverse: boolean = $state(false); // ! = left -> right
	// trackVisible stays false initially so the image in: transitions still play
	// (Svelte skips intros for elements present on the very first render).
	let trackVisible: boolean = $state(false);
	let skipEntrance: boolean = $state(returning); // true on arrival from a detail page

	function expandImage(i: number) {
		if (i == -1) return;
		// (-14 (def vw) - 7 (post-ml)) * i + (25 (half of expanded))
		letterReverse = selectedIndex != -1 && i < selectedIndex;
		percentage = -21 * i + 25;
		selectedIndex = i;
		grayscaleIndex = i;
		gap = '7%';
		imagePercentage = 50;

		colorState.backgroundColor = images[i].backgroundColor;
		colorState.overlayColor = images[i].overlayColor;
	}

	function mouseDownAt(e: MouseEvent) {
		mouseDownX = e.clientX;
		skipEntrance = false; // user is interacting: let subsequent overlays animate
	}

	function mouseUpAt() {
		mouseDownX = 0;
		mouseUpX = percentage;
	}

	function handleKeydown(e: KeyboardEvent) {
		skipEntrance = false;
		if (e.key === 'ArrowLeft' && selectedIndex > 0) expandImage(selectedIndex - 1);
		else if (e.key === 'ArrowRight' && selectedIndex < images.length - 1)
			expandImage(selectedIndex + 1);
		// Down opens the focused item, same as its EXPLORE link.
		else if (e.key === 'ArrowDown' && selectedIndex != -1) goto(path);
	}

	function mouseMove(e: MouseEvent) {
		if (mouseDownX == 0) return;

		const mouseDelta = mouseDownX - e.clientX;
		const maxDelta = innerWidth / 2;
		const rawPercentage = (mouseDelta / maxDelta) * -100;

		// 54 (104) = 14 * 7 + 6 (gaps 1)
		percentage = Math.max(Math.min(rawPercentage + mouseUpX, 50), -54);
		imagePercentage = percentage / 2 + 50;
		grayscaleIndex = Math.min(
			// 15 = 14 (width) + 1
			Math.floor(-(percentage - 50) / 15),
			images.length - 1
		);

		// Reset selected image and reset gap
		selectedIndex = -1;
		gap = '1%';
		letterReverse = false;
		colorState.backgroundColor = '#121212';
		colorState.overlayColor = '#adb5ad';
	}

	onMount(() => {
		console.log('<Developed by Easton Kang> https://eastonkang.com');
		if (returning) {
			// Track is already seeded at the selected position; just reveal the
			// images (so their in: transitions play) and clear the flag.
			trackVisible = true;
			colorState.returning = false;
		} else {
			setTimeout(() => {
				trackVisible = true;
				expandImage(selectedIndex);
			}, 500);
		}
	});
</script>

<svelte:window on:keydown={handleKeydown} bind:innerWidth />

<div
	class="dark h-screen w-screen overflow-hidden transition-colors duration-1000 ease-out select-none"
	style:background-color={colorState.backgroundColor}
	role="scrollbar"
	aria-controls="0,1"
	aria-valuenow="0"
	tabindex="0"
	onmousedown={(e) => mouseDownAt(e)}
	onmouseup={() => mouseUpAt()}
	onmousemove={(e) => mouseMove(e)}
>
	<div class="h-full w-full relative">
		{#if selectedIndex == -1 && percentage >= 35}
			<ArrowHelper color={colorState.overlayColor} />
		{/if}

		<div
			class="flex absolute top-[50%] w-full items-center justify-start
             transition-transform duration-1000 ease-out"
			style:transform="translate({percentage}%, -50%)"
		>
			{#each images as img, i}
				{#if trackVisible}
					<!-- svelte-ignore a11y_no_noninteractive_element_interactions-->
					<!-- svelte-ignore a11y_click_events_have_key_events-->
					<img
						src={img.image}
						fetchpriority={i <= 4 ? 'high' : 'low'}
						class="object-cover object-center select-none h-[50vh]
                   transition-[object-position,width,filter,opacity,margin-left] duration-1000 ease-out"
						onclick={() => expandImage(i)}
						in:fly={{
							// On return: selected image is instant (seamless handoff),
							// the rest fade in place (x: 0) instead of popping.
							x: skipEntrance ? 0 : '50vw',
							duration: skipEntrance ? (i === selectedIndex ? 0 : 600) : 1000 + 50 * i,
							easing: sineOut,
							delay: skipEntrance ? 0 : 100 * i
						}}
						style:object-position="{imagePercentage}% center"
						style:margin-left={i != 0 ? gap : '0%'}
						style:filter="grayscale({i == grayscaleIndex ? 0 : 100}%)"
						style:opacity="{i == grayscaleIndex ? 100 : 50}%"
						style:width={i == selectedIndex ? '50vw' : '14vw'}
						alt="Test"
						draggable={false}
					/>
				{/if}
			{/each}
		</div>

		{#if selectedIndex == 0}
			<WavyOverlay color={colorState.overlayColor} {letterReverse} {path} instant={skipEntrance} />
		{:else if selectedIndex == 1}
			<EricKoOverlay
				color={colorState.overlayColor}
				{letterReverse}
				{path}
				instant={skipEntrance}
			/>
		{:else if selectedIndex == 2}
			<LaminaOverlay
				color={colorState.overlayColor}
				{letterReverse}
				{path}
				instant={skipEntrance}
			/>
		{:else if selectedIndex == 3}
			<SpacePOverlay
				color={colorState.overlayColor}
				{letterReverse}
				{path}
				instant={skipEntrance}
			/>
		{:else if selectedIndex == 4}
			<MilitaryOverlay
				color={colorState.overlayColor}
				{letterReverse}
				{path}
				instant={skipEntrance}
			/>
		{:else if selectedIndex == 5}
			<BlindOverlay color={colorState.overlayColor} {letterReverse} {path} instant={skipEntrance} />
		{:else if selectedIndex == 6}
			<HhOverlay color={colorState.overlayColor} {letterReverse} {path} instant={skipEntrance} />
		{/if}
	</div>
</div>
