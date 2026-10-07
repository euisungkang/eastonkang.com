<script lang="ts">
	import { onMount } from 'svelte';
	import { sineOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let {
		text,
		center = true,
		delay,
		letterDelay,
		stagger,
		distance,
		reverse = false,
		instant = false
	}: {
		text: string;
		center?: boolean;
		delay?: number;
		letterDelay?: number;
		stagger?: boolean;
		distance?: string;
		reverse?: boolean;
		instant?: boolean;
	} = $props();

	let visible: boolean = $state(false);

	onMount(() => {
		if (instant) {
			visible = true;
			return;
		}
		setTimeout(() => {
			visible = true;
		}, 100);
	});
</script>

<div class="flex items-center overflow-hidden {center ? 'justify-center' : 'justify-start'}">
	{#if stagger}
		{#each text as c, i}
			{#if visible}
				<div
					in:fly={{
						y: distance ?? '2vh',
						easing: sineOut,
						duration: instant ? 0 : 1000,
						delay: instant ? 0 : i * (letterDelay ?? 50),
						opacity: 1
					}}
					out:fly|global={{
						y: distance ?? '2vh',
						easing: sineOut,
						duration: reverse ? 1000 : 0,
						delay: reverse ? i * (letterDelay ?? 50) : 0
					}}
				>
					{#if c != ' '}
						{c}
					{:else}
						&nbsp;
					{/if}
				</div>
			{/if}
		{/each}
	{:else if visible}
		<div
			in:fly={{
				y: distance ?? '2vh',
				easing: sineOut,
				duration: instant ? 0 : 1000,
				delay: instant ? 0 : (delay ?? 0),
				opacity: 1
			}}
			out:fly|global={{
				y: distance ?? '2vh',
				easing: sineOut,
				duration: reverse ? 1000 : 0,
				delay: reverse ? (delay ?? 0) : 0
			}}
		>
			{text}
		</div>
	{/if}
</div>
