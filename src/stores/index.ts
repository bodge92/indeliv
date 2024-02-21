import { configureStore } from '@reduxjs/toolkit';
import authTokenSlice, { resetToken } from './slices/authTokenSlice';
import userSlice, { resetUser } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    authToken: authTokenSlice,
    user: userSlice,
  },
});

export const resetState = () => (dispatch: AppDispatch) => {
  dispatch(resetToken());
  dispatch(resetUser());
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
