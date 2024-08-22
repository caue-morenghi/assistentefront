import { ICadastroUsuarioProps, IEditUsuarioProps, IUsuariosProps, TEditUsuario, TEditUsuarioResponse } from "../../../types/users";
import { api } from "../axios-config";

const getUsuarios = async (token: string | null): Promise<IUsuariosProps[] | undefined> => {
  try {
    const { data } = await api.get("/users", { headers: { Authorization: `Bearer ${token}` } });

    if (data) {

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getUsuarioById = async (
  id: number
): Promise<IUsuariosProps | undefined> => {
  try {
    const { data } = await api.get(`/users/${id}`);

    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const createUsuario = async (
  dados: Omit<ICadastroUsuarioProps, "id">,
  token: string | null
): Promise<ICadastroUsuarioProps | undefined> => {

  try {
    const { data } = await api.post<ICadastroUsuarioProps>("/users", {
      ...dados,
      status: 1,
    }, { headers: { Authorization: `Bearer ${token}` } });

    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateById = async (
  token: string | null,
  dados: IEditUsuarioProps
): Promise<any | undefined> => {
  try {
    const res = await api.put<IEditUsuarioProps>(`/users/${dados.id}`, dados, { headers: { Authorization: `Bearer ${token}` } });

    alert(`'Usuário ${dados.username} modificado com sucesso'`)
    return res
  } catch (error) {
    console.log(error);
  }
};

const editById = async (
  token: string | null,
  dados: IEditUsuarioProps
): Promise<any | undefined> => {
  try {
    const res = await api.put<IEditUsuarioProps>(`/users/${dados.id}`, dados, { headers: { Authorization: `Bearer ${token}` } });

    alert(`'Usuário ${dados.username} modificado com sucesso'`)
    window.location.reload()
    return res
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (user: IEditUsuarioProps, token: string | null): Promise<any | undefined> => {
    try {
      await api.delete(`/users/${user.id}`, { headers: { Authorization: `Bearer ${token}` } });
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
};

const editAcaoUsusario = async (
  token: string | null,
  dados: TEditUsuario
): Promise<TEditUsuarioResponse | undefined> => {

  try {
    const { data } = await api.post<TEditUsuarioResponse>("/edits", dados, { headers: { Authorization: `Bearer ${token}` } });

    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};


export { getUsuarios, getUsuarioById, createUsuario, updateById, deleteById, editAcaoUsusario, editById };