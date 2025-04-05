<script lang='ts'>
  let { 
    overlayColor = '#FFFFFF'
  }: {
    overlayColor: string,
  } = $props();
</script>

<div
  class="absolute rotate-45 top-[48%] left-[49%] z-30"
>
  <svg width="auto" height="4vh" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="transition-colors duration-1000 ease-out" d="M16 8L8 16M8.00001 8L16 16" stroke={overlayColor} stroke-width="1" stroke-linecap="square" stroke-linejoin="round"/>
  </svg>
</div>
