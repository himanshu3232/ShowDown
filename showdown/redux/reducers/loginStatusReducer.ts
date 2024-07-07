import { PayloadAction } from "@reduxjs/toolkit";

export const loginStatusReducer = (
  state: { loginStatus: boolean; name: string },
  action: PayloadAction<boolean>
) => {
  state.loginStatus = action.payload;
  if (!action.payload) {
    state.name = "Choose Name";
  }
};
