import {
    Box,
  } from "@mui/material";
  import { Header } from "../layout/header/Header";
  import { useAuth } from "../contexts/AuthContext";
  import MenuAdmin from "../components/usuarios/menu-admin/MenuAdmin";
import { TabelaInativos } from "../components/usuarios/TabelaInativos";
import { Navigate, useLocation } from "react-router-dom";
  
  export const UsuariosInativos = () => {
  
    const { user } = useAuth()
    const location = useLocation()
  
    return (
      <>
        {user?.status === 1
          ?
            user?.perfil === 1
              ?
                <Box minHeight="100vh">
                  <Header icon="person" text="Página de Usuários Inativos" newUser={<MenuAdmin />}/>
                  <TabelaInativos />
                </Box>
              :
                <Navigate to="/login" state={{ from: location }} replace/>
          :
            <Navigate to="/reativacao" state={{ from: location }} replace/>
        }
      </>
    );
  };