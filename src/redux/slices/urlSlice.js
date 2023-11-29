import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  urlInfo: localStorage.getItem("urlInfo")
    ? JSON.parse(localStorage.getItem("urlInfo"))
    : null,
};

const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    setUrlInfo: (state, action) => {
      state.urlInfo = action.payload;
      localStorage.setItem("urlInfo", JSON.stringify(action.payload));
    },
    removeUrlInfo: (state, action) => {
      state.urlInfo = null;
      localStorage.removeItem("urlInfo");
    },
  },
});

export const { setUrlInfo, removeUrlInfo } = urlSlice.actions;

export default urlSlice.reducer;
