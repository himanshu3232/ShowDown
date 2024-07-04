import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { changePokemon } from "../../redux/slices/playerSlice";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RenderTeam() {
  const { team } = useSelector((store) => store.player);
  const dispatch = useDispatch();
  function handleChangePokemon({ pokemon }) {
    dispatch(changePokemon(pokemon));
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "28rem",
        ml: "auto",
        mr: "auto",
      }}
    >
      <Typography
        sx={{ fontSize: "10px", ml: 2 }}
        variant="overline"
        display="block"
        gutterBottom
      >
        Switch
      </Typography>
      <Grid container spacing={2}>
        {team?.map((pokemon, index) => (
          <Grid
            key={index}
            item
            xs={4}
            md={4}
            onClick={() => handleChangePokemon(pokemon)}
          >
            <Item xs={6} md={8} sx={{ cursor: "pointer" }}>
              <Button variant="text">
                <div className="flex flex-col justify-center">
                  <img className="display-pokemon" src={pokemon.pokemon.img} />
                  <p className="pokemon-details">{pokemon.pokemon.name}</p>
                </div>
              </Button>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
