import { createSlice } from "@reduxjs/toolkit";

const initialState = 'pikachu';

const randomBattlePokemon = createSlice({
  name: "randomBattlePokemon",
  initialState,
  reducers: {
    setPokemon(_, action) {
      return action.payload;
    },
  },
});

export const { setPokemon } = randomBattlePokemon.actions;
export default randomBattlePokemon.reducer;
