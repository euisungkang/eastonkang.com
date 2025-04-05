<script lang='ts'>
	import DetailOverlay from '$lib/components/gallery/DetailOverlay.svelte';
  import { images } from '$lib/constants/images';
  import type { Image } from '$lib/constants/images';
	import { colorState } from '$lib/states/color.svelte';
	import { onMount } from 'svelte';
	import { sineOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';

  const image: Image = images[0];
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
    colorState.overlayColor = image.overlayColor;
    colorState.backgroundColor = image.backgroundColor;
    colorState.selectedIndex = 0;
    visible = true;
  });
</script>

<div 
  class="h-screen w-screen flex items-center justify-center overflow-hidden"
  style:background-color={image.backgroundColor}
>
  {#if visible}
    <img 
      src={image.image}
      class="absolute left-[5%] top-[25%] h-[50vh] w-[50vw] object-cover object-center"
      in:fly={{ x: '40%', duration: 1000, easing: sineOut, opacity: 1 }}
      alt="Test"
    />
    <DetailOverlay 
      color={colorState.overlayColor}
      leftFields={leftFields}
      rightFields={rightFields}
      invert={true}
      path={'/'}
    />
    <div
      class="relative w-full h-full font-tny text-[20vw] pointer-events-none"
      style:color={colorState.overlayColor}
    >
      <div 
        class="absolute top-[10%] left-[75%] w-40 h-80 flex items-center justify-start"
        in:fly={{ x: '-55vw', duration: 1000, easing: sineOut, opacity: 1 }}
      >W</div>
      <div 
        class="absolute top-[10%] left-[85%] w-40 h-80 flex items-center justify-start"
        in:fly={{ x: '-50vw', duration: 1000, easing: sineOut, opacity: 1 }}
      >A</div>
      <div 
        class="absolute top-[50%] left-[80%] w-40 h-80 flex items-center justify-start"
        in:fly={{ x: '-25vw', duration: 1000, easing: sineOut, opacity: 1 }}
      >V</div>
      <div 
        class="absolute top-[50%] left-[90%] w-40 h-80 flex items-center justify-start"
        in:fly={{ x: '-20vw', duration: 1000, easing: sineOut, opacity: 1 }}
      >Y</div>
    </div>
  {/if}
</div>
