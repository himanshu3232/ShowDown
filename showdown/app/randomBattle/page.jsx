import React from "react";
import RandomBattleContainer from "../../components/battle/randomBattle/RandomBattleContainer";
import axios from "axios";
import FormData from "form-data";

export const fetchData = async ({ initiate, guid, pid, movename }) => {
  const formData = new FormData();
  if (initiate) {
    formData.append("mypokemon", "pikachu");
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

export default async function page() {
  const data = await fetchData({ initiate: true });

  return (
    <>
      <RandomBattleContainer data={data} />
    </>
  );
}
