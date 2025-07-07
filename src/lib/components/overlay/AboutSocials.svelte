<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		overlayColor = '#FFFFFF'
	}: {
		overlayColor: string;
	} = $props();
</script>

<div
	class="absolute font-jws z-10 text-xs leading-3.5 bottom-12 right-12 flex flex-col items-end"
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
	<a aria-label="Email" href="mailto:easton@lamina.dev" target="_blank" rel="noopener noreferrer">
		<TextSlideY text={'EMAIL'} />
	</a>
</div>
