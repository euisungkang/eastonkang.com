<script lang='ts'>
  import { onMount } from "svelte";
  import { sineOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  let {
    text,
    letterDelay,
    reverse = false,
    instant = false,
  }: {
    text: string,
    letterDelay?: number,
    reverse?: boolean,
    instant?: boolean,
  } = $props();

  let visible: boolean = $state(false);

  onMount(() => {
    if (instant) {
      visible = true;
      return;
    }
    setTimeout(() => {
      visible = true;
    }, 100);
  });
</script>

<div class="flex items-center justify-center relative">
  {#each text as c, i}
    <div class="overflow-hidden">
      <div class="invisible">
        {#if c != ' '}
          {c}
        {:else}
          &nbsp;
        {/if}
      </div>

      {#if visible}
        <div
          class="absolute top-0"
          in:slide={{
            axis: 'x',
            easing: sineOut,
            duration: instant ? 0 : 1000,
            delay: instant ? 0 : i * (letterDelay ?? 50)
          }}
          out:slide|global={{
            axis: 'x',
            easing: sineOut,
            duration: reverse ? 1000 : 0,
            delay: reverse ? i * (letterDelay ?? 50) : 0
          }}
        >
        {#if c != ' '}
          {c}
        {:else}
          &nbsp;
        {/if}
        </div>
      {/if}
    </div>
  {/each}
</div>
