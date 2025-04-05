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
    <div class="absolute top-[10%] left-[19%]"><LetterSlide reverse={letterReverse} letter='E' /></div>
    <div class="absolute top-[10%] left-[24%]"><LetterSlide reverse={letterReverse} letter='R' /></div>
    <div class="absolute top-[10%] left-[35%]"><LetterSlide reverse={letterReverse} letter='I' /></div>
    <div class="absolute top-[10%] left-[42%]"><LetterSlide reverse={letterReverse} letter='C' /></div>
    <div class="absolute top-[55%] left-[65%]"><LetterSlide reverse={letterReverse} letter='K' /></div>
    <div class="absolute top-[55%] left-[72%]"><LetterSlide reverse={letterReverse} letter='O' /></div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
    invert={false}
    path={'/ericko'}
  />
{/if}

