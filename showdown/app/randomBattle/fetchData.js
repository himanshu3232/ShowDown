"use server";

import axios from "axios";
import FormData from "form-data";

export const fetchData = async ({ initiate, guid, pid, movename, pokemon }) => {
  const formData = new FormData();
  if (initiate) {
    formData.append("mypokemon", pokemon);
    formData.append("startgame", "true");
  } else {
    formData.append("guid", guid);
    formData.append("pid", pid);
    formData.append("movename", movename);
  }

  const url =
    "https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/game.php";

  try {
    const response = await axios.post(url, formData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
