import React from "react";
import HealthBar from "./HealthBar.jsx";
import { useSelector } from "react-redux";

export default function Player() {
  const { pokemon, hp } = useSelector((store) => store.player.currPokemon.pokemon);
  let darkMode = useSelector((store) => store.darkMode.mode);
  return (
    <>
      <div className="render-pokemon player-pokemon">
        <div
          className={
            darkMode === "light"
              ? "pokemon-details-container pokemon-details-patch"
              : "pokemon-details-container"
          }
        >
          <p className="pokemon-details">Lvl: {pokemon.level}</p>
          <p className="pokemon-details">{pokemon.name}</p>
        </div>
        <HealthBar HP={hp} />
      </div>
      <img
        src={pokemon.img}
        className="render-pokemon player-pokemon"
        alt="Player's Pokemon"
      />
    </>
  );
}
