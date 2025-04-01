<script lang='ts'>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let { 
    overlayColor = '#FFFFFF'
  }: {
    overlayColor: string,
  } = $props();

  const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const original: string = 'EASTON';
  let text: string = $state('HEUSON');

  onMount(() => {
    glitchText();
  });

  function glitchText() {
    let iterations = 0;
    const interval = setInterval(() => {
      text = text.split('')
                 .map((l, i) => {
                   if (i < iterations) return original[i];
                   return letters[Math.floor(Math.random() * 26)];
                 })
                 .join('');
      if (iterations >= original.length) clearInterval(interval);
      iterations += 1 / 5;
    }, 30);
  }
</script>

<a
  aria-label="Home Logo Button"
  class="absolute font-tny text-5xl top-8 left-12 z-10"
  href="/gallery"
  in:fade={{ duration: 1000 }}
  onmouseover={() => glitchText()}
  onfocus={() => {}}
  style:color={overlayColor}
>
  {text}
</a>

<!--
  <a 
    aria-label="Home Logo Button"
    class="absolute font-tny text-5xl top-8 left-12 flex"
    href="/gallery"
  >
    <div class="">
      E
    </div>
    <div class="">
      A
    </div>
    <div class="">
      S
    </div>
    <div class="">
      T
    </div>
    <div class="">
      O
    </div>
    <div class="">
      N
    </div>
  </a>
-->
