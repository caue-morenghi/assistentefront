import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Create } from "@mui/icons-material";
import { EditForm } from "./EditForm";
import { useTheme } from "@mui/material";
import { IUsuarioEditado } from "../../../types/users";

export default function EditModal({ usuario }: IUsuarioEditado) {

  const theme = useTheme()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: theme.palette.background.paper,
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Create sx={{ cursor: "pointer" }} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography color={theme.palette.primary.contrastText} id="modal-modal-title" variant="h6" component="h2">
            {usuario.status === 1 
            ? 
              <span>{usuario.username}: <span style={{ fontWeight: 'bold', color: '#26961c' }}>Ativo</ span></span>
            :
              <span>{usuario.username}: <span style={{ fontWeight: 'bold', color: '#aa1818' }}>Inativo</ span></span>
            }
          </Typography>
          <EditForm usuario={usuario} />
        </Box>
      </Modal>
    </div>
  );
}
