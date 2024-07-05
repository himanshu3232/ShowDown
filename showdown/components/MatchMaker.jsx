"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MultipleSelect from "./MultipleSelect";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function MatchMaker() {
  let theme = useSelector((store) => store.darkMode.mode);
  const [mode, setMode] = React.useState([]);
  return (
    <>
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
            <MultipleSelect mode={mode} setMode= {setMode}/>
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
            <Link href={mode[0] === 'Random Battle' ? "/randomBattle" : mode[0] === 'OU Gen-1' ? "/battle" : '/'}>
              Start Battle!
            </Link>
          </Button>
        </Box>
      </Container>
    </>
  );
}
