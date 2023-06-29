import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import activeWineListReducer from '../features/activeWineList/activeWineListSlice';
import selectedWineReducer from '../features/selectedWine/selectedWineSlice';
import endPointReducer from '../features/endPoint/endPointSlice';

export const store = configureStore({
  reducer: {
    activeWineList: activeWineListReducer,
    selectedWine: selectedWineReducer,
    endPoint: endPointReducer,
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
