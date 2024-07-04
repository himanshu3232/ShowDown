import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slices/darkModeSlice";
import playerSlice from "./slices/playerSlice";
import foeSlice from "./slices/foeSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    player: playerSlice,
    foe: foeSlice,
  },
});

export default store;
