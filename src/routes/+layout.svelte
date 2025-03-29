<script lang="ts">
	import "../app.css";
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="hidden lg:block">
	{@render children?.()}
</div>
<div class="dark bg-[#121212] h-screen w-screen flex items-center justify-center text-center lg:hidden">
	Mobile Not Supported
</div>
