<script lang='ts'>
  import TextSlideY from "../effects/TextSlideY.svelte";

  let { 
    overlayColor = '#FFFFFF'
  }: {
    overlayColor: string,
  } = $props();

  const line1: string = 'FULLSTACK DEVELOPER';
  const line2: string = 'INSPIRED BY ARISTIDE';
  // const line2: string = 'AVAILABLE SEPTEMBER 2025';
</script>

<div
  class="absolute font-jws text-[0.6rem] leading-2.5 top-12 right-12
         flex flex-col items-end"
  style:color={overlayColor}
>
  <TextSlideY 
    text={line1}
    stagger={false}
  />
  <TextSlideY 
    text={line2}
    stagger={false}
    delay={100}
  />
</div>
