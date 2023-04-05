import { RawGameData, GameDataForTiles } from '../types/gameTypes';
import { RawUserData } from '../types/userTypes';

export interface RawApiData {
	_index: string;
	_id: string;
	_score: number;
	_ignored: string[];
	_source: RawGameData;
}

export interface RawApiUserData {
	_index: string;
	_id: string;
	_score: number;
	_ignored: string[];
	_source: RawUserData;
}

export interface AutocompleteData {
	_id: string;
	name: string;
	header_image: string;
}

export async function handleResponse(
	response: Response
): Promise<RawApiData[]> {
	if (!response.ok) {
		throw new Error(`Error: ${response.statusText}`);
	}
	return response.json();
}

export function mapGameData(rawGameData: RawApiData): GameDataForTiles {
	const { _id, _source } = rawGameData;
	const {
		name,
		header_image: headerImage,
		price,
		release_date: releaseDate,
		positive_ratings: positiveRatings,
		negative_ratings: negativeRatings,
		platforms,
	} = _source;

	return {
		docId: _id,
		name,
		headerImage,
		price,
		releaseDate,
		positiveRatings,
		negativeRatings,
		platforms,
	};
}
