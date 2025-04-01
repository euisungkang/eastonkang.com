<script lang='ts'>
  let { 
    overlayColor = '#FFFFFF'
  }: {
    overlayColor: string,
  } = $props();
</script>

<div
  class="absolute font-jws z-10 text-xs bottom-12 right-12 flex flex-col items-end"
  style:color={overlayColor}
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
