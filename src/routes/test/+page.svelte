<script lang='ts'>

import casino from '$lib/assets/media/casino.png';
import currency from '$lib/assets/media/currency.png';
import logo from '$lib/assets/media/logo.png';
import market from '$lib/assets/media/market.png';
import music from '$lib/assets/media/music.png';
import raffle from '$lib/assets/media/raffle.png';
import receipt from '$lib/assets/media/receipt.png';

// const imagePaths = ['casino.png', 'currency.png', 'logo.png', 'market.png', 'music.png', 'raffle.png', 'receipt.png'];
const images = [casino, currency, logo, market, music, raffle, receipt];

</script>

<div class="dark h-screen w-screen flex items-center justify-center bg-[#121212]">
  <div class="w-auto h-full flex items-center justify-end">
    {#each images as image, i}
      <a
        href="/"
        class="w-24"
      >
        <img 
          src={image}
          class=""
          alt="ok"
        />
      </a>
    {/each}
  </div>
</div>
