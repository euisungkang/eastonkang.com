<script lang='ts'>
  import { onMount } from "svelte";
  import { sineOut } from "svelte/easing";
  import { fly } from "svelte/transition";

  let {
    text,
    delay,
    letterDelay,
    stagger,
  }: {
    text: string,
    delay?: number,
    letterDelay?: number,
    stagger?: boolean,
  } = $props();

  let visible: boolean = $state(false);

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 100);
  });
</script>

<div class="flex items-center justify-center overflow-hidden">
  {#if stagger}
    {#each text as c, i}
      {#if visible}
        <div
          in:fly={{
            y: '1vh',
            easing: sineOut,
            duration: 1000, 
            delay: i * (letterDelay ?? 50) 
          }}
        >
        {#if c != ' '}
          {c}
        {:else}
          &nbsp;
        {/if}
        </div>
      {/if}
    {/each}
  {:else}
    {#if visible}
      <div
        in:fly={{
          y: '1vh',
          easing: sineOut,
          duration: 1000,
          delay: delay ?? 0
        }}
      >
        {text}
      </div>
    {/if}
  {/if}
</div>
