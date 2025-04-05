<script lang="ts">
  import "../app.css";
  import { onNavigate } from '$app/navigation';
	import { colorState } from "$lib/states/color.svelte";
  import Overlay from "$lib/components/overlay/Overlay.svelte";

	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();

  let overlayColor: string = $derived(colorState.overlayColor);

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<div class="hidden lg:block">
  <Overlay 
    overlayColor={overlayColor}
  />
	{@render children?.()}
</div>
<div class="dark bg-[#121212] h-screen w-screen flex items-center justify-center text-center lg:hidden">
	Mobile Not Supported
</div>

<style>
  :root {
    view-transition-name: none
  }
</style>
