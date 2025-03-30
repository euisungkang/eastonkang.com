<script lang="ts">
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  // let textPosition: number = $state(-110);
  
  const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let text: string = $state('HEUSON');
  const original: string = 'EASTON';

  onMount(() => {
    // setTimeout(() => {
    //   textPosition = 0;
    // }, 100);
    // textPosition = 0;
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
      iterations += 1 / 3;
    }, 30);
  }

  $effect(() => {
    // console.log(textPosition);
  });
</script>

<a
  onmouseover={() => glitchText()}
  onfocus={() => {}}
  aria-label="Home Logo Button"
  class="absolute font-tny text-5xl top-8 left-12 z-10"
  href="/gallery"
>
  {text}
</a>

<div
  class="absolute font-jws z-10 text-xs bottom-12 right-12 flex flex-col items-end"
>
  <a
    aria-label="LinkedIn"
    href="https://www.linkedin.com/in/easton/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LINKEDIN
  </a>
  <a
    aria-label="Github"
    href="https://github.com/euisungkang"
    target="_blank"
    rel="noopener noreferrer"
  >
    GITHUB
  </a>
</div>

<div
  class="absolute font-jws text-[0.6rem] leading-2.5 bottom-12 left-12 flex flex-col items-start"
>
  <div>FULLSTACK DEVELOPER</div>
  <div>AVAILABLE SEPT 2025</div>
</div>

<a
  aria-label="Blog"
  class="absolute top-12 right-12 flex justify-end font-jws text-xs z-10"
  href="/blog"
>
  <div class="flex flex-col items-end">
    BLOG
    <div class="border border-t-white w-full"></div>
  </div>
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
