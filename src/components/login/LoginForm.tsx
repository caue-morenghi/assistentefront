import { Input, InputLabel, Typography } from "@mui/material";
import { CampoRegistro } from "../register/CampoRegistro";
import FLoginForm from "../../hooks/loginForm";
import { useAuth } from "../../contexts/AuthContext";

export const LoginForm = () => {
  const { register, handleSubmit, errors } = FLoginForm();
  const { login } = useAuth()

  return (
    <form
      style={{
        backgroundColor: "#fff",
        padding: "2em",
        borderRadius: "15px",
        width: "30%",
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit(login)}
    >
      <Typography
        textAlign="center"
        variant="h4"
        fontWeight={700}
        sx={{ marginBottom: ".5em" }}
      >
        LOGIN
      </Typography>
      <Typography
        textAlign="center"
        variant="h5"
        fontWeight={600}
        sx={{ marginBottom: "1em" }}
      >
        ENTRAR
      </Typography>

      <CampoRegistro>
        <InputLabel>Email</InputLabel>
        <Input
          sx={{
            backgroundColor: "transparent",
            border: "none",
            borderBottom: "1px solid",
            outline: "none",
            color: "#6C6C6C",
            padding: ".8em",
            fontFamily: "'Montserrat', sans-serif",
          }}
          {...register("email")}
          placeholder="Digite seu email"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </CampoRegistro>

      <CampoRegistro>
        <InputLabel>Senha</InputLabel>
        <Input
          sx={{
            backgroundColor: "transparent",
            border: "none",
            borderBottom: "1px solid",
            outline: "none",
            color: "#6C6C6C",
            padding: ".8em",
            fontFamily: "'Montserrat', sans-serif",
          }}
          {...register("password")}
          placeholder="Digite sua senha"
          type="password"
        />
      </CampoRegistro>

      <button
        style={{
          color: "#fff",
          padding: "1em",
          backgroundColor: "#acc2ef",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontFamily: "'Montserrat', sans-serif",
          textTransform: 'uppercase'
        }}
      >Registrar</button>
    </form>
  );
};
