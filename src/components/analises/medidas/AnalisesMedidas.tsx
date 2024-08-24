/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { getAnalisesMedidas, TAnalisesMedidasProps } from "../../../services/api/funcionalidades/MedidasService";
import { useAuth } from "../../../contexts/AuthContext";
import { AnaliseMedidas } from "./AnaliseMedida";
import { Box } from "@mui/material";

export const AnalisesMedidas = () => {

    const [analisesmedidas, setanalisesmedidas] = useState<TAnalisesMedidasProps[] | undefined>([]);
    const { token, user } = useAuth()

    useEffect(() => {
        const analisesmedidas = getAnalisesMedidas(token)
        analisesmedidas.then((response) => {
            setanalisesmedidas(response?.filter(medida => medida.usuario_id === user?.id))
            console.log(analisesmedidas)
        })
    }, []);

    return (
        <Box sx={{ display: 'flex', gap: 3 }}>
            {analisesmedidas?.map(analise =>
                <AnaliseMedidas key={analise.id} usuario_id={analise.usuario_id} medida_id={analise.medida_id} id={analise.id} analise={analise.analise} created_at={analise.created_at} updated_at={analise.updated_at}/>
            )}
        </Box>
    )
}