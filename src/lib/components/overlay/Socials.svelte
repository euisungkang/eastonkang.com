<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		overlayColor = '#FFFFFF'
	}: {
		overlayColor: string;
	} = $props();
</script>

<div
	class="absolute font-jws z-10 text-xs bottom-12 right-12 flex flex-col items-end leading-3.5 select-none"
	style:color={overlayColor}
>
	<a
		aria-label="Github"
		href="https://github.com/euisungkang"
		target="_blank"
		rel="noopener noreferrer"
	>
		<TextSlideY text={'GITHUB'} />
	</a>
	<a
		aria-label="LinkedIn"
		href="https://www.linkedin.com/in/easton/"
		target="_blank"
		rel="noopener noreferrer"
	>
		<TextSlideY text={'LINKEDIN'} />
	</a>
</div>
