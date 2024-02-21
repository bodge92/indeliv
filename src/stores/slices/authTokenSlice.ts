import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthTokenState {
  token: string;
  isExpired?: boolean;
}

const initialState: AuthTokenState = {
  token: 'xx',
  isExpired: false,
};

export const authTokenSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setExpired: (state) => {
      state.isExpired = true;
    },
    resetToken: (state) => {
      state.token = '';
      state.isExpired = false;
    },
  },
});

export const { setToken, setExpired, resetToken } = authTokenSlice.actions;
export default authTokenSlice.reducer;
