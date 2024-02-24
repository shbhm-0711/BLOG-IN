import { createSlice } from "@reduxjs/toolkit";

// intial state for app
const initialState = {
  status: false,
  userData: null,
  isDarkMode: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
    switchTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { login, logout, switchTheme } = authSlice.actions;

export default authSlice.reducer;
