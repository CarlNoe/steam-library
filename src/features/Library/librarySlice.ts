import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LibraryState {
	search: string;
	currentFilter: string;
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

		setCurrentFilter: (state, action: PayloadAction<string>) => {
			state.currentFilter = action.payload;
		},
	},
});

export const { setSearch, setCurrentFilter } = librarySlice.actions;

export default librarySlice.reducer;
