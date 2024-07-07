"use client";

import React, { useEffect, useState } from "react";
import Foe from "./Foe";
import Player from "./Player";
import RenderAttacks from "../RenderAttacks";
import GameOver from "./GameOver";
import { fetchData } from "@/app/randomBattle/fetchData";
import CircularProgressBar from "../../CircularProgressBar";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function RandomBattleContainer() {
  const [playerHP, setPlayerHP] = useState(0);
  const [foeHP, setFoeHP] = useState(0);
  const [data, setData] = useState(null);
  const pokemon = useSelector((s) => s.randomBattlePokemon);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData({ initiate: true, pokemon: pokemon });
      setData(result);
      setPlayerHP(result.p1.hp);
      setFoeHP(result.p2.hp);
    };

    getData();
  }, [pokemon]);

  if (!data) {
    return (
      <>
        <Box sx={{ mt: "38vh", maxWidth: "2rem", ml: "auto", mr: "auto" }}>
          <CircularProgressBar />
        </Box>
      </>
    );
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
