import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { setPokemon } from "@/redux/slices/randomBattlePokemon";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function ListPokemon({ pokemon }: { pokemon: string[] }) {
  const [selectedPokemon, setSelectedPokemon] = React.useState("");
  const dispatch: any = useDispatch();
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    const newPokemon = event.target.value as string;
    setSelectedPokemon(newPokemon);
    dispatch(setPokemon(newPokemon));
    router.push(`/randomBattle`);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose Pokemon</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedPokemon}
          label="Choose Pokemon"
          onChange={handleChange}
        >
          {pokemon.map((p) => (
            <MenuItem key={p} value={p.split(":")[1]}>
              {p.split(":")[0]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
