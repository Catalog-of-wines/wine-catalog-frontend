import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Wine } from '../../types/Wine';
import { getWines } from '../../api/catalog';

export interface WinesState {
  items: Wine[];
  loaded: boolean;
  hasError: string;
}

const initialState: WinesState = {
  items: [],
  loaded: false,
  hasError: '',
};

export const initActiveWineList = createAsyncThunk('wines/fetch', (query: string) => {
  return getWines(query);
});

const activeWineListSlice = createSlice({
  name: 'wines',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initActiveWineList.pending, (state) => {
      state.loaded = false;
    });

    builder.addCase(initActiveWineList.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loaded = true;
    });

    builder.addCase(initActiveWineList.rejected, (state) => {
      state.hasError = 'unable to download wines';
      state.loaded = true;
    });
  },
});

export default activeWineListSlice.reducer;
