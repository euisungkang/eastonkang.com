<script lang='ts'>
  import { onMount } from "svelte";

  let { 
    overlayColor = '#FFFFFF'
  }: {
    overlayColor: string,
  } = $props();

  let width: string = $state('0px');
  let height: string = $state('0px');

  onMount(() => {
    setTimeout(() => {
      width = '60vw';
      height = '50vh';
    }, 300);
  });
</script>

<div class="absolute top-0 left-0 h-screen w-screen flex items-center justify-center">
  <!-- <div -->
  <!--   class="border w-[calc(50vw+100px)] h-[calc(50vh+100px)]" -->
  <!--   style:border-color={overlayColor} -->
  <!-- > -->
  <div
    class="border transition-all duration-1000 ease-in-out"
    style:border-color={overlayColor}
    style:width={width}
    style:height={height}
  >
    
  </div>
</div>
