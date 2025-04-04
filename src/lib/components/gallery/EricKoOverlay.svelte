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
    'ONGOING', 
    'PORTFOLIO',
    'FULL-STACK DEV & MOTION',
    'ERIC KO',
  ];
  const rightFields: Array<string> = [
    'PORTFOLIO OF ERIC KO, CREATIVE',
    'PHOTOGRAPHER AND DESIGNER',
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
    <div class="absolute top-[10%] left-[15%]"><LetterSlide reverse={letterReverse} letter='E' /></div>
    <div class="absolute top-[10%] left-[20%]"><LetterSlide reverse={letterReverse} letter='R' /></div>
    <div class="absolute top-[10%] left-[30%]"><LetterSlide reverse={letterReverse} letter='I' /></div>
    <div class="absolute top-[10%] left-[40%]"><LetterSlide reverse={letterReverse} letter='C' /></div>
    <div class="absolute top-[50%] left-[65%]"><LetterSlide reverse={letterReverse} letter='K' /></div>
    <div class="absolute top-[50%] left-[75%]"><LetterSlide reverse={letterReverse} letter='O' /></div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
    letterReverse={letterReverse}
    path={'/ericko'}
  />
{/if}

