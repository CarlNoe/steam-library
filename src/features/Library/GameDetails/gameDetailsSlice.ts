import { createSlice } from '@reduxjs/toolkit';

interface GameDetailsState {
	test: string;
}

const initialState: GameDetailsState = {
	test: 'test',
};

export const gameDetailsSlice = createSlice({
	name: 'gameDetails',
	initialState,
	reducers: {
		setTest: (state, action) => {
			state.test = action.payload;
		},
	},
});

export const { setTest } = gameDetailsSlice.actions;

export default gameDetailsSlice.reducer;
