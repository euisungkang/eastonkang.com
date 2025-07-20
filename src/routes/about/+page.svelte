<script lang="ts">
	import LetterSlide from '$lib/components/effects/LetterSlide.svelte';
	import TextSlideY from '$lib/components/effects/TextSlideY.svelte';
	import DetailOverlay from '$lib/components/gallery/DetailOverlay.svelte';
	import AboutSocials from '$lib/components/overlay/AboutSocials.svelte';
	import Catalog from '$lib/components/overlay/Catalog.svelte';
	import Description from '$lib/components/overlay/Description.svelte';
	import { onMount } from 'svelte';

	const textColor: string = '#adb5ad';

	let load: boolean = $state(false);
	let letterReverse: boolean = $state(false);
	const text: string = 'EASTON';

	const leftFields: Array<string> = [
		'AUGUST 2022',
		'PORTFOLIO',
		'FULL-STACK DEV & MOTION',
		'EASTON KANG'
	];
	const rightFields: Array<string> = [
		'FIRST RELEASE OF PORTFOLIO MADE',
		'WITH SVELTEKIT|GSAP|FRAMER'
	];

	onMount(() => {
		setTimeout(() => {
			load = true;
		}, 300);
	});
</script>

<div class="dark h-screen w-screen overflow-hidden bg-[#121212] flex" style:color={textColor}>
	<div class="font-tny text-[20vw]">
		<div class="absolute top-[2%] left-[2%]">
			<LetterSlide reverse={letterReverse} letter="E" />
		</div>
		<div class="absolute top-[2%] left-[6%]">
			<LetterSlide reverse={letterReverse} letter="A" />
		</div>
		<div class="absolute top-[2%] left-[11%]">
			<LetterSlide reverse={letterReverse} letter="S" />
		</div>
		<div class="absolute top-[2%] left-[16%]">
			<LetterSlide reverse={letterReverse} letter="T" />
		</div>
		<div class="absolute top-[2%] left-[21%]">
			<LetterSlide reverse={letterReverse} letter="O" />
		</div>
		<div class="absolute top-[2%] left-[26%]">
			<LetterSlide reverse={letterReverse} letter="N" />
		</div>
	</div>

	{#if load}
		<div class="w-2/6 h-full flex flex-col font-jws">
			<div
				class="absolute top-[45%] left-[2.35%] leading-2.5 text-[0.7rem] flex flex-col items-start"
			>
				<TextSlideY
					text={'EASTON IS A BUILDER DRAWN TO PATTERNS IN SYSTEMS, STORIES'}
					stagger={true}
					letterDelay={10}
				/>
				<TextSlideY
					text={'AND PEOPLE. THIS SPACE IS A REFLECTION OF THE THINGS HE HAS'}
					stagger={true}
					letterDelay={10}
				/>
				<TextSlideY
					text={'SHAPED, THE QUESTIONS HE KEEPS ASKING, AND THE SPARKS THAT'}
					stagger={true}
					letterDelay={10}
				/>
				<TextSlideY text={'KEEP HIM CHASING WHAT COMES NEXT.'} stagger={true} letterDelay={10} />
			</div>
		</div>

		<div class="absolute top-[45%] left-[50%] w-1/2 h-2/4 font-jws flex items-center justify-end">
			<div class="w-full h-full relative">
				<Catalog overlayColor={textColor} />
			</div>
		</div>

		<DetailOverlay
			color={textColor}
			{leftFields}
			{rightFields}
			simple={true}
			customLabel={'GALLERY'}
			delay={1200}
			invert={false}
			path={'/gallery'}
		/>

		<AboutSocials overlayColor={textColor} delay={1500} />
		<Description overlayColor={textColor} invert={true} delay={1500} />
	{/if}
</div>
