import React from "react";
import HealthBar from "../HealthBar";
import { useSelector } from "react-redux";

export default function Player({ data, playerHP }) {
  let pokemon = data?.name;
  let hp = playerHP*100/data?.hp;
  let img = `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/sprites/${data?.shortname}.png`;

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
          <p className="pokemon-details">{pokemon}</p>
        </div>
        <HealthBar HP={hp} />
      </div>
      <img
        src={img}
        className="render-pokemon player-pokemon"
        alt="Player's Pokemon"
      />
    </>
  );
}
