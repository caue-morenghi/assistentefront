import {
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import { CampoRegistro } from "../../register/CampoRegistro";
import FEditForm from "../../../hooks/editForm";
import {
  editAcaoUsusario,
  editById,
} from "../../../services/api/usuarios/UsuariosService";
import { IEditUsuarioProps, IUsuarioEditado } from "../../../types/users";
import { useAuth } from "../../../contexts/AuthContext";
import { useCallback, useEffect, useState } from "react";

export const EditForm = ({ usuario }: IUsuarioEditado) => {
  const { register, handleSubmit, errors, setValue } = FEditForm();

  const [perfil, setperfil] = useState("");
  const handleChangePerfil = (event: SelectChangeEvent) => {
    setperfil(event.target.value as string);
  };
  const [status, setstatus] = useState("");
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setstatus(event.target.value as string);
  };


  const handleSetData = useCallback((usuario: IEditUsuarioProps) => {
    setValue("username", usuario.username);
    setValue("email", usuario.email);
    setValue("perfil", usuario.perfil)
    setValue("status", usuario.status)
    if((usuario.perfil === 0 || usuario.perfil === 1) && (usuario.status === 0 || usuario.status === 1)) {
      setperfil(usuario?.perfil.toString())
      setstatus(usuario?.status.toString())
    }
  }, []);

  useEffect(() => {
    handleSetData(usuario)
  }, [handleSetData, usuario]);

  const theme = useTheme();

  const { user, logout, token } = useAuth();

  const editFunction = async (data: IEditUsuarioProps) => {
    const formattedData = { ...data, id: usuario.id };
    await editById(token, formattedData);
    await editAcaoUsusario(token, {
      feito_por: user?.id,
      descricao: `Edição do usuário ${usuario.username}`,
    });
    if (usuario.id === user?.id) {
      logout();
    }
  };  

  return (
    <form
      style={{
        backgroundColor: `${theme.palette.background.paper}`,
        padding: "1em",
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit(editFunction)}
    >
      <CampoRegistro>
        <InputLabel>Nome de usuário</InputLabel>
        <Input
          sx={{
            backgroundColor: "transparent",
            border: "none",
            borderBottom: "1px solid",
            outline: "none",
            color: theme.palette.primary.contrastText,
            padding: ".8em",
            fontFamily: "'Montserrat', sans-serif",
          }}
          {...register("username")}
        />
        {errors.username && (
          <span style={{ color: "#de3333" }}>{errors.username.message}</span>
        )}
      </CampoRegistro>

      <CampoRegistro>
        <InputLabel>Email</InputLabel>
        <Input
          sx={{
            backgroundColor: "transparent",
            border: "none",
            borderBottom: "1px solid",
            outline: "none",
            color: theme.palette.primary.contrastText,
            padding: ".8em",
            fontFamily: "'Montserrat', sans-serif",
          }}
          {...register("email")}
        />
        {errors.email && (
          <span style={{ color: "#de3333" }}>{errors.email.message}</span>
        )}
      </CampoRegistro>

      <CampoRegistro>
        <InputLabel>Perfil</InputLabel>
        <Select
          {...register("perfil")}
          value={perfil}
          onChange={(e) => handleChangePerfil(e)}
        >
          <MenuItem value={1}>Admin</MenuItem>
          <MenuItem value={0}>Padrão</MenuItem>
        </Select>
      </CampoRegistro>

      <CampoRegistro>
        <InputLabel>Status</InputLabel>
        <Select
          {...register("status")}
          value={status}
          onChange={(e) => handleChangeStatus(e)}
        >
          <MenuItem value={1}>Ativo</MenuItem>
          <MenuItem value={0}>Inativo</MenuItem>
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
          textTransform: "uppercase",
        }}
      >
        Alterar
      </button>
    </form>
  );
};
