import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getComments } from '../../api/commets';
import { OneComment } from '../../types/OneComment';

export interface CommentsState {
  items: OneComment[][];
  loaded: boolean;
  hasError: string;
}

const initialState: CommentsState = {
  items: [],
  loaded: false,
  hasError: '',
};

export const initActiveCommentsList = createAsyncThunk(
  'comments/fetch',
  async (ids: string[]) => {
    try {
      const fetchedProducts = await Promise.all(
        ids.map(id => getComments(id))
      );
      return fetchedProducts;
    } catch (error) {

      throw new Error('unable to download comments');
    }
  }
);

const activeCommentsListSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initActiveCommentsList.pending, (state) => {
      state.loaded = false;
    });

    builder.addCase(initActiveCommentsList.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loaded = true;
    });

    builder.addCase(initActiveCommentsList.rejected, (state) => {
      state.hasError = 'unable to download comments';
      state.loaded = true;
    });
  },
});

export default activeCommentsListSlice.reducer;
