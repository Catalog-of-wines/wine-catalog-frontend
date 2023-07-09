import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = (() => {
  try {
    const item = window.localStorage.getItem('favorites');

    return item ? JSON.parse(item) : [];

  } catch {
    return [];
  }
});

const favoritesSlise = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<string>) => {
      window.localStorage.setItem('favorites', JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const filtered = state.filter((id: string) => id !== action.payload);
      window.localStorage.setItem('favorites', JSON.stringify(filtered));
      return filtered;
    }
  },
});

export default favoritesSlise.reducer;
export const { addFavorites, removeFromFavorites } = favoritesSlise.actions;
