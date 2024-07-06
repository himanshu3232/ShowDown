import React from "react";
import HealthBar from "../HealthBar";
import { useSelector } from "react-redux";

export default function Foe({ data, foeHP }) {
  let darkMode = useSelector((store) => store.darkMode.mode);
  let pokemonName = data?.name;
  let hp = foeHP*100/data?.hp;
  let img = `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/${data?.shortname}.png`;

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
          <p className="pokemon-details">{pokemonName}</p>
        </div>
        <HealthBar HP={hp} />
      </div>
      <img
        src={img}
        className="render-pokemon foe-pokemon"
        alt="Foe's pokemon"
      />
    </>
  );
}
