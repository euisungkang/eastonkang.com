<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		overlayColor,
		delay = 0,
		invert = false
	}: {
		overlayColor: string;
		delay?: number;
		invert?: boolean;
	} = $props();

	const line1: string = 'FULLSTACK DEVELOPER';
	const line2: string = invert ? 'AVAILABLE SEPTEMBER 2026' : 'INSPIRED BY ARISTIDE';
</script>

<div
	class="absolute font-jws text-[0.6rem] leading-2.5 flex flex-col select-none
        {invert ? 'bottom-12 left-12 items-start' : 'top-12 right-12 items-end'}"
	style:color={overlayColor}
>
	<TextSlideY text={line1} stagger={false} {delay} />
	<TextSlideY text={line2} stagger={false} delay={delay + 100} />
</div>
