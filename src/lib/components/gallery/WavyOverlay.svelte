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
    'ONGOING', 
    'PASSION',
    'FULL-STACK DEV & CREATIVE DESIGN',
    'WAVY SUITE',
  ];
  const rightFields: Array<string> = [
    'USER SATISFACTION AND CONVENIENCE',
    'PLATFORM FOR COMMUNITY CREATORS',
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
    <div class="absolute top-[10%] left-[20%]"><LetterSlide letter='W' /></div>
    <div class="absolute top-[10%] left-[35%]"><LetterSlide letter='A' /></div>
    <div class="absolute top-[50%] left-[55%]"><LetterSlide letter='V' /></div>
    <div class="absolute top-[50%] left-[70%]"><LetterSlide letter='Y' /></div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
  />
{/if}

