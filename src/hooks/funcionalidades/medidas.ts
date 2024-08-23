import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { medidasSchema } from "../schemas"

export type TMedidasProps = {
    id: number
    usuario_id: string,
    panturrilha_esquerda: string,
    panturrilha_direita: string,
    perna_esquerda: string,
    perna_direita: string,
    abdomen: string,
    peitoral: string,
    braco_esquerdo: string,
    braco_direito: string,
    antebraco_esquerdo: string,
    antebraco_direito: string,
}

const FMedidasForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<TMedidasProps>({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(medidasSchema),
        defaultValues: {
            usuario_id: '',
            panturrilha_esquerda: '',
            panturrilha_direita: '',
            perna_esquerda: '',
            perna_direita: '',
            abdomen: '',
            peitoral: '',
            braco_esquerdo: '',
            braco_direito: '',
            antebraco_esquerdo: '',
            antebraco_direito: '',
        }
    })

    return {
        register, handleSubmit, errors
    }
}

export default FMedidasForm