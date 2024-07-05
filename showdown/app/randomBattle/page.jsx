import React from "react";
import RandomBattleContainer from "../../components/battle/randomBattle/RandomBattleContainer";
import {fetchData} from "./fetchData.js";

export default async function page() {
  const data = await fetchData({ initiate: true });
  return (
    <>
      <RandomBattleContainer data={data} />
    </>
  );
}
