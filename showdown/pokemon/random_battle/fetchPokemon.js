"use server";

import axios from "axios";

const pokemonList = async () => {
  const res = await axios
    .get(
      "https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokedex=all"
    )
    .catch((err) => console.error(err));
  return res.data;
};

export default pokemonList;
