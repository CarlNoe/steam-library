import { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../app/store';
import { setSearch, setCurrentFilter } from '../../librarySlice';
import {
	FilterOption,
	FilterValue,
} from '../../../../types/gameFilteringTypes';

function GameFiltering() {
	const dispatch = useDispatch();

	const [searchValue, setSearchValue] = useState('');

	const { currentFilter } = useSelector((state: RootState) => state.library);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		dispatch(setCurrentFilter(e.target.value as FilterValue));
	};

	const handleButtonClick = () => {
		dispatch(setSearch(searchValue));
	};

	// The type insure that the value concists of a field name and a sorting order
	const filterOptions: FilterOption[] = [
		{ name: 'Default', value: 'default' },
		{ name: 'Name A-Z', value: 'name_asc' },
		{ name: 'Name Z-A', value: 'name_desc' },
		{ name: 'Price low-high', value: 'price_asc' },
		{ name: 'Price high-low', value: 'price_desc' },
		{ name: 'Release new-old', value: 'release_date_asc' },
		{ name: 'Release old-new', value: 'release_date_desc' },
		{ name: 'Developer A-Z', value: 'developer_asc' },
		{ name: 'Developer Z-A', value: 'developer_desc' },
		{ name: 'Publisher A-Z', value: 'publisher_asc' },
		{ name: 'Publisher Z-A', value: 'publisher_desc' },
		{ name: 'Age low-high', value: 'required_age_asc' },
		{ name: 'Age high-low', value: 'required_age_desc' },
	];

	return (
		<div className="mb-2 flex h-20 bg-steam-dark p-2 font-arial">
			<form className="flex w-full flex-col justify-between">
				<div className="flex items-center">
					<label
						htmlFor="filter"
						className="mr-2 font-extralight opacity-90"
						aria-label="Filter by"
					>
						Filter by:
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
				<div className="flex items-center">
					<input
						type="text"
						className="rounded-xs mr-2 w-full border-2 border-none bg-steam-medBlue p-2 text-xs font-thin opacity-90"
						placeholder="Game to research..."
						value={searchValue}
						onChange={handleInputChange}
					/>
					<button
						type="button"
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
