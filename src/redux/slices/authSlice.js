import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    removeUserInfo: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      alert(`User LoggedOut`);
    },
  },
});

export const { setUserInfo, removeUserInfo } = authSlice.actions;

export default authSlice.reducer;
