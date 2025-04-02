<script lang='ts'>
  import { onMount } from "svelte";
  import { fly, slide } from 'svelte/transition';
  import TextSlideY from "../effects/TextSlideY.svelte";
	import { sineOut } from "svelte/easing";
	import TextSlideX from "../effects/TextSlideX.svelte";
  import LetterSlide from "../effects/LetterSlide.svelte";

  let {
    color,
  }: {
    color: string,
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

<!-- <div class="absolute bottom-0 left-[50%] h-[20vh] border-l border-white"> </div> -->

{#if visible}
  <!-- Letters -->
  <div 
    class="relative w-full h-full font-tny text-[20vw]"
    style:color={color}
  >
    <div class="absolute top-[10%] left-[20%]"><LetterSlide letter='W' /></div>
    <div class="absolute top-[10%] left-[35%]"><LetterSlide letter='A' /></div>
    <div class="absolute top-[50%] left-[55%]"><LetterSlide letter='V' /></div>
    <div class="absolute top-[50%] left-[70%]"><LetterSlide letter='Y' /></div>
  </div>

  <!-- Bottom Panel -->
  <div 
    class="absolute bottom-12 w-full flex items-end justify-center
           font-jws h-40"
    style:color={color}
  >
    <!-- Left -->
    <div class="w-96 flex text-[.6em]">
      <div class="w-1/4 flex">
        <div class="w-1/2"></div>
        <div class="w-1/2 flex-col leading-2.5 text-left items-center">
          <TextSlideY
            text='A'
          />
          <TextSlideY
            text='B'
            delay={50}
          />
          <TextSlideY
            text='C'
            delay={100}
          />
          <TextSlideY
            text='D'
            delay={150}
          />
        </div>
      </div>
      <div class="w-1/4 flex flex-col leading-2.5 text-left items-start">
        <TextSlideY
          text='COMPLETED'
        />
        <TextSlideY
          text='TYPE'
          delay={50}
        />
        <TextSlideY
          text='ROLE'
          delay={100}
        />
        <TextSlideY
          text='CLIENT'
          delay={150}
        />
      </div>
      <div class="w-2/4 text-left items-start flex flex-col leading-2.5">
        <TextSlideY
          text='NOVEMBER 2019'
        />
        <TextSlideY
          text='INSPIRATIONAL'
          delay={50}
        />
        <TextSlideY
          text='FRONT-END DEV & MOTION'
          delay={100}
        />
        <TextSlideY
          text='DRIBBBLE'
          delay={150}
        />
      </div>
    </div>

    <!-- Middle -->
    <div class="w-24 space-y-4 flex flex-col items-center justify-end">
      <!-- Explore -->
      <div 
        class="flex flex-col items-end text-xs leading-3"
      >
        <TextSlideX 
          text='EXPLORE'
          letterDelay={50}
        />
        <div class="relative bg-white w-full">
          <div
            class="border-t transition-[width] duration-1000 ease-out 
                   absolute bottom-0 left-0"
            style:width={lineWidth}
            style:border-color={color}
          ></div>
        </div>
      </div>
      <!-- Line -->
      <div class="h-8">
        <div 
          class="trasition-[height] duration-750 delay-200 ease-out border-l"
          style:height={lineHeight}
          style:border-color={color}
        ></div>
      </div>
      <!-- Plus -->
      <div class="h-[2vh]">
        <div in:slide={{ duration: 1000, delay: 500, easing: sineOut }}>
          <svg width="auto" height="2vh" viewBox="0 0 14 14">
            <polygon fill="{color}" points="7 11.04 6.08 11.04 6.08 7.89 2.96 7.89 2.96 6.1 6.08 6.1 6.08 2.96 7.92 2.96 7.92 6.1 11.04 6.1 11.04 7.89 7.92 7.89 7.92 11.04"></polygon>
          </svg>
        </div>
      </div>
    </div>

    <!-- Right -->
    <div class="w-96 flex text-[.6em]">
      <div class="w-1/4"></div>
      <div class="w-3/4 flex flex-col items-start leading-2.5 text-left">
        <TextSlideY
          text='SELF-PROMOTIONAL AND SOCIAL NETWORKING'
        />
        <TextSlideY
          text='PLATFORM FOR DESIGNERS AND CREATIVES'
          delay={50}
        />
      </div>
    </div>
  </div>
{/if}

