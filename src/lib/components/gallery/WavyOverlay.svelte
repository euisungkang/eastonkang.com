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
    <div class="absolute top-[10%] left-[22%]"><LetterSlide reverse={letterReverse} letter='W' /></div>
    <div class="absolute top-[10%] left-[37%]"><LetterSlide reverse={letterReverse} letter='A' /></div>
    <div class="absolute top-[55%] left-[57%]"><LetterSlide reverse={letterReverse} letter='V' /></div>
    <div class="absolute top-[55%] left-[72%]"><LetterSlide reverse={letterReverse} letter='Y' /></div>
  </div>

  <!-- Bottom Overlay -->
  <DetailOverlay 
    color={color}
    leftFields={leftFields}
    rightFields={rightFields}
    invert={false}
    path={'/wavy'}
  />
{/if}

