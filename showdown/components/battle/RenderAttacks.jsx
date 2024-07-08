import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { fetchData } from "@/app/randomBattle/fetchData.js";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RenderAttacks({
  attacks,
  guid,
  pid,
  mode,
  setFoeHP,
  setPlayerHP,
  setResult,
}) {
  const ouModeAttacks = useSelector(
    (store) => store.player.currPokemon.pokemon.pokemon.attacks
  );
  const renderAttacks = attacks ? attacks : ouModeAttacks;
  const handleAttack = async (attack) => {
    if (mode === "random") {
      const res = await fetchData({
        initiate: false,
        guid: guid,
        pid: pid,
        movename: attack.name,
      });
      await setFoeHP(res?.p2["current-hp"]);
      await setPlayerHP(res?.p1["current-hp"]);
      await setResult(res?.results);
    }
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: "1rem",
        maxWidth: "35rem",
        ml: "auto",
        mr: "auto",
      }}
    >
      <Grid container spacing={2}>
        {renderAttacks?.map((attack) => (
          <Grid
            key={attack.name}
            item
            xs={6}
            md={6}
            onClick={() => handleAttack(attack)}
          >
            <Item xs={6} md={8} sx={{ cursor: "pointer" }}>
              <Button variant="text">{attack.name}</Button>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
