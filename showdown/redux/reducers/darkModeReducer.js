export const darkModeReducer = (state, action) => {
  if (state.mode === "dark") {
    state.mode = "light";
  } else {
    state.mode = "dark";
  }
};
