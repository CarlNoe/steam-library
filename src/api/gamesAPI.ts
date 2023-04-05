import { RawGameData, GameDataForTiles } from '../types/gameTypes';
import { handleResponse, mapGameData, RawApiData } from './apiUtils';

const API_BASE_URL = 'http://localhost:8080';

// Fetch data from API

async function fetchPaginatedGames(
	from: number,
	size: number
): Promise<RawApiData[]> {
	const response = await fetch(
		`${API_BASE_URL}/games/from/${from}/size/${size}`
	);
	return handleResponse(response);
}

async function fetchPaginatedGamesAndSort(
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

async function fetchGamesBySearchQuery(
	search: string,
	size: number,
	from: number
): Promise<RawApiData[]> {
	const response = await fetch(
		`${API_BASE_URL}/games/from/${from}/size/${size}/search/${search}`
	);
	return handleResponse(response);
}

async function fetchGameDetailsById(id: string): Promise<RawApiData> {
	const response = await fetch(`${API_BASE_URL}/games/${id}`);
	if (!response.ok) {
		throw new Error(`Error: ${response.statusText}`);
	}
	return response.json();
}

// Get data formatted for tiles

export async function getSortedPaginatedGamesForTiles(
	from: number,
	size: number
): Promise<GameDataForTiles[]> {
	const rawGameData = await fetchPaginatedGames(from, size);
	return rawGameData.map(mapGameData);
}

export async function getGamesByPaginationAndSortForTiles(
	from: number,
	size: number,
	field: string,
	order: string
): Promise<GameDataForTiles[]> {
	const rawGameData = await fetchPaginatedGamesAndSort(
		from,
		size,
		field,
		order
	);
	return rawGameData.map(mapGameData);
}

export async function getGamesBySearchQueryForTiles(
	search: string,
	size: number,
	from: number
): Promise<GameDataForTiles[]> {
	const rawGameData = await fetchGamesBySearchQuery(search, size, from);
	return rawGameData.map(mapGameData);
}

export async function getGameDetailsById(id: string): Promise<RawGameData> {
	const rawGameData = await fetchGameDetailsById(id);
	return rawGameData._source;
}
