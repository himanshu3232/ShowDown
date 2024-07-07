import { pokemon } from "../../pokemon/ou/pokemon.js";

const currentPokemonName = "Charmander";
const anotherPokemonName = "Bulbasaur";

let playerPokemon = pokemon.filter(
  (p) => p.name.toLowerCase() === currentPokemonName?.toLowerCase()
)[0];

let anotherPokemon = pokemon.filter(
  (p) => p.name.toLowerCase() === anotherPokemonName?.toLowerCase()
)[0];

let playerTeam = [
  {
    pokemon: playerPokemon,
    status: "",
    hp: 100,
  },
  {
    pokemon: playerPokemon,
    status: "",
    hp: 100,
  },
  {
    pokemon: playerPokemon,
    status: "",
    hp: 100,
  },
  {
    pokemon: playerPokemon,
    status: "",
    hp: 100,
  },
  {
    pokemon: playerPokemon,
    status: "",
    hp: 100,
  },
  {
    pokemon: anotherPokemon,
    status: "",
    hp: 100,
  },
];

const player = {
  name: "Choose Name",
  team: playerTeam,
  loginStatus: false,
  currPokemon: {
    pokemon: playerTeam[0],
    hp: playerTeam[0].hp,
    attack: 100,
    spAttack: 100,
    spDefense: 100,
    defense: 100,
    speed: 100,
    status: "",
  },
  customTeam: [],
};

export default player;
