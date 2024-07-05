import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const modes = ["Random Battle", "OU Gen1"];

function getStyles(name, mode, theme) {
  return {
    fontWeight:
      mode.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({ mode, setMode }) {
  const theme = useTheme();
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <>
      <FormControl className="multiple-select" sx={{ m: 1 }}>
        <InputLabel id="demo-multiple-name-label">Mode</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={mode}
          onChange={handleChange}
          input={<OutlinedInput label="Mode" />}
          MenuProps={MenuProps}
        >
          {modes.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, mode, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
