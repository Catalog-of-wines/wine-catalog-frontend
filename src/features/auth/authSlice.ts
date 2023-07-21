import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthUser } from '../../types/User';

const initialState = (): AuthUser | null => {
  try {
    const item = window.localStorage.getItem('auth');

    return item ? JSON.parse(item) : null;

  } catch {
    return null;
  }
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (_, action: PayloadAction<AuthUser>) => {
      window.localStorage.setItem('auth', JSON.stringify(action.payload));
      return action.payload;
    },
    removeUser: () => {
      window.localStorage.removeItem('auth');
      return null;
    }
  },
});

export default authSlise.reducer;
export const { addUser, removeUser } = authSlise.actions;
