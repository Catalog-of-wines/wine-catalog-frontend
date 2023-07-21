import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import activeWineListReducer from '../features/activeWineList/activeWineListSlice';
import selectedWineReducer from '../features/selectedWine/selectedWineSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    activeWineList: activeWineListReducer,
    selectedWine: selectedWineReducer,
    favorites: favoritesReducer,
    auth: authReducer,
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
