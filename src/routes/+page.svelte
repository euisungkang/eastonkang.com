<script lang='ts'>
	import { timeout, shapes, colors, baseColors } from '$lib/constants/shapes';
	import AOS from 'aos';
	import Signature from '$lib/components/home/Signature.svelte';
	import { onMount } from 'svelte';
	import BlueHover from '$lib/components/home/hover/BlueHover.svelte';
	import PurpleHover from '$lib/components/home/hover/PurpleHover.svelte';

	let hoveredIndex: number = -1;
	let handleMouseEnter = (index: number) => {
		if (!animationActive) {
			hoveredIndex = index;
			timeoutAnimation(timeout[hoveredIndex]);
		}
	};
	let animationActive: boolean;

	onMount(() => {
		AOS.init();
		timeoutAnimation(1500);
	});

	let timeoutAnimation = (timeout: number) => {
		animationActive = true;
		setTimeout(() => {
			animationActive = false;
		}, timeout);
	};

	function handleMouseLeave() {
		hoveredIndex = -1;
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<div class="dark h-screen w-screen flex items-center justify-center bg-[#121212]">
	<div class="w-full h-full flex items-center justify-center">
		<div class="grid grid-cols-3 place-items-center place-content-center">
			{#each shapes as shape, i}
				<a
					href="/"
					class={
						`col-span-1 transition-all h-[25vh] w-[25vh] ease-in-out cursor-default duration-[400ms] delay-100 m-4
						${hoveredIndex === -1 ? '' : shapes[hoveredIndex].transitions[i]}`
					}
				>
					<div
						data-aos={shape.direction}
						data-aos-duration={750}
						data-aos-delay={shape.delay}
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						class="w-full h-full"
					>
						<div
							on:mouseenter={() => handleMouseEnter(i)}
							on:focus={() => {}}
							on:mouseout={handleMouseLeave}
							on:blur={() => {}}
							role="none"
							class={
								`h-full w-full rounded-xl -z-10 transition-colors cursor-pointer ease-in-out duration-200
								${hoveredIndex === -1 ? baseColors[i] : colors[hoveredIndex].alt} ${colors[i].main}`
							}
						>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<BlueHover hoveredIndex={hoveredIndex}/>
	<PurpleHover hoveredIndex={hoveredIndex}/>

	<Signature hoveredIndex={hoveredIndex}/>
</div>
