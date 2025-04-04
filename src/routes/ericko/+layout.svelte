<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();

  import { onNavigate } from '$app/navigation';

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
	{@render children?.()}
</div>
<div class="dark bg-[#121212] h-screen w-screen flex items-center justify-center text-center lg:hidden">
	Mobile Not Supported
</div>

<style>
  @keyframes fade-in {
    from {
      opacity: 100;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 100;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: translateX(500px);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: translateX(-500px);
    }
  }

  /* :root { */
  /*   view-transition-name: none */
  /* } */
  /* :root::view-transition-old(root) { */
  /* 	animation: */
  /* 		500ms cubic-bezier(0.4, 0, 1, 1) both fade-out, */
  /* 		1000ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left; */
  /* } */
  /* :root::view-transition-new(root) { */
  /* 	animation: */
  /* 		2000ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in, */
  /* 		3000ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right; */
  /* } */

  ::view-transition-old(panels) {
    animation:
      500ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      1000ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  ::view-transition-new(panels) {
    animation:
      2000ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      3000ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }
</style>
