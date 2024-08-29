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
		main: 'hover:bg-[#5F82E0]',
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
		main: 'hover:bg-[#70589F]',
		alt: '[&:not(:hover)]:bg-[#8E7AB5]',
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
			'mx-4 mb-8',
			'translate-x-[calc(150%+2rem)] scale-x-[.01]',
			'translate-x-[calc(50%)] translate-y-[100%] scale-x-[.01]',
			'invisible',
			'invisible',
			'invisible',
		],
	},
	{
		href: '/wavy',
		direction: 'fade-down',
		delay: 100,
		transitions: [
			'',
			'hover:scale-110',
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
			'hover:scale-110',
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
			'hover:scale-110',
			'',
			'',
		],
	},
	{
		href: '/wavy',
		direction: 'fade-up',
		delay: 400,
		transitions: [
			'',
			'',
			'',
			'',
			'hover:scale-110',
			'',
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
			'hover:scale-110',
		],
	},
];

export { shapes, colors, baseColors };
