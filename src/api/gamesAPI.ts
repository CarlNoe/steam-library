import { GameDataForTiles } from '../types/gameTypes';
import { handleResponse, mapGameData, RawApiData } from './apiUtils';

const API_BASE_URL = 'http://localhost:8080';

async function fetchGames(from: number, size: number): Promise<RawApiData[]> {
	const response = await fetch(
		`${API_BASE_URL}/games/from/${from}/size/${size}`
	);
	return handleResponse(response);
}

export async function getGamesByPaginationForTiles(
	from: number,
	size: number
): Promise<GameDataForTiles[]> {
	const rawGameData = await fetchGames(from, size);
	return rawGameData.map(mapGameData);
}

export async function searchGames(from: number, size: number, search: string) {
	const response = await fetch(
		`${API_BASE_URL}/games/from/${from}/size/${size}/search/${search}`
	);
	return handleResponse(response);
}
