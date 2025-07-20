<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		overlayColor = '#ADB5AD'
	}: {
		overlayColor: string;
	} = $props();

	const fields = {
		CLIENTS: [
			'GSPOWER',
			'TUFTS',
			'SPACE.P',
			'',
			'AIRBALLOON',
			'',
			'',
			'LAMINA',
			'ROKA',
			'',
			'ERICKO',
			'SOAPLAND',
			'',
			'',
			'WAVY',
			'',
			'FAFNIR',
			'BLINDFOLD'
		],
		EXPERIENCE: [
			'SECURITY ENGINEER',
			'TUFTS CYBERSECURITY CLINIC',
			'',
			'',
			'FULLSTACK ENGINEER',
			'AIRBALLOON',
			'',
			'',
			'LEAD FULLSTACK DEVELOPER',
			'SPACE.P',
			'',
			'',
			'SOFTWARE ENGINEER INTERN',
			'ACCESSSIGCHI',
			'',
			'',
			'BACKEND DEVELOPER INTERN',
			'BLOCKLAB ROTTERDAM'
		],
		BACKGROUND: [
			'M.S. COMPUTER SCIENCE',
			'INCOMING 2025',
			'',
			'',
			'B.S. COMPUTER SCIENCE',
			'TUFTS UNIVERSITY',
			'',
			'',
			'FULLSTACK BOOTCAMP',
			'IXPERIENCE'
		],
		STACK: [
			'LANGUAGES',
			'',
			'TYPESCRIPT',
			'JAVASCRIPT',
			'PYTHON',
			'JAVA',
			'',
			'',
			'FRAMEWORKS',
			'',
			'SPRING',
			'NODE',
			'REACT',
			'SVELTE',
			'FLUTTER',
			'',
			'',
			'DATABASES',
			'',
			'POSTGRESQL',
			'MYSQL',
			'REDIS',
			'FIREBASE',
			'',
			'',
			'OTHER',
			'',
			'AWS',
			'DOCKER',
			'GIT',
			'GCP',
			'VERCEL'
		]
	};
</script>

<div
	class="absolute font-jws text-[0.7rem] leading-2.5 flex justify-around h-full w-full"
	style:color={overlayColor}
>
	{#each Object.entries(fields) as [label, items]}
		<div class="flex flex-col w-1/4">
			<div class="pb-[2.1rem]">
				<TextSlideY text={label} center={false} stagger={false} delay={0} />
			</div>
			{#each items as item, j}
				{#if item === ''}
					<div class="pb-[0.7rem]"></div>
				{:else}
					<TextSlideY text={item} center={false} stagger={false} delay={50 * (j + 1)} />
				{/if}
			{/each}
		</div>
	{/each}
</div>
