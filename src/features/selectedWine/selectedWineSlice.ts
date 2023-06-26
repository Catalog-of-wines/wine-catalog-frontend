import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { Wine } from '../../types/Wine';
import { getOneWine } from '../../api/catalog';

export interface WineState {
  item: Wine | null;
  loaded: boolean;
  hasError: string;
}

const initialState: WineState = {
  item: null,
  loaded: false,
  hasError: '',
};

export const initSelectedWine = createAsyncThunk('wine/fetch', (wineId: string) => {  
  return getOneWine(wineId);
});

const selectedWineSlise = createSlice({
  name: 'wine',
  initialState,
  reducers: {
    // clear: (state, action: PayloadAction<Wine>) => {
    //   state.items = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(initSelectedWine.pending, (state) => {
      state.loaded = false;
    });
    
    builder.addCase(initSelectedWine.fulfilled, (state, action) => {
      console.log('!!!', action.payload);
      state.item = action.payload;
      state.loaded = true;
    });

    builder.addCase(initSelectedWine.rejected, (state) => {
      state.hasError = 'unable to download wine';
      state.loaded = true;
    });
  },
});

export default selectedWineSlise.reducer;
// export const { clear } = selectedWineSlise.actions;


