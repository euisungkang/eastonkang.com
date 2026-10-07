<script lang="ts">
	import { onMount } from 'svelte';
	import TextSlideY from '../effects/TextSlideY.svelte';
	import TextSlideX from '../effects/TextSlideX.svelte';
	import { sineOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let {
		color,
		leftFields,
		rightFields,
		invert = false,
		simple = false,
		delay = 0,
		customLabel = 'EXPLORE',
		path,
		onLeave,
		instant = false,
		exit = invert
	}: {
		color: string;
		leftFields: Array<string>;
		rightFields: Array<string>;
		invert: boolean;
		simple?: boolean;
		delay?: number;
		customLabel?: string;
		path?: string;
		onLeave?: (e: MouseEvent) => void;
		instant?: boolean;
		exit?: boolean;
	} = $props();

	// When instant (e.g. arriving on the gallery from a detail page), render
	// fully settled with no entrance so it continues seamlessly. The initial
	// value of `instant` is intentionally captured once (it must not re-animate
	// if `skipEntrance` later flips while this instance stays mounted).
	// svelte-ignore state_referenced_locally
	let lineHeight: string = $state(instant ? '2rem' : '0px');
	// svelte-ignore state_referenced_locally
	let lineWidth: string = $state(instant ? '100%' : '0px');
	// svelte-ignore state_referenced_locally
	let visible: boolean = $state(instant);

	onMount(() => {
		if (instant) return;
		setTimeout(() => {
			visible = true;
			setTimeout(() => {
				lineWidth = '100%';
				lineHeight = '2rem';
			}, 500);
		}, delay);
	});
</script>

{#snippet plus()}
	{#if visible}
		<div class="h-[2vh]">
			<div
				in:slide={{ duration: 1000, delay: 500, easing: sineOut }}
				out:slide|global={{ duration: exit ? 1000 : 0, easing: sineOut }}
			>
				<svg width="auto" height="2vh" viewBox="0 0 14 14">
					<polygon
						fill={color}
						points="7 11.04 6.08 11.04 6.08 7.89 2.96 7.89 2.96 6.1 6.08 6.1 6.08 2.96 7.92 2.96 7.92 6.1 11.04 6.1 11.04 7.89 7.92 7.89 7.92 11.04"
					></polygon>
				</svg>
			</div>
		</div>
	{/if}
{/snippet}

{#snippet line()}
	<div class="h-8">
		<div
			class="trasition-[height] duration-750 delay-200 ease-out border-l"
			style:height={lineHeight}
			style:border-color={color}
		></div>
	</div>
{/snippet}

{#snippet explore()}
	<a
		href={path ? path : '/#'}
		onclick={(e) => {
			if (onLeave) {
				e.preventDefault();
				onLeave(e);
			}
		}}
		class="flex flex-col items-end text-xs leading-3 cursor-pointer"
	>
		<TextSlideX reverse={exit} {instant} text={invert ? 'RETURN' : customLabel} letterDelay={50} />
		<div class="relative bg-white w-full">
			<div
				class="border-t transition-[width] duration-1000 ease-out
               absolute bottom-0 left-0"
				style:width={lineWidth}
				style:border-color={color}
			></div>
		</div>
	</a>
{/snippet}

<!-- Bottom Panel -->
<div
	class={`absolute w-full flex justify-center font-jws
          ${invert ? 'top-12 items-start' : 'bottom-12 items-end'}`}
	style:color
>
	<!-- Left -->
	{#if !simple}
		<div class="w-96 flex text-[.6em]">
			<div class="w-1/4 flex">
				<div class="w-1/2"></div>
				<div class="w-1/2 flex-col leading-2.5 text-left items-center">
					<TextSlideY reverse={exit} {instant} text="A" />
					<TextSlideY reverse={exit} {instant} text="B" delay={50} />
					<TextSlideY reverse={exit} {instant} text="C" delay={100} />
					<TextSlideY reverse={exit} {instant} text="D" delay={150} />
				</div>
			</div>
			<div class="w-1/4 flex flex-col leading-2.5 text-left items-start">
				<TextSlideY reverse={exit} {instant} text="COMPLETED" />
				<TextSlideY reverse={exit} {instant} text="TYPE" delay={50} />
				<TextSlideY reverse={exit} {instant} text="ROLE" delay={100} />
				<TextSlideY reverse={exit} {instant} text="CLIENT" delay={150} />
			</div>
			<div class="w-2/4 text-left items-start flex flex-col leading-2.5">
				{#each leftFields as s, i}
					<TextSlideY reverse={exit} {instant} text={s} delay={50 * i} />
				{/each}
			</div>
		</div>
	{/if}

	<!-- Middle -->
	{#if visible}
		<div class="w-24 space-y-4 flex flex-col items-center justify-end">
			{#if invert}
				<!-- Plus -->
				{@render plus()}
				<!-- Line -->
				{@render line()}
				<!-- Explore -->
				{@render explore()}
			{:else}
				<!-- Explore -->
				{@render explore()}
				<!-- Line -->
				{@render line()}
				<!-- Plus -->
				{@render plus()}
			{/if}
		</div>
	{/if}

	<!-- Right -->
	{#if !simple}
		<div class="w-96 flex text-[.6em]">
			<div class="w-1/4"></div>
			<div class="w-3/4 flex flex-col items-start leading-2.5 text-left">
				{#each rightFields as s, i}
					<TextSlideY reverse={exit} {instant} text={s} delay={i * 50} />
				{/each}
			</div>
		</div>
	{/if}
</div>
