<script lang="ts">
	import sign from "$lib/assets/sign-min.png";
	import AOS from "aos";
	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init();
	});

	const shapes = [
		{
			color: '#8E7AB5',
			href: '/wavy',
			direction: 'fade-right',
			delay: 0,
		},
		{
			color: '#B784B7',
			href: '/wavy',
			direction: 'fade-down',
			delay: 100,
		},
		{
			color: '#E493B3',
			href: '/wavy',
			direction: 'fade-left',
			delay: 200,
		},
		{
			color: '#EEA5A6',
			href: '/wavy',
			direction: 'fade-right',
			delay: 500,
		},
		{
			color: '#8E7AB5',
			href: '/wavy',
			direction: 'fade-up',
			delay: 400,
		},
		{
			color: '#B784B7',
			href: '/wavy',
			direction: 'fade-left',
			delay: 300,
		},
	];
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<div class="dark h-screen w-screen flex items-center justify-center bg-[#121212]">
	<div class="w-full h-full flex items-center justify-center">
		<div class="grid grid-cols-3 place-items-center place-content-center">
			{#each shapes as shape}
				<a
					href={shape.href}
					class="transition ease-in-out duration-200 hover:scale-110"
				>
					<div
						data-aos={shape.direction}
						data-aos-duration={750}
						data-aos-delay={shape.delay}
						data-aos-easing="ease-in-out"
						class="h-64 w-64 col-span-1 m-4 rounded-xl cursor-pointer"
						style="background-color: {shape.color}"
					>
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
