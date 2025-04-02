<script lang='ts'>
  import TextSlideX from '../effects/TextSlideX.svelte';

  const text: string = 'EASTON';

  let { 
    overlayColor = '#FFFFFF'
  }: {
    overlayColor: string,
  } = $props();
</script>

<a
  aria-label="Home Logo Button"
  class="absolute font-tny text-5xl top-8 left-12"
  href="/gallery"
  style:color={overlayColor}
>
  <TextSlideX
    text={text}
  />
</a>

  <!-- onmouseover={() => glitchText()} -->
  <!-- onfocus={() => {}} -->

  <!-- // const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; -->
  <!-- // const original: string = 'EASTON'; -->
  <!-- // let text: string = $state('HEUSON'); -->
  <!-- // -->
  <!-- // onMount(() => { -->
  <!-- //   glitchText(); -->
  <!-- // }); -->
  <!-- // -->
  <!-- // function glitchText() { -->
  <!-- //   let iterations = 0; -->
  <!-- //   const interval = setInterval(() => { -->
  <!-- //     text = text.split('') -->
  <!-- //                .map((l, i) => { -->
  <!-- //                  if (i < iterations) return original[i]; -->
  <!-- //                  return letters[Math.floor(Math.random() * 26)]; -->
  <!-- //                }) -->
  <!-- //                .join(''); -->
  <!-- //     if (iterations >= original.length) clearInterval(interval); -->
  <!-- //     iterations += 1 / 5; -->
  <!-- //   }, 30); -->
  <!-- // } -->
