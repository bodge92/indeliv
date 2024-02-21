import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  avatar: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  avatar: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const { name, email, avatar } = action.payload;
      state.name = name;
      state.email = email;
      state.avatar = avatar;
    },
    resetUser: (state) => {
      state.name = '';
      state.email = '';
      state.avatar = '';
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
