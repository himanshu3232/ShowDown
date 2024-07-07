import { pokemon } from "../../pokemon/ou/pokemon.js";

const foePokemonName = "Bulbasaur";
const currPokemon = pokemon.filter(
  (p) => p.name.toLowerCase() === foePokemonName?.toLowerCase()
)[0];

const foeTeam = [
  {
    pokemon: currPokemon,
    status: "",
    hp: "100",
  },
  {
    pokemon: currPokemon,
    status: "",
    hp: "100",
  },
  {
    pokemon: currPokemon,
    status: "",
    hp: "100",
  },
  {
    pokemon: currPokemon,
    status: "",
    hp: "100",
  },
  {
    pokemon: currPokemon,
    status: "",
    hp: "100",
  },
  {
    pokemon: currPokemon,
    status: "",
    hp: "100",
  },
];

const foe = {
  name: "",
  team: foeTeam,
  currPokemon: {
    pokemon: foeTeam[0],
    hp: foeTeam[0].hp,
    status: "",
  },
};

export default foe;
