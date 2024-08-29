<script lang='ts'>
	import { shapes, colors, baseColors } from '$lib/constants/shapes';
	import AOS from 'aos';
	import Signature from '$lib/components/home/Signature.svelte';
	import { onMount } from 'svelte';
	import BlueHover from '$lib/components/home/hover/BlueHover.svelte';

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

	{#if hoveredIndex === 4}
		<div
			data-aos="fade-up"
			data-aos-delay={200}
			data-aos-duration={1000}
			class="absolute h-[200vh] w-full !pointer-events-none
			 perspective-[150px] perspective-origin-[50%_50%]"
		>
			<div
				class="w-full h-full bg-[linear-gradient(to_right,#8E7AB5_2px,transparent_2px),linear-gradient(to_bottom,#8E7AB5_2px,transparent_2px)]
				bg-[size:75px_50px] bg-transparent transform -translate-y-10 rotate-x-[45deg]"
			>
			</div>
		</div>
		<div
			data-aos="fade"
			data-aos-duration={200}
			class="absolute left-0 top-1/2 bg-[#8E7AB5] border-2 border-[#8E7AB5] border-dashed w-screen h-[1000px] rounded-t-[1000px] !pointer-events-none">
		</div>
	{/if}

	<BlueHover
		hoveredIndex={hoveredIndex}
	/>

	<!--Sign-->
	<Signature
		hoveredIndex={hoveredIndex}
	/>
</div>
