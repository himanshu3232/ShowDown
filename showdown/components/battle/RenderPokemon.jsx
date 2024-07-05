import React from "react";
import Foe from "./Foe";
import Player from "./Player";

export default function RenderPokemon() {
  return (
    <div className="pokemon-container">
      <Foe mode={'ou'}/>
      <Player mode={'ou'}/>
    </div>
  );
}
