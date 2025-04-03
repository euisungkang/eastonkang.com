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
    'FEBRUARY 2025', 
    'PASSION',
    'FULL-STACK DEV & MOTION',
    'BLINDFOLD',
  ];
  const rightFields: Array<string> = [
    'TOTAL DARKNESS IN COMPLETE FOCUS',
    'COMFORT FOR EVERY MOMENT',
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
    <div class="absolute top-[8%] left-[15%]"><LetterSlide reverse={letterReverse} letter='B' /></div>
    <div class="absolute top-[8%] left-[25%]"><LetterSlide reverse={letterReverse} letter='L' /></div>
    <div class="absolute top-[8%] left-[40%]"><LetterSlide reverse={letterReverse} letter='I' /></div>
    <div class="absolute top-[8%] left-[55%]"><LetterSlide reverse={letterReverse} letter='N' /></div>
    <div class="absolute top-[8%] left-[67%]"><LetterSlide reverse={letterReverse} letter='D' /></div>
    <div class="absolute top-[53%] left-[20%]"><LetterSlide reverse={letterReverse} letter='F' /></div>
    <div class="absolute top-[53%] left-[35%]"><LetterSlide reverse={letterReverse} letter='O' /></div>
    <div class="absolute top-[53%] left-[62%]"><LetterSlide reverse={letterReverse} letter='L' /></div>
    <div class="absolute top-[53%] left-[75%]"><LetterSlide reverse={letterReverse} letter='D' /></div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
    letterReverse={letterReverse}
  />
{/if}

