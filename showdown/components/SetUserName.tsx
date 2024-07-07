import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUserName } from "@/redux/slices/playerSlice";

const style = {
  position: "absolute" as "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function SetUserName({
  setOpen,
  open,
}: {
  open: boolean;
  setOpen: any;
}) {
  const [username, setName] = React.useState("");
  const dispatch = useDispatch();
  const handleClose = () => setOpen(false);
  const handleSetUserName = () => {
    if (username.length === 0) {
      alert("Username cannot be empty");
      return;
    } else if (username.length === 21) {
      alert("Username cannot exceed 20 characters");
      return;
    }
    setOpen(false);
    dispatch(setUserName(username));
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            onChange={(e) => setName(e.target.value.trim())}
            id="outlined-basic"
            label="Choose Name"
            variant="outlined"
          />
          <Button sx={{ mt: "1rem" }} onClick={handleSetUserName}>
            Set Name
          </Button>
        </Box>
      </Modal>
    </>
  );
}
