import {
	getGamesByPaginationForTiles,
	getGamesByPaginationAndSortForTiles,
	getGamesBySearchForTiles,
} from '../../../api/gamesAPI';
import { GameDataForTiles } from '../../../types/gameTypes';
import splitFilterValueString from '../../../utils/utils';
import { FilterValue } from '../../../types/gameFilteringTypes';

const GAMES_PER_PAGE = 30;

const loadGames = async (
	page: number,
	currentFilter: FilterValue,
	search: string
): Promise<GameDataForTiles[]> => {
	try {
		if (search !== '') {
			const response = await getGamesBySearchForTiles(search, GAMES_PER_PAGE);
			return response;
		}
		if (currentFilter === 'default') {
			const response = await getGamesByPaginationForTiles(
				page * GAMES_PER_PAGE,
				GAMES_PER_PAGE
			);
			return response;
		}
		const response = await getGamesByPaginationAndSortForTiles(
			page * GAMES_PER_PAGE,
			GAMES_PER_PAGE,
			...splitFilterValueString(currentFilter)
		);
		return response;
	} catch (error) {
		throw new Error(String(error));
	}
};

export default loadGames;
