import { api } from "../axios-config";

export type TMedidaProps = {
    id: number
    usuario_id: number | undefined,
    panturrilha_esquerda: number,
    panturrilha_direita: number,
    perna_esquerda: number,
    perna_direita: number,
    abdomen: number,
    peitoral: number,
    braco_esquerdo: number,
    braco_direito: number,
    antebraco_esquerdo: number,
    antebraco_direito: number,
}

const getMedidas = async (token: string | null): Promise<TMedidaProps[] | undefined> => {
  try {
    const { data } = await api.get("/medidas", { headers: { Authorization: `Bearer ${token}` } });

    if (data) {

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMedidasUser = async (
  token: string | null,
  usuario_id: number | undefined
): Promise<TMedidaProps[] | undefined> => {
  try {
    const { data } = await api.get(`/medidasuser/${usuario_id}`, { headers: { Authorization: `Bearer ${token}` } });

    if (data) {

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMedidaById = async (
  id: number
): Promise<TMedidaProps | undefined> => {
  try {
    const { data } = await api.get(`/medidas/${id}`);

    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const createMedida = async (
  dados: Omit<TMedidaProps, "usuarioId">,
  token: string | null
): Promise<TMedidaProps | undefined> => {

  try {
    const { data } = await api.post<TMedidaProps>("/medidas", dados, { headers: { Authorization: `Bearer ${token}` } });

    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateMedida = async (
  token: string | null,
  dados: TMedidaProps
): Promise<any | undefined> => {
  try {
    const res = await api.put<TMedidaProps>(`/medidas/${dados.usuario_id}`, dados, { headers: { Authorization: `Bearer ${token}` } });

    alert(`'Medida modificada com sucesso'`)
    return res
  } catch (error) {
    console.log(error);
  }
};

const deleteMedidaById = async (id: number, token: string | null): Promise<any | undefined> => {
    try {
      await api.delete(`/medidas/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      alert(`Medida deletada com sucesso`)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
};

export { getMedidas, getMedidaById, updateMedida, deleteMedidaById, createMedida, getMedidasUser };