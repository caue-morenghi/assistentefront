import { Box } from "@mui/material";
import { LoginForm } from "../components/login/LoginForm";

export const Login = () => {
  return (
    <Box width="100%" minHeight="100vh" bgcolor="#acc2ef" display="flex" alignItems="center" justifyContent="center">
      <LoginForm />
    </Box>
  );
};
