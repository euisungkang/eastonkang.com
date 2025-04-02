<script lang='ts'>
  import { onMount} from 'svelte';
  import { fly } from 'svelte/transition';
  import { images } from '$lib/constants/images';
  import Overlay from '$lib/components/overlay/Overlay.svelte';
	import { sineOut } from 'svelte/easing';
  import WavyOverlay from '$lib/components/gallery/WavyOverlay.svelte';
  import SpacePOverlay from '$lib/components/gallery/SpacePOverlay.svelte';
	import EricKoOverlay from '$lib/components/gallery/EricKoOverlay.svelte';
	import SoaplandOverlay from '$lib/components/gallery/SoaplandOverlay.svelte';
	import MilitaryOverlay from '$lib/components/gallery/MilitaryOverlay.svelte';
	import V1 from '$lib/components/gallery/V1.svelte';
	import BlindOverlay from '$lib/components/gallery/BlindOverlay.svelte';

  let gap: string = $state('1%');
  let selectedIndex: number = $state(-1);
  let grayscaleIndex: number = $state(0);
  let mouseDownX: number = 0; 
  let mouseUpX: number = 50;
  let innerWidth: number = $state(0);
  let percentage: number = $state(50);
  let imagePercentage: number = $derived(percentage / 2 + 50);

  let backgroundColor: string = $state('#121212');
  let overlayColor: string = $state('#adb5ad');
  let trackVisible: boolean = $state(false);

  function expandImage(i: number) {
    // (-14 (def vw) - 7 (post-ml)) * i + (25 (half of expanded))
    percentage = (-21 * i) + 25;
    selectedIndex = i;
    grayscaleIndex = i;
    gap = '7%';

    backgroundColor = images[i].backgroundColor;
    overlayColor = images[i].overlayColor;
  }

  function mouseDownAt(e: MouseEvent) {
    mouseDownX = e.clientX
  }

  function mouseUpAt() {
    mouseDownX = 0;
    mouseUpX = percentage;
  }

  function mouseMove(e: MouseEvent) {
    if (mouseDownX == 0) return;

    const mouseDelta = mouseDownX - e.clientX;
    const maxDelta = innerWidth / 2;
    const rawPercentage = (mouseDelta / maxDelta) * -100;

    // 54 (104) = 14 * 7 + 6 (gaps 1)
    percentage = Math.max(Math.min(rawPercentage + mouseUpX, 50), -54);
    grayscaleIndex = Math.min(
      // 15 = 14 (width) + 1
      Math.floor(-(percentage - 50) / 15),
      images.length - 1
    );

    // Reset selected image and reset gap
    selectedIndex = -1;
    gap = '1%';
    backgroundColor = '#121212';
    overlayColor = '#adb5ad';
  }

  onMount(() => {
    setTimeout(() => {
      trackVisible = true;
      expandImage(5);
    }, 500);
  });
</script>

<svelte:window bind:innerWidth />

<div 
  class="dark h-screen w-screen overflow-hidden transition-colors duration-1000 ease-out"
  style:background-color={backgroundColor}
  role="scrollbar"
  aria-controls="0,1"
  aria-valuenow="0"
  tabindex="0"
  onmousedown={(e) => mouseDownAt(e)}
  onmouseup={() => mouseUpAt()}
  onmousemove={(e) => mouseMove(e)}
>
  <Overlay
    overlayColor={overlayColor}
  />

  <div class="h-full w-full relative">
    <div
      class="flex absolute top-[50%] w-full items-center justify-start
             transition-transform duration-1000 ease-out"
      style:transform="translate({percentage}%, -50%)"
    >
      {#each images as img, i}
        {#if trackVisible}
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions-->
          <!-- svelte-ignore a11y_click_events_have_key_events-->
          <img 
            src={img.image}
            class="object-cover object-center select-none h-[50vh]
                   transition-[object-position,width,filter,opacity,margin-left] duration-1000 ease-out"
            onclick={() => expandImage(i)}
            in:fly={{ x: '50vw', duration: 1000 + (50 * i), easing: sineOut, delay: 100 * i }}
            style:object-position="{imagePercentage}% center"
            style:filter="grayscale({i == grayscaleIndex ? 0 : 100}%)"
            style:opacity="{i == grayscaleIndex ? 100 : 50}%"
            style:margin-left="{i != 0 ? gap : '0%'}"
            style:width="{i == selectedIndex ? '50vw' : '14vw'}"
            alt="Test"
            draggable={false}
          />
        {/if}
      {/each}
    </div>

    {#if selectedIndex == 0}
      <WavyOverlay
        color={overlayColor}
      />
    {:else if selectedIndex == 1}
      <EricKoOverlay
        color={overlayColor}
      />
    {:else if selectedIndex == 2}
      <SpacePOverlay 
        color={overlayColor}
      />
    {:else if selectedIndex == 3}
      <MilitaryOverlay
        color={overlayColor}
      />
    {:else if selectedIndex == 4}
      <V1
        color={overlayColor}
      />
    {:else if selectedIndex == 5}
      <BlindOverlay
        color={overlayColor}
      />
    {:else if selectedIndex == 6}
      <SoaplandOverlay
        color={overlayColor}
      />
    {/if}
  </div>
</div>
