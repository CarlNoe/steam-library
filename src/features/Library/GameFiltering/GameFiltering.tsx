import { ChangeEvent, useState, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { setSearch, setCurrentFilter } from '../librarySlice';
import { FilterOption, FilterValue } from '../../../types/gameFilteringTypes';
import { getGamesBySearchQueryForAutoCompletion } from '../../../api/gamesAPI';
import { AutocompleteData } from '../../../api/apiUtils';

function GameFiltering() {
	const dispatch = useDispatch();

	const [searchValue, setSearchValue] = useState('');
	const [suggestions, setSuggestions] = useState<AutocompleteData[]>([]);

	const { currentFilter } = useSelector((state: RootState) => state.library);

	const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);

		if (e.target.value.length > 0) {
			const autoCompleteResults = await getGamesBySearchQueryForAutoCompletion(
				e.target.value,
				10,
				0
			);
			setSuggestions(autoCompleteResults);
		} else {
			setSuggestions([]);
		}
	};

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSearchValue('');
		dispatch(setSearch(''));
		dispatch(setCurrentFilter(e.target.value as FilterValue));
	};

	const handleButtonClick = () => {
		dispatch(setCurrentFilter('default'));
		dispatch(setSearch(searchValue));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		handleButtonClick();
	};

	// The type insure that the value concists of a field name and a sorting order
	const filterOptions: FilterOption[] = [
		{ name: 'Default', value: 'default' },
		{ name: 'Name A-Z', value: 'name_asc' },
		{ name: 'Name Z-A', value: 'name_desc' },
		{ name: 'Price low-high', value: 'price_asc' },
		{ name: 'Price high-low', value: 'price_desc' },
		{ name: 'Release new-old', value: 'release_date_desc' },
		{ name: 'Release old-new', value: 'release_date_asc' },
		{ name: 'Developer A-Z', value: 'developer_asc' },
		{ name: 'Developer Z-A', value: 'developer_desc' },
		{ name: 'Publisher A-Z', value: 'publisher_asc' },
		{ name: 'Publisher Z-A', value: 'publisher_desc' },
		{ name: 'Age low-high', value: 'required_age_asc' },
		{ name: 'Age high-low', value: 'required_age_desc' },
	];

	const handleSuggestionClick = (gameName: string) => {
		setSearchValue(gameName);
		dispatch(setSearch(gameName));
		setSuggestions([]);
	};

	const renderSuggestions = () => {
		if (suggestions.length === 0) {
			return null;
		}
		return (
			<div className="absolute top-10 z-10 flex max-h-48 w-full flex-col overflow-y-auto rounded bg-steam-dark p-0">
				{suggestions.map((suggestion) => (
					<button
						type="button"
						key={suggestion._id}
						className="flex cursor-pointer items-center border-b-[1px] border-steam-darkBlue px-2 py-1 hover:bg-steam-medBlue hover:text-steam-lightBlue"
						onClick={() => handleSuggestionClick(suggestion.name)}
					>
						{suggestion.header_image ? (
							<img src={suggestion.header_image} alt="test" className="w-32" />
						) : (
							<img
								src="https://fakeimg.pl/128x60/?text=NoImage"
								alt="test"
								className="w-32"
							/>
						)}
						<span className="ml-4">{suggestion.name}</span>
					</button>
				))}
			</div>
		);
	};

	return (
		<div className="mb-2 flex h-20 bg-steam-dark p-2 font-arial">
			<form
				className="flex w-full flex-col justify-between"
				onSubmit={handleSubmit}
			>
				<div className="flex items-center">
					<label
						htmlFor="filter"
						className="mr-2 font-extralight opacity-90"
						aria-label="Sort by"
					>
						Sort by:
					</label>
					<select
						name="filter"
						id="filter"
						className="rounded-xs border-2 border-none bg-steam-medBlue py-1 text-xs font-thin text-steam-lightBlue opacity-90"
						value={currentFilter}
						onChange={handleSelectChange}
					>
						{filterOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.name}
							</option>
						))}
					</select>
				</div>
				<div className="relative flex items-center">
					<input
						type="text"
						className="rounded-xs mr-2 w-full border-2 border-none bg-steam-medBlue p-2 text-xs font-thin opacity-90 focus:outline-none"
						placeholder="Game to research..."
						value={searchValue}
						onChange={handleInputChange}
					/>
					{renderSuggestions()}
					<button
						type="submit"
						className="rounded-xs border-2 border-none bg-steam-medBlue p-2 text-xs font-thin text-steam-lightBlue opacity-90"
						onClick={handleButtonClick}
					>
						Research
					</button>
				</div>
			</form>
		</div>
	);
}

export default GameFiltering;
