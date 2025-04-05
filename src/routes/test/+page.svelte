<script>
  import { tick } from 'svelte';

  let showModal = false;

  async function toggleModal() {
    // Feature detect View Transitions API
    if (!document.startViewTransition) {
      console.log('No View Transition');
      showModal = !showModal; // Fallback: Just toggle visibility
      return;
    }

    // Start the transition
    const transition = document.startViewTransition(async () => {
      // This callback updates the DOM
      showModal = !showModal;
      // IMPORTANT: Wait for Svelte to apply the DOM change
      await tick();
    });

    // Optional: Wait for pseudo-elements to be created if needed
    // await transition.ready;
    // Optional: Do something when animations finish
    // await transition.finished;
  }
</script>

<button on:click={toggleModal}>Toggle Modal</button>

{#if showModal}
  <!-- Use one of the methods above to apply the name -->
  <div
    class="fixed inset-0 bg-black/50 flex items-center justify-center"
    style="view-transition-name: modal-backdrop;"
    on:click={toggleModal}
  >
    <div
      class="bg-white p-8 rounded shadow-lg"
      style="view-transition-name: modal-content;"
      on:click|stopPropagation
    >
      <h2>Modal Content</h2>
      <p>This modal uses view transitions!</p>
      <button class="mt-4 p-2 bg-blue-500 text-white rounded" on:click={toggleModal}>Close</button>
    </div>
  </div>
{/if}

<!-- <script lang='ts'> -->
<!--   import { onMount } from 'svelte'; -->
<!--   import { slide } from 'svelte/transition'; -->
<!---->
<!--   let visible: boolean = $state(false); -->
<!--   const name: string = 'EASTONKANG'; -->
<!---->
<!--   onMount(() => { -->
<!--     setTimeout(() => { -->
<!--       visible = true -->
<!--     }, 100); -->
<!--   }); -->
<!-- </script> -->
<!---->
<!-- <div -->
<!--   class="dark h-screen w-screen bg-[#121212] -->
<!--          flex flex-col items-center justify-center" -->
<!-- > -->
<!--   <div class="flex items-center justify-center h-1/2 w-full"> -->
<!--     {#each name as c, i} -->
<!--       <div class="overflow-hidden"> -->
<!--         <!-- Used as space filler --> -->
<!--         <div class="font-tny text-9xl invisible">{c}</div> -->
<!---->
<!--         {#if visible} -->
<!--           <div  -->
<!--             class="font-tny text-9xl" -->
<!--             in:slide={{ axis: 'x', duration: 1000, delay: i * 50 }} -->
<!--           > -->
<!--             {c} -->
<!--           </div> -->
<!--         {/if} -->
<!--       </div> -->
<!--     {/each} -->
<!--   </div> -->
<!---->
<!--   <!-- Vertical slide delay --> -->
<!--   <div class="flex items-center justify-center h-1/2 w-full"> -->
<!--     {#each name as c, i} -->
<!--       {#if visible} -->
<!--         <div  -->
<!--           class="font-tny text-9xl" -->
<!--           in:slide={{ axis: 'y', duration: 1000, delay: i * 50 }} -->
<!--         > -->
<!--           {c} -->
<!--         </div> -->
<!--       {/if} -->
<!--     {/each} -->
<!--   </div> -->
<!-- </div> -->
