"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";

export default function ProvideTheme({ children }) {
  const theme = useSelector((s) => s.darkMode.mode);
  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}
