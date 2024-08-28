<script lang="ts">
	import sign from "$lib/assets/sign-min.png";
	import { shapes, colors } from '$lib/constants/shapes';
	import AOS from "aos";
	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init();
	});

	let hoveredIndex = 0;

	function handleMouseEnter(index) {
		hoveredIndex = index + 1;
	}

	function handleMouseLeave() {
		hoveredIndex = 0; // Reset on mouse leave
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<div class="dark h-screen w-screen flex items-center justify-center bg-[#121212]">
	<div class="w-full h-full flex items-center justify-center">
		<div class="grid grid-cols-3 place-items-center place-content-center">
			{#each shapes as shape, i}
<!--				href={shape.href}-->
				<a
					href="/"
					on:mouseenter={() => handleMouseEnter(i)}
					on:mouseleave={handleMouseLeave}
					class="transition ease-in-out duration-200 hover:scale-110"
				>
					<div
						data-aos={shape.direction}
						data-aos-duration={750}
						data-aos-delay={shape.delay}
						data-aos-easing="ease-in-out"
					>
						<div
							class="h-64 w-64 col-span-1 m-4 rounded-xl cursor-pointer
							transition-colors ease-in-out duration-8000"
							style="background-color: {colors[hoveredIndex][i]}"
						>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!--Sign-->
	<div class="absolute bottom-0 right-0 w-52">
		<img
			data-aos="fade"
			data-aos-delay={1200}
			data-aos-duration={750}
			src={sign}
			alt="Signature"
			class="object-fill pb-4 pr-4"
		/>
<!--		<div class="absolute text-right bottom-0 right-0 pb-4 pr-6 font-aston text-gray-200 text-xs">-->
<!--			Easton K.-->
<!--		</div>-->
	</div>
</div>
