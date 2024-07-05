"use client";

import React from "react";
import Foe from "./Foe";
import Player from "./Player";

export default function RandomBattleContainer() {
  return (
    <div className="bg-img">
      <div className="pokemon-container">
        <Foe />
        <Player />
      </div>
    </div>
  );
}
