import { createSlice } from "@reduxjs/toolkit";
import player from "../initialState/playerInit";
import { currPokemonReducer } from "../reducers/currPokemonReducer";

const playerSlice = createSlice({
  name: "player",
  initialState: player,
  reducers: {
    changePokemon: currPokemonReducer,
  },
});

export const { changePokemon } = playerSlice.actions;
export default playerSlice.reducer;
