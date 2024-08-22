import {
  Box,
} from "@mui/material";
import { TabelaUsuarios } from "../components/usuarios/TabelaUsuarios";
import { Header } from "../layout/header/Header";
import { useAuth } from "../contexts/AuthContext";
import MenuAdmin from "../components/usuarios/menu-admin/MenuAdmin";
import { Navigate, useLocation } from "react-router-dom";

export const Usuarios = () => {

  const { user } = useAuth()
  const location = useLocation()

  return (
    <>
      {user?.status === 1
        ?
          <Box minHeight="100vh">
            {user?.perfil === 1 
              ?
                <Header icon="person" text="Página de Usuários" newUser={<MenuAdmin />}/>
              :
                <Header icon="person" text="Página de Usuários" />
            }
            <TabelaUsuarios />
          </Box>
        :
            <Navigate to='/reativacao' state={{ from: location }} replace/>
      }
    </>
    
  );
};