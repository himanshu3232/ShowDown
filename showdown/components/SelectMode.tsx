import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectMode({
  mode,
  setMode,
}: {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value);
  };
  const modes: string[] = ["Random Battle", "OU Gen-1"];

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Select Mode
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={mode}
          onChange={handleChange}
          label="Age"
        >
          {modes.map((m) => (
            <MenuItem key={m} value={m}>
              {m}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
