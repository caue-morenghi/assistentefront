import { TableBody } from "@mui/material";
import { useEffect, useState } from "react";
import { getMedidas, getMedidasUser, TMedidaProps } from "../../../services/api/funcionalidades/MedidasService";
import { useAuth } from "../../../contexts/AuthContext";
import { Medida } from "./Medida";

//{new Date(data).toLocaleDateString()}

export const TabelaMedidasBody = () => {

    const { token, user } = useAuth()
    const [medidas, setmedidas] = useState<TMedidaProps[] | undefined>([]);

    useEffect(() => {
        const medidas = getMedidasUser(token, user?.id)
        medidas.then((response) => {
            setmedidas(response?.filter(medida => medida.usuario_id === user?.id))
        })
    }, []);

  return (
    <TableBody>
      {medidas?.map(medida =>
        <Medida
            id={medida.id}
            key={medida.usuario_id}
            usuario_id={medida.usuario_id}
            panturrilha_esquerda={medida.panturrilha_esquerda}
            panturrilha_direita={medida.panturrilha_direita}
            perna_esquerda={medida.perna_esquerda}
            perna_direita={medida.perna_direita}
            abdomen={medida.abdomen}
            braco_direito={medida.braco_direito}
            braco_esquerdo={medida.braco_esquerdo}
            antebraco_direito={medida.antebraco_direito}
            antebraco_esquerdo={medida.antebraco_esquerdo}
            peitoral={medida.peitoral}
        />
      )}
    </TableBody>
  );
};
