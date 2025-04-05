<script lang='ts'>
	import DetailOverlay from '$lib/components/gallery/DetailOverlay.svelte';
  import { images } from '$lib/constants/images';
  import type { Image } from '$lib/constants/images';
	import { colorState } from '$lib/states/color.svelte';
	import { onMount } from 'svelte';
	import { sineOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';

  const image: Image = images[4];
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
    colorState.overlayColor = image.overlayColor;
    colorState.backgroundColor = image.backgroundColor;
    colorState.selectedIndex = 4;
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
        class="absolute top-[10%] left-[75%] w-[8vw] h-[30vh] flex items-center justify-start"
        in:fly={{ x: '-58vw', duration: 1000, easing: sineOut, opacity: 1 }}
      >O</div>
      <div 
        class="absolute top-[10%] left-[80%] w-[8vw] h-[30vh] flex items-center justify-start"
        in:fly={{ x: '-53vw', duration: 1000, easing: sineOut, opacity: 1 }}
      >R</div>
      <div 
        class="absolute top-[10%] left-[85%] w-[8vw] h-[30vh] flex items-center justify-start"
        in:fly={{ x: '-43vw', duration: 1000, easing: sineOut, opacity: 1 }}
      >D</div>
      <div 
        class="absolute top-[10%] left-[90%] w-[8vw] h-[30vh] flex items-center justify-start"
        in:fly={{ x: '-38vw', duration: 1000, easing: sineOut, opacity: 1 }}
      >N</div>
      <div 
        class="absolute top-[55%] left-[75%] w-[8vw] h-[30vh] flex items-center justify-start"
        in:fly={{ x: '-53vw', duration: 1000, easing: sineOut, opacity: 1 }}
      >A</div>
      <div 
        class="absolute top-[55%] left-[80%] w-[8vw] h-[30vh] flex items-center justify-start"
        in:fly={{ x: '-48vw', duration: 1000, easing: sineOut, opacity: 1 }}
      >N</div>
      <div 
        class="absolute top-[55%] left-[85%] w-[8vw] h-[30vh] flex items-center justify-start"
        in:fly={{ x: '-38vw', duration: 1000, easing: sineOut, opacity: 1 }}
      >C</div>
      <div 
        class="absolute top-[55%] left-[90%] w-[8vw] h-[30vh] flex items-center justify-start"
        in:fly={{ x: '-33vw', duration: 1000, easing: sineOut, opacity: 1 }}
      >E</div>
    </div>
  {/if}
</div>
