'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

/**@type {(FormatsData | {section: string, column?: number})[]} */
let Formats = [

	// Pokemon Infinite Beta
	///////////////////////////////////////////////////////////////////
	{
		section: "Pokemon Infinite",
	},
	{
		name: "[Gen 8] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656245/">OU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Species Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Infinite Timer'],
		banlist: ['Power Construct', 'Ultranecrozium Z',
			'Alakazam-Mega', 'Apocalylidae', 'Arceus', 'Blastoise-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Darkrai-Mega', 'Darmanitan-Galar-Zen', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Eternatus', 'Gengar-Mega', 'Giratina', 'Groudon', 'Groudon-Primal',
			'Ho-Oh', 'Kyogre', 'Kyogre-Primal', 'Kyurem-White', 'Kyurem-Black', 'Kyurem-Omnipotent', 'Lucario-Mega', 'Lugia', 'Lunala',
			'Marshadow', 'Mebiusan-Past', 'Mebiusan-Future', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa',
			'Rayquaza', 'Rayquaza-Mega', 'Reshiram', 'Solgaleo', 'Salamence-Mega', 'Zacian', 'Zamazenta', 'Xerneas', 'Yveltal', 'Zekrom',
		],
	},
	{
		name: "[Gen 8] OU [Tier II]",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656245/">OU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Species Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Infinite Timer'],
		banlist: ['Ultranecrozium Z',
			'Apocalylidae', 'Arceus-Base', 'Arceus-Ghost', 'Arceus-Infinite', 'Arceus-Fairy', 'Arceus-Water', 'Arceus-Ground', 
			'Calyrex-Shadow', 'Calyrex-Ice', 'Darkrai-Mega', 'Darmanitan-Galar-Zen', 'Eternatus', 'Groudon-Primal', 'Ho-Oh', 'Kyogre', 'Kyogre-Primal', 'Kyurem-Omnipotent', 'Lugia',
			'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Necrozma-Dusk-Mane', 'Rayquaza-Mega', 'Zacian', 'Zamazenta-Crowned',
		],
	},
	{
		name: "[Gen 8] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658529/">UU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 8] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658529/">UU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] UU'],
		banlist: ['UU', 'UUBL', 'RUBL'],
	},
	{
		name: "[Gen 8] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658529/">UU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] RU'],
		banlist: ['RU', 'UUBL', 'RUBL', 'NUBL'],
	},
	{
		name: "[Gen 8] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/np-swsh-dou-stage-0-begin-again.3656244/">Doubles OU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Standard Doubles', 'Team Preview', 'Infinite Timer'],
		banlist: ['DUber'],
	},
	{
		name: "[Gen 8] Anything Goes",
		desc: `The official new banlist for OU, it replaces the Uber tier and now let's you use any unbanned strategy.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587441/">Anything Goes Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591711/">Anything Goes Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646736/">Anything Goes Sample Teams</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Infinite Timer'],
	},
	{
		name: "[Gen 8] Balanced Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587475/">Balanced Hackmons</a>`,
		],

		mod: 'gen8',
		ruleset: ['-Nonexistent', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Infinite Timer'],
		banlist: ['Arena Trap', 'Contrary', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Magnet Pull', 'Moody', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Gengarite', 'Comatose + Sleep Talk'],
	},
	{
		name: "[Gen 8] Custom Game",

		mod: 'gen8',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Infinite Timer'],
	},
	{
		name: "[Gen 8] Doubles Custom Game",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [2, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Infinite Timer'],
	},
];

exports.Formats = Formats;
