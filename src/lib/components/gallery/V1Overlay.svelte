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
    'AUGUST 2022', 
    'PORTFOLIO',
    'FULL-STACK DEV & MOTION',
    'EASTON KANG',
  ];
  const rightFields: Array<string> = [
    'FIRST RELEASE OF PORTFOLIO MADE',
    'WITH SVELTEKIT|GSAP|FRAMER',
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
    <div class="absolute top-[15%] left-[22%]"><LetterSlide reverse={letterReverse} letter='F' /></div>
    <div class="absolute top-[15%] left-[35%]"><LetterSlide reverse={letterReverse} letter='O' /></div>
    <div class="absolute top-[15%] left-[55%]"><LetterSlide reverse={letterReverse} letter='L' /></div>
    <div class="absolute top-[15%] left-[65%]"><LetterSlide reverse={letterReverse} letter='I' /></div>
    <div class="absolute top-[15%] left-[72%]"><LetterSlide reverse={letterReverse} letter='O' /></div>
    <div class="absolute top-[50%] left-[42%]"><LetterSlide reverse={letterReverse} letter='V' /></div>
    <div class="absolute top-[50%] left-[52%]"><LetterSlide reverse={letterReverse} letter='1' /></div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
    invert={false}
    path={'/v1'}
  />
{/if}

