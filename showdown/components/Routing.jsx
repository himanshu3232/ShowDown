import React from "react";
import Home from './Home'
import { Route, Routes } from "react-router-dom";
import BattleZoneContainer from './battle/BattleZoneContainer';

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/battle" element={<BattleZoneContainer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
