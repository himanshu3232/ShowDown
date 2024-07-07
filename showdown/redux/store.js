import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slices/darkModeSlice";
import playerSlice from "./slices/playerSlice";
import foeSlice from "./slices/foeSlice";
import randomBattlePokemon from "./slices/randomBattlePokemon";

const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    player: playerSlice,
    foe: foeSlice,
    randomBattlePokemon: randomBattlePokemon,
  },
});

export default store;
