import React from "react";
import HealthBar from "../HealthBar";
import { useSelector } from "react-redux";

export default function Foe() {
  let darkMode = useSelector((store) => store.darkMode.mode);
  let foePokemon = useSelector(
    (store) => store.foe.currPokemon.pokemon.pokemon
  );
  let HP = useSelector((store) => store.foe.currPokemon.hp);

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
