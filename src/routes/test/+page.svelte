<script lang='ts'>
  import logo from '$lib/assets/media/logo.png';
  import casino from '$lib/assets/media/casino.png';
  import currency from '$lib/assets/media/currency.png';
  import receipt from '$lib/assets/media/receipt.png';
  import music from '$lib/assets/media/music.png';
  import raffle from '$lib/assets/media/raffle.png';
  import market from '$lib/assets/media/market.png';

  const images = [logo, casino, currency, receipt, market, music, raffle];
  
  let gap: string = $state('1%');
  let selectedIndex: number = $state(-1);
  let grayscaleIndex: number = $state(0);
  let mouseDownX: number = 0; 
  let mouseUpX: number = 0;
  let innerWidth: number = $state(0);
  let percentage: number = $state(50);
  let imagePercentage: number = $derived(percentage / 2 + 50);

  function expandImage(i: number) {
    // (-14 (def vw) - 10 (post-ml)) * i + (25 - 10 (first ml))
    percentage = (-24 * i) + 25;
    selectedIndex = i;
    grayscaleIndex = i;
    gap = '10%';
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

    // Update percentage (track progress), grayscaleIndex (image with color)
    percentage = Math.max(Math.min(rawPercentage + mouseUpX, 50), -50);
    grayscaleIndex = Math.min(
      Math.floor(-(percentage - 50) / (100 / images.length)),
      images.length - 1
    );

    // Reset selected image and reset gap
    selectedIndex = -1;
    gap = '1%';
  }

  $effect(() => {
    console.log(grayscaleIndex, selectedIndex, percentage);
  })
</script>

<svelte:window bind:innerWidth />

<div 
  class="dark h-screen w-screen bg-[#121212] overflow-hidden"
  role="scrollbar"
  aria-controls="0,1"
  aria-valuenow="0"
  tabindex="0"
  onmousedown={(e) => mouseDownAt(e)}
  onmouseup={() => mouseUpAt()}
  onmousemove={(e) => mouseMove(e)}
>
  <div class="h-full w-full relative">
    <div
      class="flex absolute top-[50%] w-full items-center justify-start
             transition-transform duration-1000 ease-out"
      style:transform="translate({percentage}%, -50%)"
    >
      {#each images as image, i}
        <img 
          src={image}
          onclick={() => expandImage(i)}
          class="object-cover object-center select-none
                 transition-all duration-1000 ease-out"
          style:object-position="{imagePercentage}% center"
          style:filter="grayscale({i == grayscaleIndex ? 0 : 100}%)"
          style:opacity="{i == grayscaleIndex ? 100 : 50}%"
          style:margin-left="{i != 0 ? gap : '0%'}"
          style:width="{i == selectedIndex ? '50vw' : '14vw'}"
          style:height="{i == selectedIndex ? '50vh' : '50vh'}"
          alt="Test"
          draggable={false}
        />
      {/each}
    </div>
  </div>
</div>
