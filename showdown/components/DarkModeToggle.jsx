import React from "react";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../redux/slices/darkModeSlice";

export default function DarkModeToggle() {
  let theme = useSelector((store) => store.darkMode.mode);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setMode());
  };
  return (
    <>
      {theme === "dark" ? (
        <BrightnessLowIcon
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
      ) : (
        <BrightnessHighIcon
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
      )}
    </>
  );
}
