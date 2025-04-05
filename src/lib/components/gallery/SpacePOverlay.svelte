<script lang='ts'>
	import { onMount } from "svelte";
  import LetterSlide from "../effects/LetterSlide.svelte";
	import DetailOverlay from "./DetailOverlay.svelte";

  let {
    color,
    letterReverse,
  }: {
    color: string,
    letterReverse: boolean,
  } = $props();

  const leftFields: Array<string> = [
    'JULY 2024', 
    'FULL-TIME',
    'LEAD FULL-STACK DEV',
    'SPACE.P',
  ];
  const rightFields: Array<string> = [
    'AI POWERED SECONDHAND E-COMMERCE',
    'PLATFORM FOR ENTREPRENEURS',
  ];

  let visible: boolean = $state(false);
  let ballSize: string = $state('0px');

  onMount(() => {
    visible = true;
    setTimeout(() => {
      ballSize = '5vw';
    }, 100);
  });
</script>

{#if visible}
  <!-- Letters -->
  <div 
    class="relative w-full h-full font-tny text-[20vw] pointer-events-none"
    style:color={color}
  >
    <div class="absolute top-[10%] left-[22%]"><LetterSlide reverse={letterReverse} letter='S' /></div>
    <div class="absolute top-[10%] left-[35%]"><LetterSlide reverse={letterReverse} letter='P' /></div>
    <div class="absolute top-[10%] left-[40%]"><LetterSlide reverse={letterReverse} letter='A' /></div>
    <div class="absolute top-[10%] left-[60%]"><LetterSlide reverse={letterReverse} letter='C' /></div>
    <div class="absolute top-[10%] left-[73%]"><LetterSlide reverse={letterReverse} letter='E' /></div>
    <div class="absolute top-[55%] left-[40%]"><LetterSlide reverse={letterReverse} letter='P' /></div>

    <!-- Periods -->
    <div class="absolute w-[5vw] h-[5vw] top-[60%] left-[32%] flex items-center justify-center">
      <div 
        class="transition-[width,height] duration-500 delay-700 ease-out rounded-full"
        style:width={ballSize}
        style:height={ballSize}
        style:background-color={color}
      ></div>
    </div>
    <div class="absolute w-[5vw] h-[5vw] top-[74%] left-[32%] flex items-center justify-center">
      <div 
        class="transition-[width,height] duration-500 delay-800 ease-out rounded-full"
        style:width={ballSize}
        style:height={ballSize}
        style:background-color={color}
      ></div>
    </div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
    invert={false}
    path={'/spacep'}
  />
{/if}

