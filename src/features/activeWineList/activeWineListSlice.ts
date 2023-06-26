import { PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { Wine } from '../../types/Wine';
import { getCatalog } from '../../api/catalog';

export interface UsersState {
  items: Wine[];
  loaded: boolean;
  hasError: string;
}

const initialState: UsersState = {
  items: [],
  loaded: false,
  hasError: '',
};

export const initActiveWineList = createAsyncThunk('wines/fetch', () => {
  return getCatalog();
});

const activeWineListSlice = createSlice({
  name: 'wines',
  initialState,
  reducers: {
    clear: (state, action: PayloadAction<Wine[]>) => {
      state.items = action.payload;
    },
  },
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
export const { clear } = activeWineListSlice.actions;
