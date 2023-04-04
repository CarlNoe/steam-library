import { createSlice } from '@reduxjs/toolkit';

interface CommonState {
	isNavOpen: boolean;
}

const initialState: CommonState = {
	isNavOpen: false,
};

export const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		toggleNav: (state) => {
			state.isNavOpen = !state.isNavOpen;
		},
	},
});

export const { toggleNav } = commonSlice.actions;

export default commonSlice.reducer;
