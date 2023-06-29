import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EndPoint } from '../../types/EndPoint';

const initialState = EndPoint.CATALOG;

const endPointSlise = createSlice({
  name: 'endPoint',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<EndPoint>) => {

      return action.payload;
    }
  },
});

export default endPointSlise.reducer;
export const { set } = endPointSlise.actions;
