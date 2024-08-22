import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, Icon, List, ListItemButton, ListItemText, useTheme } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModalUser() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme()
  const { user, logout } = useAuth()

  function stringAvatar(name: string) {
    return {
      children: `${name.split(" ")[0][0]}`,
    };
  }

  return (
    <div>
      <Avatar
        onClick={handleOpen}
        {...stringAvatar(`${user?.username}`)}
        sx={{
          height: theme.spacing(12),
          width: theme.spacing(12),
          fontSize: "2em",
          cursor: 'pointer'
        }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography color={theme.palette.primary.contrastText} id="modal-modal-title" variant="h6" component="h2" display='flex' alignItems='center' gap={1}>
            <Icon>person</Icon>{user?.username}
          </Typography>
          <List component='nav'>
            <ListItemButton onClick={logout} sx={{ color: theme.palette.primary.contrastText, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Icon>logout</Icon>
                <ListItemText>Sair</ListItemText>
            </ListItemButton>
          </List>
        </Box>
      </Modal>
    </div>
  );
}
