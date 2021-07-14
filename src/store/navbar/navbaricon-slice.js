import { createSlice } from "@reduxjs/toolkit";

const INITIALSTATEMODAL = { opened: false };

const navBarSlice = createSlice({
  name: "navBarSlice",
  initialState: INITIALSTATEMODAL,
  reducers: {
    toggle(state) {
      state.opened = !state.opened;
    },
  },
});

export default navBarSlice.reducer;

export const navBarSiteActions = navBarSlice.actions;
