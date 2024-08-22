import { Input, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import FRegisterForm from "../../hooks/registerForm";
import { CampoRegistro } from "./CampoRegistro";
import { createUsuario, editAcaoUsusario } from "../../services/api/usuarios/UsuariosService";
import GeralFunctions from "../../utils/GeralFunctions";
import { ICadastroUsuarioProps } from "../../types/users";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

export const RegisterForm = () => {
  const { register, handleSubmit, errors } = FRegisterForm();
  const { navigate } = GeralFunctions()
  const { token, user } = useAuth()

  const registerFunction = async (data: ICadastroUsuarioProps) => {
    const res = await createUsuario(data, token)
    console.log(res)
    await editAcaoUsusario(token, {
      feito_por: user?.id,
      descricao: `Registro do usuário ${data.username}`
    })
    navigate('/login')
  }

  const [perfil, setperfil] = useState("");
  const handleChangePerfil = (event: SelectChangeEvent) => {
    setperfil(event.target.value as string);
  };

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
      onSubmit={handleSubmit(registerFunction)}
    >
      <Typography
        textAlign="center"
        variant="h4"
        fontWeight={700}
        sx={{ marginBottom: ".5em" }}
      >
        NOVO USUÁRIO
      </Typography>
      <Typography
        textAlign="center"
        variant="h5"
        fontWeight={600}
        sx={{ marginBottom: "1em" }}
      >
        REGISTRE-SE
      </Typography>

      <CampoRegistro>
        <InputLabel>Nome de usuário</InputLabel>
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
          {...register("username")}
          placeholder="Escolha um nome de usuário"
        />
      </CampoRegistro>

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
          placeholder="Escolha um email"
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
          placeholder="Escolha uma senha"
          type="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </CampoRegistro>

      <CampoRegistro>
        <InputLabel>Perfil</InputLabel>
        <Select {...register("perfil")} value={perfil} onChange={handleChangePerfil}>
          <MenuItem value={1}>Admin</MenuItem>
          <MenuItem value={0}>Padrão</MenuItem>
        </Select>
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
