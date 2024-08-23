import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TabelaMedidas } from "./TabelaMedidas";
import { useTheme } from "@mui/material";

const style = {
  width: '80vw',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function ModalMedidas() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme()

  return (
    <div>
      <Button sx={{ color: theme.palette.primary.contrastText, outline: theme.palette.primary.contrastText, border: '.5px solid',borderColor: theme.palette.primary.contrastText }} onClick={handleOpen}>Visualizar histórico de medidas</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <TabelaMedidas />
        </Box>
      </Modal>
    </div>
  );
}
