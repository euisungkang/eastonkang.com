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
    <div class="absolute top-[10%] left-[17%]"><LetterSlide reverse={letterReverse} letter='O' /></div>
    <div class="absolute top-[10%] left-[27%]"><LetterSlide reverse={letterReverse} letter='R' /></div>
    <div class="absolute top-[10%] left-[42%]"><LetterSlide reverse={letterReverse} letter='D' /></div>
    <div class="absolute top-[10%] left-[52%]"><LetterSlide reverse={letterReverse} letter='N' /></div>
    <div class="absolute top-[55%] left-[22%]"><LetterSlide reverse={letterReverse} letter='A' /></div>
    <div class="absolute top-[55%] left-[32%]"><LetterSlide reverse={letterReverse} letter='N' /></div>
    <div class="absolute top-[55%] left-[47%]"><LetterSlide reverse={letterReverse} letter='C' /></div>
    <div class="absolute top-[55%] left-[57%]"><LetterSlide reverse={letterReverse} letter='E' /></div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
    invert={false}
    path={'/military'}
  />
{/if}

