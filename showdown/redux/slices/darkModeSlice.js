import { createSlice } from "@reduxjs/toolkit";
import data from "../initialState/darkModeInit";
import { darkModeReducer } from "../reducers/darkModeReducer";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: data,
  reducers: {
    setMode: darkModeReducer,
  },
});

export const {setMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;