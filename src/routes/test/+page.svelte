<script lang='ts'>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  let visible: boolean = $state(false);
  const name: string = 'EASTONKANG';

  onMount(() => {
    setTimeout(() => {
      visible = true
    }, 100);
  });
</script>

<div
  class="dark h-screen w-screen bg-[#121212]
         flex flex-col items-center justify-center"
>
  <div class="flex items-center justify-center h-1/2 w-full">
    {#each name as c, i}
      <div class="overflow-hidden">
        <!-- Used as space filler -->
        <div class="font-tny text-9xl invisible">{c}</div>

        {#if visible}
          <div 
            class="font-tny text-9xl"
            in:slide={{ axis: 'x', duration: 1000, delay: i * 50 }}
          >
            {c}
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Vertical slide delay -->
  <div class="flex items-center justify-center h-1/2 w-full">
    {#each name as c, i}
      {#if visible}
        <div 
          class="font-tny text-9xl"
          in:slide={{ axis: 'y', duration: 1000, delay: i * 50 }}
        >
          {c}
        </div>
      {/if}
    {/each}
  </div>
</div>
