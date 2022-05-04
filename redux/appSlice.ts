import {
  createSlice,
} from '@reduxjs/toolkit';
import type { RootState } from '@src/app/store';

// declaring the types for our state
interface Icurrency {
  type: string
  total: string
  vnd: string
}
export type appState = {
  loggedIn: boolean
  name: string
  accountNumber: string
  currency: Array<Icurrency>
  totalMoney: Icurrency
};

const initialState: appState = {
  loggedIn: false,
  name: 'Ronin Wallet',
  accountNumber: '7300 3777 3888 3334',
  currency: [
    { type: 'Euro', total: '50 EUR', vnd: '1,531,972 VND' },
    { type: 'Yen', total: '10,000 YEN', vnd: '2,103,317 VND' }
  ],
  totalMoney: {
    type: 'Total', total: '1,000 USD', vnd: '23,046,000 VND'
  }
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
export const getCurrency = (state: RootState) => state.app.currency;
export const getTotalMoney = (state: RootState) => state.app.totalMoney;
export const getAccountNumber = (state: RootState) => state.app.accountNumber;

export default appSlice.reducer;