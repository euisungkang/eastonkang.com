<script lang="ts">
	import sign from "$lib/assets/sign-min.png";
	import AOS from "aos";

	AOS.init();

	const shapes = [
		{
			color: '#8E7AB5'
		},
		{
			color: '#B784B7'
		},
		{
			color: '#E493B3'
		},
		{
			color: '#EEA5A6'
		},
		{
			color: '#8E7AB5'
		},
		{
			color: '#B784B7'
		},
	];
</script>

<div class="dark h-screen w-screen flex items-center justify-center bg-[#121212]">
	<div class="w-full h-full flex items-center justify-center">
		<div class="grid grid-cols-3 place-items-center place-content-center">
			{#each shapes as shape}
				<div
					class="h-52 w-52 col-span-1 m-4 rounded-xl cursor-pointer
						 transition ease-in-out duration-200 hover:scale-110"
					style="background-color: {shape.color}"
				>
				</div>
			{/each}
		</div>
	</div>

	<!--Sign-->
	<div class="absolute bottom-0 right-0 w-52">
		<img
			src={sign}
			alt="Signature"
			class="object-fill pb-4 pr-4"
		/>
<!--		<div class="absolute text-right bottom-0 right-0 pb-4 pr-6 font-aston text-gray-200 text-xs">-->
<!--			Easton K.-->
<!--		</div>-->
	</div>
</div>
