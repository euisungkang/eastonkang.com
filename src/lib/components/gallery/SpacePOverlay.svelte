<script lang='ts'>
	import { onMount } from "svelte";
  import LetterSlide from "../effects/LetterSlide.svelte";
	import DetailOverlay from "./DetailOverlay.svelte";

  let {
    color,
  }: {
    color: string,
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
    <div class="absolute top-[10%] left-[20%]"><LetterSlide letter='S' /></div>
    <div class="absolute top-[10%] left-[35%]"><LetterSlide letter='P' /></div>
    <div class="absolute top-[10%] left-[40%]"><LetterSlide letter='A' /></div>
    <div class="absolute top-[10%] left-[60%]"><LetterSlide letter='C' /></div>
    <div class="absolute top-[10%] left-[71%]"><LetterSlide letter='E' /></div>
    <div class="absolute top-[50%] left-[40%]"><LetterSlide letter='P' /></div>

    <!-- Periods -->
    <div class="absolute w-[5vw] h-[5vw] top-[55%] left-[35%] flex items-center justify-center">
      <div 
        class="transition-[width,height] duration-750 delay-700 ease-out rounded-full"
        style:width={ballSize}
        style:height={ballSize}
        style:background-color={color}
      ></div>
    </div>
    <div class="absolute w-[5vw] h-[5vw] top-[69%] left-[35%] flex items-center justify-center">
      <div 
        class="transition-[width,height] duration-750 delay-800 ease-out rounded-full"
        style:width={ballSize}
        style:height={ballSize}
        style:background-color={color}
      ></div>
    </div>
    <!-- <div class="absolute top-[67%] left-[30%] flex items-center justify-center overflow-hidden"> -->
    <!--   <div  -->
    <!--     class="h-[5vw] w-[5vw] rounded-full" -->
    <!--     style:background-color={color} -->
    <!--     in:fly={{ x: -150, easing: sineOut, duration: 1000, opacity: 1 }} -->
    <!--   ></div> -->
    <!-- </div> -->
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
  />
{/if}

