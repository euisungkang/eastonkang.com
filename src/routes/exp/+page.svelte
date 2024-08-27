<!--<script>-->
<!--	import {draw} from 'svelte/transition';-->

<!--	let commands = [-->
<!--		'M 0 40 h50',-->
<!--		'M 50 30 h-50',-->
<!--		'M 0 20 h50',-->
<!--		'M 50 10 h-50'-->
<!--	];-->
<!--	const max = 50;-->
<!--	let show = true;-->

<!--	function onKeyDown(e) {-->
<!--		switch(e.keyCode) {-->
<!--			case 39:-->
<!--				show = !show;-->
<!--				break;-->
<!--		}-->
<!--	}-->
<!--</script>-->

<!--<div class="h-screen w-screen flex items-center justify-center bg-black">-->
<!--	{#if show}-->
<!--			<svg preserveAspectRatio="none" width={"100%"} height={"100%"} viewBox="0 0 {max} {max}">-->
<!--				<g transform="translate(0 {max}) scale(1 -1)">-->
<!--					<path transition:draw={{duration: 700}}-->
<!--								d={commands[0]}-->
<!--								fill="none"-->
<!--								stroke="white"-->
<!--								stroke-width="0.1px"-->
<!--					/>-->
<!--					<path transition:draw={{duration: 700}}-->
<!--								d={commands[1]}-->
<!--								fill="none"-->
<!--								stroke="white"-->
<!--								stroke-width="0.1px"-->
<!--					/>-->
<!--					<path transition:draw={{duration: 700}}-->
<!--								d={commands[2]}-->
<!--								fill="none"-->
<!--								stroke="white"-->
<!--								stroke-width="0.1px"-->
<!--					/>-->
<!--					<path transition:draw={{duration: 700}}-->
<!--								d={commands[3]}-->
<!--								fill="none"-->
<!--								stroke="white"-->
<!--								stroke-width="0.1px"-->
<!--					/>-->
<!--				</g>-->
<!--			</svg>-->
<!--	{/if}-->
<!--</div>-->

<!--<svelte:window on:keydown|preventDefault={onKeyDown} />-->

<!--<style>-->

<!--</style>-->
