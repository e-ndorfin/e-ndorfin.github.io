export type ProjectMedia = {
	label: string;
	type: 'image' | 'video';
	src: string;
	poster?: string;
};

export type SelectedWorkProject = {
	id: string;
	index: string;
	category: string;
	meta: string;
	title: string;
	description: string;
	image: string;
	thesis: string;
	contributions: string[];
	media: ProjectMedia[];
	links: { label: string; href: string }[];
};

export const selectedWorkProjects: SelectedWorkProject[] = [
	{
		id: 'wirecraft',
		index: '01',
		category: 'Research',
		meta: 'CoRL 2026 · Spotlight',
		title: 'WireCraft',
		description: 'A CoRL Spotlight benchmark spanning simulation and physical-robot wire manipulation.',
		image: '/images/wirecraft-preview.png',
		thesis: 'A CoRL 2026 Spotlight benchmark for training and evaluating robot policies on contact-rich, flexible-wire manipulation in simulation and on physical hardware.',
		contributions: [
			'Built and benchmarked Isaac Lab environments for articulated and deformable wires, using PPO, reward shaping, routing demonstrations, and task-success metrics to train and evaluate manipulation policies.',
			'Built LeRobot-compatible datasets and scalable training and inference pipelines; deployed, fine-tuned, and evaluated π0.5, ACT, and multi-task DiT policies for physical UR5 wire manipulation.',
			'Investigated rare, nondeterministic PhysX failures that appeared millions of RL steps into training by adding joint-state logging and a Three.js replay tool.',
			'Traced sharp angular-velocity spikes to unstable contact configurations, informing contact-mesh changes that made training substantially more stable.',
			'Showed that combining simulated and real demonstrations improved physical-robot performance over training on real demonstrations alone.',
		],
		media: [{ label: 'Overview', type: 'image', src: '/images/wirecraft-preview.png' }],
		links: [{ label: 'Read the paper ↗', href: 'https://arxiv.org/abs/2606.18097' }],
	},
	{
		id: 'yonsei',
		index: '02',
		category: 'Research',
		meta: 'Yonsei University',
		title: 'Real-time diffusion policies',
		description: 'Real-robot data collection, diffusion-policy execution, and post-training from human feedback.',
		image: '/media/projects/yonsei-poster.jpg',
		thesis: 'A three-month research project at Yonsei University spanning dual-arm data collection, asynchronous diffusion-policy execution, and post-training from robot failures and human interventions.',
		contributions: [
			'Built and operated a dual-arm 14-DoF YAM teleoperation setup, helped develop its control framework, and collected real-robot demonstrations and human interventions for policy post-training.',
			'Implemented real-time chunking for diffusion policies, using diffusion-space interpolation so the robot could execute one action chunk while generating the next.',
			'Enabled asynchronous robot control while maintaining policy performance, avoiding the degradation caused by naively averaging overlapping action chunks.',
			'Implemented and evaluated RL-Token-style offline post-training using failure and intervention data, contributing to top-eight finishes in both tracks of the RSS 2026 Robotics Foundation Models Challenge.',
		],
		media: [
			{ label: 'Robot rollout', type: 'video', src: '/media/projects/yonsei-rollout.mp4', poster: '/media/projects/yonsei-poster.jpg' },
			{ label: 'RTC comparison', type: 'video', src: '/media/projects/rtc-comparison.mp4' },
			{ label: 'Prefetch', type: 'video', src: '/media/projects/prefetch-6.mp4' },
			{ label: 'Trajectories', type: 'image', src: '/media/projects/trajectory-20.jpg' },
		],
		links: [],
	},
	{
		id: 'identity',
		index: '03',
		category: 'Project',
		meta: 'UofTHacks 13 · 1st Place',
		title: 'Identity Matrix',
		description: 'Persistent AI avatars in a shared game world.',
		image: '/media/projects/identity-matrix.jpg',
		thesis: 'A multiplayer world where AI avatars keep acting after their users leave, learning their personalities and memories.',
		contributions: [
			'Built in less than 24 hours with a team of four.',
			'Created a persistent multiplayer simulation with autonomous agents.',
			'Combined game logic, social memory, and generated character assets.',
			'Won overall first place and Best UofT Hack at UofTHacks 13.',
		],
		media: [{ label: 'World', type: 'image', src: '/media/projects/identity-matrix.jpg' }],
		links: [
			{ label: 'Devpost ↗', href: 'https://devpost.com/software/temp-sqyptg' },
			{ label: 'GitHub ↗', href: 'https://github.com/qiuethan/Identity-Matrix' },
		],
	},
	{
		id: 'heimer',
		index: '04',
		category: 'Project',
		meta: 'AWS × Riot Games · 1st Place',
		title: 'Heimer Academy',
		description: 'Personalized coaching for League players.',
		image: '/media/projects/heimer-academy.jpg',
		thesis: 'A League of Legends coaching platform that recommends champions and turns gameplay data into actionable feedback.',
		contributions: [
			'Compared gameplay patterns across tens of thousands of player profiles.',
			'Analyzed similarities across more than 600 champion abilities.',
			'Built a personalized recommendation and coaching experience.',
			'Won first place at the AWS × Riot Games Rift Rewind hackathon.',
		],
		media: [{ label: 'Product', type: 'image', src: '/media/projects/heimer-academy.jpg' }],
		links: [
			{ label: 'Devpost ↗', href: 'https://devpost.com/software/idk-evraiq' },
			{ label: 'GitHub ↗', href: 'https://github.com/qiuethan/Heimer-Academy' },
		],
	},
];
