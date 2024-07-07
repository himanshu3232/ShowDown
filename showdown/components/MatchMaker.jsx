"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SelectMode from "./SelectMode";
import Link from "next/link";
import { useSelector } from "react-redux";
import pokemonList from "../pokemon/random_battle/fetchPokemon.js";
import ChoosePokemon from "./ChoosePokemon";

export default function MatchMaker() {
  let theme = useSelector((store) => store.darkMode.mode);
  const [mode, setMode] = React.useState("");
  const [pokemon, setPokemon] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const result = await pokemonList();
      const arr = result.split("\n");
      setPokemon(arr);
    };
    getData();
  }, []);
  return (
    <>
      {mode === "Random Battle" && <ChoosePokemon pokemon={pokemon} />}
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: theme === "light" ? "#cfe8fc" : "transparent",
            height: "50vh",
            mt: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "10px",
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box sx={{ ml: "auto", mr: "auto" }}>
            <SelectMode mode={mode} setMode={setMode} />
          </Box>
          <Button
            sx={{
              maxWidth: "10rem",
              maxHeight: "5rem",
              ml: "auto",
              mr: "auto",
              mt: "1rem",
            }}
            variant="outlined"
          >
            <Link
              href={
                mode === "Random Battle"
                  ? "/randomBattle"
                  : mode === "OU Gen-1"
                  ? "/battle"
                  : "/"
              }
            >
              Start Battle!
            </Link>
          </Button>
        </Box>
      </Container>
    </>
  );
}
