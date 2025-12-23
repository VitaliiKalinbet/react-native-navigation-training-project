import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload.mealId);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((mealId) => mealId !== action.payload.mealId);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
