import { createSlice } from "@reduxjs/toolkit";
import player from "../initialState/playerInit";
import { currPokemonReducer } from "../reducers/currPokemonReducer";
import { setUserNameReducer } from "../reducers/setUserNameReducer";
import { loginStatusReducer } from "../reducers/loginStatusReducer";

const playerSlice = createSlice({
  name: "player",
  initialState: player,
  reducers: {
    changePokemon: currPokemonReducer,
    setUserName: setUserNameReducer,
    setLoginStatus: loginStatusReducer,
  },
});

export const { changePokemon, setUserName, setLoginStatus } =
  playerSlice.actions;
export default playerSlice.reducer;
