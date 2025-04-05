<script lang='ts'>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { sineOut } from 'svelte/easing';

  let {
    letter,
    reverse,
  }: {
    letter: string,
    reverse: boolean,
  } = $props();

  let visible: boolean = $state(false);
  
  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <div 
    class="w-40 h-80 flex items-center justify-start overflow-hidden"
    style="view-transition-name: letters;"
  >
    <div in:fly={{ x: reverse ? 150 : -150, easing: sineOut, duration: 1000, opacity: 1 }}>
      {letter}
    </div>
  </div>
{/if}
