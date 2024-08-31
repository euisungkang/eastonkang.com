<script lang="ts">
	export let hoveredIndex: number;
</script>

{#if hoveredIndex === 4}
	<div
		data-aos="fade-up"
		data-aos-delay={500}
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
<!--	<div-->
<!--		data-aos="fade"-->
<!--		data-aos-delay={500}-->
<!--		class="absolute left-0 top-1/2 bg-[#8E7AB5] border-2 border-[#8E7AB5] border-dashed w-screen h-[1000px] rounded-t-[1000px] !pointer-events-none">-->
<!--	</div>-->
{/if}
