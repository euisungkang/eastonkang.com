<script lang='ts'>
	import sign from '$lib/assets/sign-min.png';
	import { fade } from 'svelte/transition';

	export let hoveredIndex: number;
</script>

<div
	class="absolute bottom-0 right-0 w-52"
	data-aos="fade"
	data-aos-delay={1200}
	data-aos-duration={750}
	data-aos-once="true"
>
	{#if hoveredIndex === -1}
		<img
			src={sign}
			alt="Signature"
			class="object-fill pb-4 pr-4"
			transition:fade={{ duration: 150 }}
		/>
		<!--		<div class="absolute text-right bottom-0 right-0 pb-4 pr-6 font-aston text-gray-200 text-xs">-->
		<!--			Easton K.-->
		<!--		</div>-->
	{/if}
</div>
