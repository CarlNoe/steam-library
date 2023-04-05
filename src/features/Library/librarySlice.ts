import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FilterValue } from '../../types/gameFilteringTypes';

interface LibraryState {
	search: string;
	currentFilter: FilterValue;
}

const initialState: LibraryState = {
	search: '',
	currentFilter: 'default',
};

export const librarySlice = createSlice({
	name: 'library',
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},

		setCurrentFilter: (state, action: PayloadAction<FilterValue>) => {
			state.currentFilter = action.payload;
		},
		resetFilter: (state) => {
			state.currentFilter = 'default';
		},
	},
});

export const { setSearch, setCurrentFilter, resetFilter } =
	librarySlice.actions;

export default librarySlice.reducer;
