import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import activeWineListReducer from '../features/activeWineList/activeWineListSlice';
import selectedWineReducer from '../features/selectedWine/selectedWineSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    activeWineList: activeWineListReducer,
    selectedWine: selectedWineReducer,
    favorites: favoritesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
