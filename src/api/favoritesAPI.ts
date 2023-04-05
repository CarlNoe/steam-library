import { handleResponse, mapGameData, RawApiData } from './apiUtils';
import { GameDataForTiles } from '../types/gameTypes';

const API_BASE_URL = 'http://localhost:8080';

function getTokenFromLocalStorage(): string | null {
	const user = localStorage.getItem('userData');
	if (user) {
		const { token } = JSON.parse(user);
		return token;
	}
	return null;
}

async function fetchFavoriteGames(): Promise<RawApiData[]> {
	const token = getTokenFromLocalStorage();
	const response = await fetch(`${API_BASE_URL}/user/favorites`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return handleResponse(response);
}

export async function getFavoriteGames(): Promise<GameDataForTiles[]> {
	const rawFavoriteGamesData = await fetchFavoriteGames();
	return rawFavoriteGamesData.map(mapGameData);
}

export async function addGameToFavorites(gameId: string): Promise<void> {
	const token = getTokenFromLocalStorage();
	const response = await fetch(`${API_BASE_URL}/user/add/favorite/${gameId}`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	await handleResponse(response);
}
