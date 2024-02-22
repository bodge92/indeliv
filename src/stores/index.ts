import {configureStore} from '@reduxjs/toolkit';
import authTokenSlice, {resetToken} from './slices/authTokenSlice';
import userSlice, {resetUser} from './slices/userSlice';
import searchSlice from "@/stores/slices/searchSlice";

export const store = configureStore({
    reducer: {
        authToken: authTokenSlice,
        user: userSlice,
        search: searchSlice,
    },
});

export const resetState = () => (dispatch: AppDispatch) => {
    dispatch(resetToken());
    dispatch(resetUser());
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
