import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { medidasSchema } from "../schemas"

type TMedidasProps = {
    usuarioId: number,
    panturrilhaEsquerda: number,
    panturrilhaDireita: number,
    pernaEsquerda: number,
    pernaDireita: number,
    abdomen: number,
    peitoral: number,
    bracoEsquerdo: number,
    bracoDireito: number,
    antebracoEsquerdo: number,
    antebracoDireito: number,
}

const FMedidasForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<TMedidasProps>({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(medidasSchema),
        defaultValues: {
            usuarioId: 0,
            panturrilhaEsquerda: 0,
            panturrilhaDireita: 0,
            pernaEsquerda: 0,
            pernaDireita: 0,
            abdomen: 0,
            peitoral: 0,
            bracoEsquerdo: 0,
            bracoDireito: 0,
            antebracoEsquerdo: 0,
            antebracoDireito: 0,
        }
    })

    return {
        register, handleSubmit, errors
    }
}

export default FMedidasForm