<script lang="ts">
  import { onMount } from 'svelte';
  import Logo from '$lib/components/overlay/Logo.svelte';
  import Socials from '$lib/components/overlay/Socials.svelte';
	import Description from '$lib/components/overlay/Description.svelte';
	import Links from '$lib/components/overlay/Links.svelte';
	import Crosshairs from '$lib/components/overlay/Crosshairs.svelte';
  // import Frame from '$lib/components/overlay/Frame.svelte';

  type Props = {
    overlayColor: string,
  };

  let { 
    overlayColor,
  }: Props = $props();

  // let overlayColor: string = $state('#FFFFFF');
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
      overlayColor={overlayColor == '#adb5ad' ? '#FFFFFF' : overlayColor}
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
    <!-- <Socials  -->
    <!--   overlayColor={overlayColor} -->
    <!-- /> -->
    <!-- <Links -->
    <!--   overlayColor={overlayColor} -->
    <!-- /> -->
  {/if}
</div>
