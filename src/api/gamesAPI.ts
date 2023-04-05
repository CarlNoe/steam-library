import { GameDataForTiles } from '../types/gameTypes';
import { handleResponse, mapGameData, RawApiData } from './apiUtils';

const API_BASE_URL = 'http://localhost:8080';

async function fetchGamesByPagination(
	from: number,
	size: number
): Promise<RawApiData[]> {
	const response = await fetch(
		`${API_BASE_URL}/games/from/${from}/size/${size}`
	);
	return handleResponse(response);
}

async function fetchGamesByPaginationAndSort(
	from: number,
	size: number,
	field: string,
	order: string
): Promise<RawApiData[]> {
	const response = await fetch(
		`${API_BASE_URL}/games/from/${from}/size/${size}/field/${field}/order/${order}`
	);
	return handleResponse(response);
}

export async function getGamesByPaginationForTiles(
	from: number,
	size: number
): Promise<GameDataForTiles[]> {
	const rawGameData = await fetchGamesByPagination(from, size);
	return rawGameData.map(mapGameData);
}

export async function getGamesByPaginationAndSortForTiles(
	from: number,
	size: number,
	field: string,
	order: string
): Promise<GameDataForTiles[]> {
	const rawGameData = await fetchGamesByPaginationAndSort(
		from,
		size,
		field,
		order
	);
	return rawGameData.map(mapGameData);
}
