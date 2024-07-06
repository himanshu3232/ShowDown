"use client";

import React, { useEffect, useState } from "react";
import Foe from "./Foe";
import Player from "./Player";
import RenderAttacks from "../RenderAttacks";
import GameOver from "./GameOver";
import { fetchData } from "@/app/randomBattle/fetchData";

export default function RandomBattleContainer() {
  const [playerHP, setPlayerHP] = useState(0);
  const [foeHP, setFoeHP] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData({ initiate: true });
      setData(result);
      setPlayerHP(result.p1.hp);
      setFoeHP(result.p2.hp);
    };
    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {(foeHP === 0 || playerHP === 0) && (
        <GameOver result={foeHP === 0 ? "Win" : "Lose"} />
      )}
      <div className="bg-img">
        <div className="pokemon-container">
          <Foe data={data?.p2} foeHP={foeHP} />
          <Player data={data?.p1} playerHP={playerHP} />
        </div>
      </div>
      <RenderAttacks
        attacks={data?.p1.moves}
        guid={data?.guid}
        pid={data?.pid}
        mode={"random"}
        setPlayerHP={setPlayerHP}
        setFoeHP={setFoeHP}
      />
    </>
  );
}
