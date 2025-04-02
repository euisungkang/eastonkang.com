<script lang='ts'>
	import { onMount } from "svelte";
  import LetterSlide from "../effects/LetterSlide.svelte";
	import DetailOverlay from "./DetailOverlay.svelte";

  let {
    color,
  }: {
    color: string,
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
    <div class="absolute top-[10%] left-[15%]"><LetterSlide letter='O' /></div>
    <div class="absolute top-[10%] left-[25%]"><LetterSlide letter='R' /></div>
    <div class="absolute top-[10%] left-[40%]"><LetterSlide letter='D' /></div>
    <div class="absolute top-[10%] left-[50%]"><LetterSlide letter='N' /></div>
    <div class="absolute top-[50%] left-[20%]"><LetterSlide letter='A' /></div>
    <div class="absolute top-[50%] left-[33%]"><LetterSlide letter='N' /></div>
    <div class="absolute top-[50%] left-[45%]"><LetterSlide letter='C' /></div>
    <div class="absolute top-[50%] left-[60%]"><LetterSlide letter='E' /></div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
  />
{/if}

