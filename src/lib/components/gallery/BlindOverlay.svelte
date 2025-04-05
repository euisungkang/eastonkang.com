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

  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <!-- Letters -->
  <div 
    class="relative w-full h-full font-tny text-[20vw] pointer-events-none"
    style:color={color}
  >
    <div class="absolute top-[10%] left-[19%]"><LetterSlide reverse={letterReverse} letter='B' /></div>
    <div class="absolute top-[10%] left-[30%]"><LetterSlide reverse={letterReverse} letter='L' /></div>
    <div class="absolute top-[10%] left-[45%]"><LetterSlide reverse={letterReverse} letter='I' /></div>
    <div class="absolute top-[10%] left-[60%]"><LetterSlide reverse={letterReverse} letter='N' /></div>
    <div class="absolute top-[10%] left-[72%]"><LetterSlide reverse={letterReverse} letter='D' /></div>
    <div class="absolute top-[55%] left-[24%]"><LetterSlide reverse={letterReverse} letter='F' /></div>
    <div class="absolute top-[55%] left-[40%]"><LetterSlide reverse={letterReverse} letter='O' /></div>
    <div class="absolute top-[55%] left-[67%]"><LetterSlide reverse={letterReverse} letter='L' /></div>
    <div class="absolute top-[55%] left-[78%]"><LetterSlide reverse={letterReverse} letter='D' /></div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
    invert={false}
    path={'/blindfold'}
  />
{/if}

