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
    created_at: string
}

export type TAnalisesMedidasProps = {
    id: number
    usuario_id: number | undefined,
    medida_id: number,
    analise: string,
    created_at: string
    updated_at: string
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

const getAnalisesMedidas = async (token: string | null): Promise<TAnalisesMedidasProps[] | undefined> => {
  try {
    const { data } = await api.get("/analisesmedidas", { headers: { Authorization: `Bearer ${token}` } });

    if (data) {

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const createAnaliseMedidas = async (
  usuario_id: number | undefined,
  medida_id: number,
  analise: string,
  token: string | null
): Promise<TMedidaProps | undefined> => {

  try {
    const { data } = await api.post("/analisesmedidas", {usuario_id, medida_id, analise}, { headers: { Authorization: `Bearer ${token}` } });

    if (data) {
      alert(`Medidas e análises cadastradas com sucesso`)
      window.location.reload()
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteAnaliseMedidaById = async (id: number, token: string | null): Promise<any | undefined> => {
  try {
    await api.delete(`/medidas/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    alert(`Medida deletada com sucesso`)
    window.location.reload()
  } catch (error) {
    console.log(error)
  }
};

export { getMedidas, getMedidaById, updateMedida, deleteMedidaById, createMedida, getMedidasUser, createAnaliseMedidas, deleteAnaliseMedidaById, getAnalisesMedidas };