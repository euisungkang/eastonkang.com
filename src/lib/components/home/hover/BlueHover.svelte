<script lang="ts">
	export let hoveredIndex: number;
</script>

{#if hoveredIndex === 0}
	<div
		data-aos="slide-left"
		data-aos-duration={1000}
		data-aos-easing="ease-in-out"
		data-aos-delay={150}
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
		data-aos-delay={350}
		data-aos-once="true"
		class={
				`absolute top-1/4 left-0 font-nk57 text-[25vh] text-[#121212] w-screen h-[25vh]
				flex items-center justify-center !pointer-events-none`
			}
	>
		TESTING
	</div>
{/if}
