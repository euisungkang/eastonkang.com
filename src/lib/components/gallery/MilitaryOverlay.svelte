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
    'DECEMBER 2022', 
    'FULL-TIME',
    'MILITARY ENGINEER & ORDNANCE',
    'ROKA',
  ];
  const rightFields: Array<string> = [
    'PRS-17K|PRC-999K|PRC-96K',
    'SAPPER AND COMMUNICATIONS ENGINEER',
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
    <div class="absolute top-[10%] left-[15%]"><LetterSlide reverse={letterReverse} letter='O' /></div>
    <div class="absolute top-[10%] left-[25%]"><LetterSlide reverse={letterReverse} letter='R' /></div>
    <div class="absolute top-[10%] left-[40%]"><LetterSlide reverse={letterReverse} letter='D' /></div>
    <div class="absolute top-[10%] left-[50%]"><LetterSlide reverse={letterReverse} letter='N' /></div>
    <div class="absolute top-[50%] left-[20%]"><LetterSlide reverse={letterReverse} letter='A' /></div>
    <div class="absolute top-[50%] left-[33%]"><LetterSlide reverse={letterReverse} letter='N' /></div>
    <div class="absolute top-[50%] left-[45%]"><LetterSlide reverse={letterReverse} letter='C' /></div>
    <div class="absolute top-[50%] left-[60%]"><LetterSlide reverse={letterReverse} letter='E' /></div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
    invert={false}
  />
{/if}

