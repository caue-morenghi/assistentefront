import { TableCell, TableRow } from "@mui/material";
import { Delete } from "@mui/icons-material";
import EditModal from "./modal/EditModal";
import { deleteById, editAcaoUsusario } from "../../services/api/usuarios/UsuariosService";
import { IUsuarioProps } from "../../types/users";
import { useAuth } from "../../contexts/AuthContext";

export const Usuario = ({
  createdAt,
  email,
  updatedAt,
  username,
  usuario
}: IUsuarioProps) => {

  const { user, token, logout } = useAuth()

  const deleteUser = async () => {
      await deleteById(usuario, token)
      await editAcaoUsusario(token, {
        feito_por: user?.id,
        descricao: `Deleção do usuário ${usuario.username}`
      })
      if (usuario.id === user?.id) {
        logout()
      }
  }

  return (
    <>
      {user?.perfil === 1 ? (
        <TableRow>
          <TableCell sx={{ fontSize: "12px", textAlign: "center" }}>
            {username}
          </TableCell>
          <TableCell sx={{ fontSize: "12px", textAlign: "center" }}>
            {email}
          </TableCell>
          <TableCell sx={{ fontSize: "12px", textAlign: "center" }}>
            {createdAt}
          </TableCell>
          <TableCell sx={{ fontSize: "12px", textAlign: "center" }}>
            {updatedAt}
          </TableCell>
          <TableCell sx={{ fontSize: "12px", textAlign: "center" }}>
            {usuario.perfil === 1 ? 'Admin' : 'Padrão'}
          </TableCell>
          <TableCell sx={{ fontSize: "12px", textAlign: "center" }}>
            <EditModal 
                usuario={usuario}
            />
          </TableCell>
          <TableCell sx={{ fontSize: "12px", textAlign: "center" }}>
            <Delete sx={{ cursor: 'pointer' }} onClick={deleteUser}/>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell sx={{ fontSize: "12px", textAlign: "center" }}>
            {username}
          </TableCell>
          <TableCell sx={{ fontSize: "12px", textAlign: "center" }}>
            {email}
          </TableCell>
          <TableCell sx={{ fontSize: "12px", textAlign: "center" }}>
            {createdAt}
          </TableCell>
          <TableCell sx={{ fontSize: "12px", textAlign: "center" }}>
            {updatedAt}
          </TableCell>
          <TableCell sx={{ fontSize: "12px", textAlign: "center" }}>
            {usuario.perfil === 1 ? 'Admin' : 'Padrão'}
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
