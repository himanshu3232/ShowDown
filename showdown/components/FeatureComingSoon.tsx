"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Link from "next/link";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function FeatureComingSoon() {
  const [open, setOpen] = React.useState<boolean>(true);
  const handleClose = () => setOpen(true);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Stay Tuned!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Feature Coming Soon!
          </Typography>
          <Button sx={{ mt: 2 }} variant="outlined">
            <Link href={"/"}>Return Home</Link>
          </Button>
        </Box>
      </Modal>
    </>
  );
}
