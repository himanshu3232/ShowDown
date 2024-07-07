import { PayloadAction } from "@reduxjs/toolkit";

export const setUserNameReducer = (
  state: { name: string },
  action: PayloadAction<string>
) => {
  state.name = action.payload;
};
