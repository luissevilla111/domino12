import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import modalSlice from "./Modal/modal-slice";
import navbariconSlice from "./navbar/navbaricon-slice";
import userSlice from "./user/user-slice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    navbarSite: navbariconSlice,
    auth: authSlice,
    userInfo: userSlice,
  },
});

export default store;
