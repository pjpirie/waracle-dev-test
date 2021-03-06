import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FavoriteType } from "../../API/favourites";

export interface FavStore {
	favStore: FavoriteType[];
}

export const favSlice = createSlice({
	name: "favSlicer",
	initialState: {
		favStore: [
			{
				image: {
					id: "123",
					url: "www.google.com",
				},
				image_id: "Default",
				id: "Default",
				created_at: "Default",
			},
		],
	},
	reducers: {
		addFav: (state, action: PayloadAction<FavoriteType>) => {
			state.favStore = [...state.favStore, action.payload];
		},
		removeFav: (state, action: PayloadAction<string>) => {
			state.favStore = state.favStore.filter((item) => {
				return item.id !== action.payload;
			});
		},
		setFavs: (state, action: PayloadAction<FavoriteType[]>) => {
			state.favStore = action.payload;
		},
	},
});

export const { addFav, setFavs, removeFav } = favSlice.actions;

export default favSlice.reducer;
