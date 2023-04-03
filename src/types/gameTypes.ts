export interface RawGameData {
	id: string;
	website: string;
	support_url: string;
	support_email: string;
	name: string;
	release_date: string;
	english: string;
	developer: string;
	publisher: string;
	platforms: string;
	required_age: string;
	categories: string;
	genres: string;
	steamspy_tags: string;
	achievements: string;
	positive_ratings: string;
	negative_ratings: string;
	average_playtime: string;
	median_playtime: string;
	owners: string;
	price: string;
	pc_requirements: string;
	mac_requirements: string;
	linux_requirements: string;
	minimum: string;
	recommended: string;
	header_image: string;
	screenshots: string;
	background: string;
	movies: string;
	detailed_description: string;
	short_description: string;
}

export interface GameDataForTiles {
	docId: string;
	name: string;
	headerImage: string;
	price: string;
	releaseDate: string;
	positiveRatings: string;
	negativeRatings: string;
	platforms: string;
}
