<script lang='ts'>
  let { 
    overlayColor = '#FFFFFF'
  }: {
    overlayColor: string,
  } = $props();
</script>

<div
  class="absolute font-jws text-[0.6rem] leading-2.5 top-12 right-12
         flex flex-col items-end"
  style:color={overlayColor}
>
  <div>FULLSTACK DEVELOPER</div>
  <div>INSPIRED BY ARISTIDE BENOIST</div>
</div>
