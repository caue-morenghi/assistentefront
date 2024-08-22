import { TableBody } from "@mui/material";
import { useEffect, useState } from "react";
import { getUsuarios } from "../../../services/api/usuarios/UsuariosService";
import { Usuario } from "../Usuario";
import { IUsuariosProps } from "../../../types/users";
import { useAuth } from "../../../contexts/AuthContext";

export const TabelaBody = () => {
  const [usuarios, setusuarios] = useState<IUsuariosProps[] | undefined>([]);
  const { token } = useAuth()

  useEffect(() => {
    const users = getUsuarios(token);
    users.then((response) => {
      setusuarios(response?.filter((usuario) => usuario.status === 1))
    });
  }, []);

  return (
    <>
      <TableBody>
          {usuarios?.map(usuario =>
              <Usuario 
                  key={usuario.id}
                  email={usuario.email}
                  username={usuario.username}
                  createdAt={`${new Date(usuario.created_at).toLocaleDateString()} ${new Date(usuario.created_at).toLocaleTimeString()}`}
                  updatedAt={`${new Date(usuario.updated_at).toLocaleDateString()} ${new Date(usuario.updated_at).toLocaleTimeString()}`}
                  id={usuario.id}
                  usuario={usuario}
                  status={usuario.status}
              />
          )}
      </TableBody>
    </>
  );
};
