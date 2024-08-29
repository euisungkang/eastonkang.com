<script lang='ts'>
	import { shapes, colors, baseColors } from '$lib/constants/shapes';
	import AOS from 'aos';
	import Signature from '$lib/components/home/Signature.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init();
	});

	let hoveredIndex: number = -1;

	function handleMouseEnter(index: number) {
		hoveredIndex = index;
	}

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
					on:mouseenter={() => handleMouseEnter(i)}
					on:mouseleave={handleMouseLeave}
					class={
						`col-span-1 cursor-pointer
						transition ease-in-out duration-200
						${hoveredIndex === -1 ? 'm-4' : shapes[hoveredIndex].transitions[i]}`
					}
				>
					<div
						data-aos={shape.direction}
						data-aos-duration={750}
						data-aos-delay={shape.delay}
						data-aos-easing="ease-in-out"
					>
						<div
							class={
								`h-64 w-64 rounded-xl transition-colors ease-in-out duration-8000
								${hoveredIndex === -1 ? baseColors[i] : colors[hoveredIndex].alt} ${colors[i].main}`
							}
						>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!--Sign-->
	<Signature
		hoveredIndex={hoveredIndex}
	/>
</div>
