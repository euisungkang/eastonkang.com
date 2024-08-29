<script lang='ts'>
	import { shapes, colors, baseColors } from '$lib/constants/shapes';
	import AOS from 'aos';
	import Signature from '$lib/components/home/Signature.svelte';
	import { onMount } from 'svelte';

	let hoveredIndex: number = -1;
	let handleMouseEnter: (index: number) => void;

	onMount(() => {
		AOS.init();
	});

	setTimeout(() => {
		handleMouseEnter = (index: number) => {
			hoveredIndex = index;
		};
	}, 1500);

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
						`col-span-1 transition ease-in-out cursor-default duration-[400ms] delay-100 p-4
						${hoveredIndex === -1 ? '' : shapes[hoveredIndex].transitions[i]}`
					}
				>
					<div
						data-aos={shape.direction}
						data-aos-duration={750}
						data-aos-delay={shape.delay}
						data-aos-easing="ease-in-out"
						data-aos-once="true"
					>
						<div
							on:mouseenter={() => handleMouseEnter(i)}
							on:focus={() => {}}
							on:mouseout={handleMouseLeave}
							on:blur={() => {}}
							role="none"
							class={
								`h-[25vh] w-[25vh] rounded-xl transition-colors cursor-pointer ease-in-out duration-200
								${hoveredIndex === -1 ? baseColors[i] : colors[hoveredIndex].alt} ${colors[i].main}`
							}
						>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
	{#if hoveredIndex === 0}
		<div
			data-aos="slide-left"
			data-aos-duration={1000}
			data-aos-easing="ease-in-out"
			data-aos-delay={250}
			data-aos-once="true"
			class={
			`absolute top-0 left-0 font-nk57 text-[25vh] text-[#8EA7E9] w-screen h-[25vh]
				flex items-center justify-center !pointer-events-none`
			}
	  >
			TESTING
		</div>
		<div
			data-aos="slide-right"
			data-aos-duration={1000}
			data-aos-easing="ease-in-out"
			data-aos-delay={750}
			data-aos-once="true"
			class={
				`absolute top-1/4 left-0 font-nk57 text-[25vh] text-[#121212] w-screen h-[25vh]
				flex items-center justify-center !pointer-events-none`
			}
		>
			TESTING
		</div>
	{/if}
<!--	<div class="absolute -z-10 left-0 top-1/4 border-2 border-white border-dashed w-screen h-[1000px] rounded-t-[1000px]">-->
<!--	</div>-->

	<!--Sign-->
	<Signature
		hoveredIndex={hoveredIndex}
	/>
</div>
