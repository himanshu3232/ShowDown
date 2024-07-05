import RandomBattleContainer from "../../components/battle/randomBattle/RandomBattleContainer";
import React from 'react';
import axios from 'axios';
import FormData from 'form-data';

export const fetchData = async () => {
  const formData = new FormData();
  formData.append('mypokemon', 'pikachu');
  formData.append('startgame', 'true'); 

  const url = 'https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/game.php';

  try {
    const response = await axios.post(url, formData, {
      headers: {
        ...formData.getHeaders(), 
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default async function page() {
  const data = await fetchData();
  return (
    <>
      <RandomBattleContainer/>
    </>
  );
}


