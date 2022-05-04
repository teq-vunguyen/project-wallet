import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '@src/app/store';

// declaring the types for our state
export type appState = {
  loggedIn: boolean
  name: string
  accountNumber: string
};

const initialState: appState = {
  loggedIn: true,
  name: 'Ronin Wallet',
  accountNumber: '7300 3777 3888 3334'
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLogged: (state) => {
      state.loggedIn = true;
    },
  },
});
export const {
  setLogged,
} = appSlice.actions;

export const getLoggedIn = (state: RootState) => state.app.loggedIn;
export const getUser = (state: RootState) => state.app.name;

export default appSlice.reducer;