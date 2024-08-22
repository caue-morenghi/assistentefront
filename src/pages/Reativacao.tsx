import { Box, Button, Typography } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Reativacao = () => {
  const { user, reativar } = useAuth();

  const navigate = useNavigate()

  const usuarioAativar = {
      id: user?.id,
      email: user?.email,
      username: user?.username,
      perfil: user?.perfil,
      status: 1
  }

  return (
    <Box
      height="100vh"
      bgcolor="#acc2ef"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        padding={5}
        bgcolor="#fff"
        display="flex"
        textAlign="center"
        justifyContent="center"
        flexDirection="column"
        borderRadius={5}
      >
        <Typography variant="h5" component='h5' fontWeight={600}>
          Olá, {user?.username}! Deseja reativar a sua conta?
        </Typography>
        <Box marginTop={3} display='flex' alignItems='center' justifyContent='center' gap={4}>
          <Button onClick={() => reativar(usuarioAativar)} sx={{ color: "#fff" }} variant="contained">
            Reativar
          </Button>
          <Button onClick={() => navigate('/login')} sx={{ color: "#fff" }} variant="contained">
            Não Reativar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
