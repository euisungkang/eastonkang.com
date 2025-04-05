<script lang='ts'>
  import { onMount } from "svelte";
	import TextSlideY from "../effects/TextSlideY.svelte";
	import TextSlideX from "../effects/TextSlideX.svelte";
	import { sineOut } from "svelte/easing";
	import { slide } from "svelte/transition";
  
  let {
    color,
    leftFields,
    rightFields,
    invert = false,
    path,
  }: {
    color: string,
    leftFields: Array<string>,
    rightFields: Array<string>,
    invert: boolean,
    path?: string,
  } = $props();

  let lineHeight: string = $state('0px');
  let lineWidth: string = $state('0px');
  let visible: boolean = $state(false);

  onMount(() => {
    visible = true;
    setTimeout(() => {
      lineWidth = '100%';
      lineHeight = '2rem';
    }, 500);
  });
</script>

{#snippet plus()}
  {#if visible}
    <div class="h-[2vh]">
      <div in:slide={{ duration: 1000, delay: 500, easing: sineOut }}>
        <svg width="auto" height="2vh" viewBox="0 0 14 14">
          <polygon fill="{color}" points="7 11.04 6.08 11.04 6.08 7.89 2.96 7.89 2.96 6.1 6.08 6.1 6.08 2.96 7.92 2.96 7.92 6.1 11.04 6.1 11.04 7.89 7.92 7.89 7.92 11.04"></polygon>
        </svg>
      </div>
    </div>
  {/if}
{/snippet}

{#snippet line()}
  <div class="h-8">
    <div 
      class="trasition-[height] duration-750 delay-200 ease-out border-l"
      style:height={lineHeight}
      style:border-color={color}
    ></div>
  </div>
{/snippet}

{#snippet explore()}
  <a
    href={path ? path : '/#'}
    class="flex flex-col items-end text-xs leading-3"
  >
    <TextSlideX text={invert ? 'RETURN' : 'EXPLORE'} letterDelay={50} />
    <div class="relative bg-white w-full">
      <div
        class="border-t transition-[width] duration-1000 ease-out 
               absolute bottom-0 left-0"
        style:width={lineWidth}
        style:border-color={color}
      ></div>
    </div>
  </a>
{/snippet}

<!-- Bottom Panel -->
<div 
  class={`absolute w-full flex justify-center font-jws
          ${invert ? 'top-12 items-start' : 'bottom-12 items-end'}`}
  style:color={color}
>
  <!-- Left -->
  <div class="w-96 flex text-[.6em]">
    <div class="w-1/4 flex">
      <div class="w-1/2"></div>
      <div class="w-1/2 flex-col leading-2.5 text-left items-center">
        <TextSlideY text='A' /> <TextSlideY text='B' delay={50} />
        <TextSlideY text='C' delay={100} />
        <TextSlideY text='D' delay={150} />
      </div>
    </div>
    <div class="w-1/4 flex flex-col leading-2.5 text-left items-start">
      <TextSlideY text='COMPLETED' />
      <TextSlideY text='TYPE' delay={50} />
      <TextSlideY text='ROLE' delay={100} />
      <TextSlideY text='CLIENT' delay={150} />
    </div>
    <div class="w-2/4 text-left items-start flex flex-col leading-2.5">
      {#each leftFields as s, i}
        <TextSlideY text={s} delay={50 * i} />
      {/each}
    </div>
  </div>

  <!-- Middle -->
  <div class="w-24 space-y-4 flex flex-col items-center justify-end">
    {#if invert}
      <!-- Plus -->
      {@render plus()}
      <!-- Line -->
      {@render line()}
      <!-- Explore -->
      {@render explore()}
    {:else}
      <!-- Explore -->
      {@render explore()}
      <!-- Line -->
      {@render line()}
      <!-- Plus -->
      {@render plus()}
    {/if}
  </div>

  <!-- Right -->
  <div class="w-96 flex text-[.6em]">
    <div class="w-1/4"></div>
    <div class="w-3/4 flex flex-col items-start leading-2.5 text-left">
      {#each rightFields as s, i}
        <TextSlideY text={s} delay={i * 50} />
      {/each}
    </div>
  </div>
</div>
