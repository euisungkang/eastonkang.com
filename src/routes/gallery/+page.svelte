<script lang='ts'>
  import casino from '$lib/assets/media/casino.png';
  import currency from '$lib/assets/media/currency.png';
  import logo from '$lib/assets/media/logo.png';
  import market from '$lib/assets/media/market.png';
  import music from '$lib/assets/media/music.png';
  import raffle from '$lib/assets/media/raffle.png';
  import receipt from '$lib/assets/media/receipt.png';

  const images = [casino, currency, logo, market, music, raffle, receipt];
  const imagesLength: number = images.length;
  let selectedIndex: number = $state(-1);

  let mouseDownX: number = 0; 
  let mouseUpX: number = 0;
  let innerWidth: number = $state(0);
  let percentage: number = $state(0);
  let imagePercentage: number = $derived(percentage / 2 + 100);
  let grayscaleIndex: number = $derived(Math.floor(-percentage / 4 / (imagesLength + 1)));

  // import { onNavigate } from '$app/navigation';
  // onNavigate((nav) => {
  //   console.log(nav);
  // });

  function mouseDownAt(e: MouseEvent) {
    mouseDownX = e.clientX;
  }

  function mouseUpAt() {
    mouseDownX = 0;
    mouseUpX = percentage;
  }

  function mouseMove(e: MouseEvent) {
    if (mouseDownX == 0) return;

    const mouseDelta = mouseDownX - e.clientX;
    const maxDelta = innerWidth / 4;
    const rawPercentage =(mouseDelta / maxDelta) * -100;

    percentage = Math.max(Math.min(rawPercentage + mouseUpX, 0), -200);
    // imagePercentage = percentage / 2 + 100;
    // console.log('perc', percentage, 'img perc', imagePercentage);
  }

  function selectFocusedImage(index: number) {
    selectedIndex = index;
    // percentage = -200 / imagesLength * index ;
  }

  $effect(() => {
    console.log(selectedIndex, percentage);
  });
</script>

<svelte:window bind:innerWidth />

<div 
  class="dark h-screen w-screen overflow-hidden bg-[#121212]"
  role="scrollbar"
  aria-controls="0,1"
  aria-valuenow="0"
  tabindex="0"
  onmousedown={(e) => mouseDownAt(e)}
  onmouseup={() => mouseUpAt()}
  onmousemove={(e) => mouseMove(e)}
>
  <!-- <div class=""> -->
  <!-- </div> -->
  <div class="h-full w-full relative"> 
    <!-- <p class='font-tny text-[25rem]'> -->
    <!--   Lorem Ipsum -->
    <!-- </p> -->
    <div 
      class="flex space-x-4 absolute left-[50%] top-[50%] 
             transition-transform duration-1000 ease-out" 
      style:transform="translate({percentage}%, -50%)"
    >
      {#each images as image, i}
        <!-- <button -->
        <!--   onclick={() => selectFocusedImage(i)} -->
        <!--   class="h-auto w-[14vw] block" -->
        <!-- > -->
          <img 
            src={image}
            onclick={() => selectFocusedImage(i)}
            class="object-cover object-center select-none
                   transition-all duration-1000 ease-out 
                   {i == selectedIndex ? 'h-screen w-screen absolute left-[50%] top-[50%]': 'w-[14vw] h-[40vh]'} 
                   {selectedIndex == -1 || i == selectedIndex ? 'flex' : 'hidden'}
                   "
            style:object-position="{imagePercentage}% center"
            style:filter="grayscale({i == grayscaleIndex ? 0 : 100}%)"
            style:opacity="{i == grayscaleIndex ? 100 : 50}%"
            alt="Project Images"
            draggable={false}
          />
        <!-- </button> -->
      {/each}
    </div>
  </div>
</div>
            <!-- style:width="{i == selectedIndex ? '100%' : '14vw'}" -->
            <!-- style:height="{i == selectedIndex ? '100%' : '40vh'}" -->
            <!-- style:display="{i == selectedIndex || selectedIndex == -1 ? 'flex' : 'none'}" -->
