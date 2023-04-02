// todo: replace with real data

interface Game {
	id: number;
	name: string;
	description: string;
	image: string;
}

const games: Game[] = [
	{
		id: 1,
		name: 'The Witcher 3: Wild Hunt',
		description:
			'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. Based on The Witcher series of fantasy novels by Polish author Andrzej Sapkowski, it is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third main installment in The Witcher video game series, played in an open world with a third-person perspective.',
		image: 'https://fakeimg.pl/300x150/ff0000',
	},
	{
		id: 2,
		name: 'The Witcher 2: Assassins of Kings',
		description:
			'The Witcher 2: Assassins of Kings is a 2011 action role-playing game developed by CD Projekt RED and published by Atari. Based on The Witcher series of fantasy novels by Polish author Andrzej Sapkowski, it is the sequel to the 2007 game The Witcher and the second main installment in The Witcher video game series, played in an open world with a third-person perspective.',
		image: 'https://fakeimg.pl/300x150/00ff00',
	},
	{
		id: 3,
		name: 'The Witcher',
		description:
			'The Witcher is a 2007 action role-playing game developed by CD Projekt RED and published by Atari. Based on The Witcher series of fantasy novels by Polish author Andrzej Sapkowski, it is the first main installment in The Witcher video game series, played in an open world with a third-person perspective.',
		image: 'https://fakeimg.pl/300x150/0000ff',
	},
];

export default games;
