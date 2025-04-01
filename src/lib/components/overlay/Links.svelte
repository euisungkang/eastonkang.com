<script lang='ts'>
  let { 
    overlayColor = '#FFFFFF'
  }: {
    overlayColor: string,
  } = $props();
</script>

<a
  aria-label="Blog"
  class="absolute top-12 right-12 flex justify-end font-jws text-xs z-10"
  style:color={overlayColor}
  href="/blog"
>
  <div class="flex flex-col items-end">
    BLOG
    <div 
      class="border w-full"
      style:border-color={overlayColor}
    ></div>
  </div>
</a>
