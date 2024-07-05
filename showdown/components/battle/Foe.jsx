import React from "react";
import HealthBar from "./HealthBar.jsx";
import { useSelector } from "react-redux";

export default function Foe({ mode }) {
  let darkMode = useSelector((store) => store.darkMode.mode);
  let foePokemon;
  let HP;
  if (mode === "ou") {
    foePokemon = useSelector(
      (store) => store.foe.currPokemon.pokemon.pokemon
    );
    HP = useSelector((store) => store.foe.currPokemon.hp);
  }

  return (
    <>
      <div className="render-pokemon foe-pokemon">
        <div
          className={
            darkMode === "light"
              ? "pokemon-details-container pokemon-details-patch"
              : "pokemon-details-container"
          }
        >
          <p className="pokemon-details">Lvl: {foePokemon?.level}</p>
          <p className="pokemon-details">{foePokemon?.name}</p>
        </div>
        <HealthBar HP={HP} />
      </div>
      <img
        src={foePokemon?.img}
        className="render-pokemon foe-pokemon"
        alt="Foe's pokemon"
      />
    </>
  );
}
