import { Box } from "@mui/material";
import { RegisterForm } from "../components/register/RegisterForm";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const Register = () => {

  const { user } = useAuth()
  const location = useLocation()

  return (
    <>
      {user?.status === 1
        ?
          user?.perfil === 1 
          ?
            <Box width="100%" minHeight="100vh" bgcolor="#acc2ef" display="flex" alignItems="center" justifyContent="center">
              <RegisterForm />
            </Box>
          :
            <Navigate to="/login" state={{ from: location }} replace/>
        :
          <Navigate to="/reativacao" state={{ from: location }} replace/>
      }
    </>
    
  );
};
