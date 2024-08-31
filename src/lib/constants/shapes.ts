const timeout = [
	750,
	0,
	0,
	0,
	1000,
	0
];

const baseColors = [
 'bg-[#8EA7E9]',
 'bg-[#CCE8DB]',
 'bg-[#A4907C]',
 'bg-[#51565E]',
 'bg-[#8E7AB5]',
 'bg-[#F8B3CA]',
];

const colors = [
	{
		main: 'bg-[#8EA7E9]',
		alt: '[&:not(:hover)]:bg-[#8EA7E9]',
	},
	{
		main: 'hover:bg-[#A5D7C0]',
		alt: '[&:not(:hover)]:bg-[#CCE8DB]',
	},
	{
		main: 'hover:bg-[#776B5D]',
		alt: '[&:not(:hover)]:bg-[#A4907C]',
	},
	{
		main: 'hover:bg-[#3e4248]',
		alt: '[&:not(:hover)]:bg-[#51565E]',
	},
	{
		main: 'bg-[#8E7AB5]',
		alt: '[&:not(:hover)]:bg-transparent',
	},
	{
		main: 'hover:bg-[#F699B8]',
		alt: '[&:not(:hover)]:bg-[#F8B3CA]',
	},
];

const shapes = [
	{
		href: '/wavy',
		direction: 'fade-down-right',
		delay: 0,
		transitions: [
			'scale-x-[1000%] translate-y-[1rem]',
			'translate-y-[calc(175%+2rem)] scale-y-[0.025]',
			'translate-y-[calc(175%+2rem)] scale-y-[0.025]',
			'translate-y-[75%] scale-y-[0.025]',
			'translate-x-[-225%] translate-y-[75%] scale-y-[0.025]',
			'translate-x-[calc(100%+2rem)] translate-y-[75%] scale-y-[0.025]',
		],
	},
	{
		href: '/wavy',
		direction: 'fade-down',
		delay: 100,
		transitions: [
			'',
			'',
			'',
			'',
			'',
			'',
		],
	},
	{
		href: '/wavy',
		direction: 'fade-down-left',
		delay: 200,
		transitions: [
			'',
			'',
			'',
			'',
			'',
			'',
		],
	},
	{
		href: '/wavy',
		direction: 'fade-up-right',
		delay: 500,
		transitions: [
			'',
			'',
			'',
			'',
			'',
			'',
		],
	},
	{
		href: '/wavy',
		direction: 'fade-up',
		delay: 400,
		transitions: [
			'invisible',
			'translate-y-[-2.5%] scale-x-[715%] scale-y-[.25] z-10 bg-gradient-to-r from-[#F8B3CA] via-[#8E7AB5] to-[#F8B3CA]',
			'invisible',
			'translate-x-[-125%] translate-y-[-52.5%] scale-x-[.25] scale-y-[400%] z-10 bg-gradient-to-t from-[#8E7AB5] to-[#F8B3CA] border-r-0 border-white',
			'translate-y-[37.5%] bg-[#8E7AB5] w-screen !h-[1000px] overflow-hidden rounded-t-[1000px]',
			'translate-x-[125%] translate-y-[-52.5%] scale-x-[.25] scale-y-[400%] z-10 bg-gradient-to-t from-[#8E7AB5] to-[#F8B3CA] border-r-0 border-white',
		],
	},
	{
		href: '/wavy',
		direction: 'fade-up-left',
		delay: 300,
		transitions: [
			'',
			'',
			'',
			'',
			'',
			'',
		],
	},
];

export { timeout, shapes, colors, baseColors };

/*
[
'#8EA7E9',
'#7e9d91',
'#A4907C',
'#51565E',
'#8E7AB5',
'#E1AFD1',
],
 */
