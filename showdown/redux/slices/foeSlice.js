import { createSlice } from "@reduxjs/toolkit";
import foe from '../initialState/foeInit';

const foeSlice = createSlice({
  name: "foe",
  initialState: foe,
  reducers: {
    //Add in the future to modify team
  },
});

export const {} = foeSlice.actions;   //Add reducers names in here
export default foeSlice.reducer;