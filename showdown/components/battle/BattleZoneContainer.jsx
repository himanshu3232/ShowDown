"use client";

import React from "react";
import RenderPokemon from "./RenderPokemon";
import RenderAttacks from "./RenderAttacks";
import RenderTeam from "./RenderTeam";

export default function BattleZoneContainer() {
  return (
    <>
      <div className="bg-img">
        <RenderPokemon />
      </div>
      <RenderAttacks />
      <RenderTeam />
    </>
  );
}
