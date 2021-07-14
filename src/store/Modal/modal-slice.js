import { createSlice } from "@reduxjs/toolkit";

const INITIALSTATEMODAL = { opened: false };

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: INITIALSTATEMODAL,
  reducers: {
    toggleModal(state) {
      state.opened = !state.opened;
    },
    open(state) {
      state.opened = true;
    },

    close(state) {
      state.opened = false;
    },
  },
});

export default modalSlice.reducer;

export const modalActions = modalSlice.actions;
