<script lang="ts">
	import { onMount } from 'svelte';
	import LetterSlide from '../effects/LetterSlide.svelte';
	import DetailOverlay from './DetailOverlay.svelte';

	let {
		color,
		letterReverse
	}: {
		color: string;
		letterReverse: boolean;
	} = $props();

	let visible: boolean = $state(false);
	const leftFields: Array<string> = [
		'SEPTEMBER 2025',
		'PORTFOLIO',
		'FULL-STACK DEV & MOTION',
		'H.H. KANG'
	];
	const rightFields: Array<string> = [
		'FIRST RELEASE OF PORTFOLIO MADE',
		'WITH SVELTEKIT|GSAP|FRAMER'
	];

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<!-- Letters -->
	<div class="relative w-full h-full font-tny text-[20vw] pointer-events-none" style:color>
		<div class="absolute top-[10%] left-[22.5%]">
			<LetterSlide reverse={letterReverse} letter="H" />
		</div>
		<div class="absolute top-[10%] left-[30%]">
			<LetterSlide reverse={letterReverse} letter="H" />
		</div>
		<div class="absolute top-[55%] left-[61.5%]">
			<LetterSlide reverse={letterReverse} letter="K" />
		</div>
		<div class="absolute top-[55%] left-[67%]">
			<LetterSlide reverse={letterReverse} letter="A" />
		</div>
		<div class="absolute top-[55%] left-[72%]">
			<LetterSlide reverse={letterReverse} letter="N" />
		</div>
		<div class="absolute top-[55%] left-[77%]">
			<LetterSlide reverse={letterReverse} letter="G" />
		</div>
		<!-- <div class="absolute top-[50%] left-[52%]"> -->
		<!-- 	<LetterSlide reverse={letterReverse} letter="1" /> -->
		<!-- </div> -->
	</div>

	<!-- Bottom Overlay -->
	<DetailOverlay {color} {leftFields} {rightFields} invert={false} path={'/v1'} />
{/if}
