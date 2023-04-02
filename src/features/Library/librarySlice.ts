import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// todo: change the slice

interface LibraryState {
	games: string[];
}

const initialState: LibraryState = {
	games: [],
};

export const librarySlice = createSlice({
	name: 'library',
	initialState,
	reducers: {
		addGame: (state, action: PayloadAction<string>) => {
			state.games.push(action.payload);
		},
	},
});

export const { addGame } = librarySlice.actions;

export default librarySlice.reducer;
