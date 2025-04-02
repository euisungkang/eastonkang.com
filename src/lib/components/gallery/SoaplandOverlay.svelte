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
    'JULY 2023', 
    'PASSION',
    'FULL-STACK DEV & MOTION',
    'SOAPLAND',
  ];
  const rightFields: Array<string> = [
    'ARTISTRY IN EVERY LATHER',
    'NATURE IN EVERY DROP',
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
    <div class="absolute top-[15%] left-[10%]"><LetterSlide letter='S' /></div>
    <div class="absolute top-[15%] left-[22%]"><LetterSlide letter='O' /></div>
    <div class="absolute top-[15%] left-[60%]"><LetterSlide letter='A' /></div>
    <div class="absolute top-[15%] left-[72%]"><LetterSlide letter='P' /></div>
    <div class="absolute top-[50%] left-[17%]"><LetterSlide letter='L' /></div>
    <div class="absolute top-[50%] left-[35%]"><LetterSlide letter='A' /></div>
    <div class="absolute top-[50%] left-[50%]"><LetterSlide letter='N' /></div>
    <div class="absolute top-[50%] left-[75%]"><LetterSlide letter='D' /></div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
  />
{/if}

