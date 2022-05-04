import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import counterReducer from '@src/redux/counterSlice';
import kanyeReducer from '@src/redux/kanyeSlice';
import appReducer from '@src/redux/appSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kanyeQuote: kanyeReducer,
    app: appReducer
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