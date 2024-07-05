"use client";

import React from "react";
import Foe from "./Foe";
import Player from "./Player";
import RenderAttacks from "../RenderAttacks";
import GameOver from "./GameOver";

export default function RandomBattleContainer({ data }) {
  const [playerHP, setPlayerHP] = React.useState(data?.p1.hp);
  const [foeHP, setFoeHP] = React.useState(data?.p2.hp);
  return (
    <>
      {(foeHP === 0 || setFoeHP === 0) && <GameOver result={foeHP === 0 ? "Win" : "Lose"}/>}
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
