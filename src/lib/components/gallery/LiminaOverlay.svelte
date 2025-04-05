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

  let visible: boolean = $state(false);
  const leftFields: Array<string> = [
    'APRIL 2025', 
    'FREELANCE',
    'FULL-STACK DEV & MOTION',
    'LIMINA',
  ];
  const rightFields: Array<string> = [
    'CRAFTING BOLD, FLUID MOTION',
    'FOR CREATIVES AND WEB DESIGNERS',
  ];

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
    <div class="absolute top-[10%] left-[15%]"><LetterSlide reverse={letterReverse} letter='L' /></div>
    <div class="absolute top-[10%] left-[25%]"><LetterSlide reverse={letterReverse} letter='I' /></div>
    <div class="absolute top-[10%] left-[35%]"><LetterSlide reverse={letterReverse} letter='M' /></div>
    <div class="absolute top-[55%] left-[60%]"><LetterSlide reverse={letterReverse} letter='I' /></div>
    <div class="absolute top-[55%] left-[70%]"><LetterSlide reverse={letterReverse} letter='N' /></div>
    <div class="absolute top-[55%] left-[80%]"><LetterSlide reverse={letterReverse} letter='A' /></div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
    invert={false}
    path={'/limina'}
  />
{/if}

