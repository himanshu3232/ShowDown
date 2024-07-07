export const currPokemonReducer = (state, action ) => {
  state.currPokemon.pokemon.pokemon = action.payload;
};
