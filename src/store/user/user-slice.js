import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  name: "",
  desc: "description",
  level: 4,
  points: [],
  isAdmin:false
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setIdentity(state, user) {
      state.name = user.ame;
      state.email = user.email;
    },

    setExtraInfo(state, desc, level) {
      state.desc = desc;
      state.level = level;
    },

    setPointsByIndex(state, index, points) {
      state.points[index] = points;
    },

    setPoints(state, points) {
      state.points = points;
    },

    clearPoints(state, points) {
      state.points = [];
    },

    setIsAdmin(state){
      state.isAdmin = true;
    }
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
