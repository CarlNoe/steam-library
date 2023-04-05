import {
	getSortedPaginatedGamesForTiles,
	getGamesByPaginationAndSortForTiles,
	getGamesBySearchQueryForTiles,
} from '../../../api/gamesAPI';
import { GameDataForTiles } from '../../../types/gameTypes';
import splitFilterValueString from '../../../utils/utils';
import { FilterValue } from '../../../types/gameFilteringTypes';

const loadGames = async (
	gamesPerPage: number,
	page: number,
	currentFilter: FilterValue,
	search: string
): Promise<GameDataForTiles[]> => {
	try {
		if (search !== '') {
			const response = await getGamesBySearchQueryForTiles(
				search,
				gamesPerPage
			);
			return response;
		}
		if (currentFilter === 'default') {
			const response = await getSortedPaginatedGamesForTiles(
				page * gamesPerPage,
				gamesPerPage
			);
			return response;
		}
		const response = await getGamesByPaginationAndSortForTiles(
			page * gamesPerPage,
			gamesPerPage,
			...splitFilterValueString(currentFilter)
		);
		return response;
	} catch (error) {
		throw new Error(String(error));
	}
};

export default loadGames;
