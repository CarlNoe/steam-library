import { configureStore } from '@reduxjs/toolkit';
import commonReducer from '../common/commonSlice';
import libraryReducer from '../features/Library/librarySlice';

export const store = configureStore({
	reducer: {
		common: commonReducer,
		library: libraryReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
