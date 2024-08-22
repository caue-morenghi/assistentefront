import { ILoginPromiseProps, ILoginUsuarioProps } from "../../../types/users";
import { api } from "../axios-config";

const loginUsuario = async (dados: ILoginUsuarioProps): Promise<ILoginPromiseProps | undefined> => {

    try {
      const { data } = await api.post("/login", dados);

      if (data) {
        return data
      }
    } catch (error) {
      console.log(error)
      alert('Usuário ou senha inválidos')
    }
};


const validaToken = async (
  token: string | null
): Promise<any | undefined> => {
  try {
    const response = await api.get('/dashboard', { headers: { Authorization: `Bearer ${token}` } });
    return response.data
  } catch (error) {
    console.log(error);
  }
};

export {
    loginUsuario,
    validaToken
}