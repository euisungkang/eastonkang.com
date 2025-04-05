<script lang="ts">
  import { onMount } from 'svelte';
  import Logo from './Logo.svelte';
	import Description from './Description.svelte';
	import Crosshairs from './Crosshairs.svelte';
  import Socials from './Socials.svelte';
	// import Links from './Links.svelte';

  type Props = {
    overlayColor: string,
  };

  let { 
    overlayColor,
  }: Props = $props();

  let load: boolean = $state(false);

  onMount(() => {
    load = true;
  });
</script>

<div
  class="w-screen h-screen absolute top-0 left-0
         [&>*]:transition-colors [&>*]:duration-1000 [&>*]:ease-out"
>
  {#if load}
    <Crosshairs
      overlayColor={overlayColor}
    />
    <Logo 
      overlayColor={overlayColor}
    />
    <Description 
      overlayColor={overlayColor}
    />
    <!-- {#if selectedIndex != -1} -->
    <!--   <Frame  -->
    <!--     overlayColor={overlayColor} -->
    <!--   /> -->
    <!-- {/if} -->
    <Socials
      overlayColor={overlayColor}
    />
    <!-- <Links -->
    <!--   overlayColor={overlayColor} -->
    <!-- /> -->
  {/if}
</div>
