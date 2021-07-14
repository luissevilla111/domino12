import { createSlice } from "@reduxjs/toolkit";
const tokenStorage = localStorage.getItem("token");
const INITIALSTATE = {
  token: tokenStorage,
  isLogged: tokenStorage ? true : false,
};
const authSlice = createSlice({
  name: "authslice",
  initialState: INITIALSTATE,
  reducers: {
    login(state, token) {
      state.token = token;
      state.isLogged = true;
    },
    logout(state) {
      state.token = "";
      state.isLogged = false;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
