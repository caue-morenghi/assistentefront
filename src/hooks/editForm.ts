import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { editSchema } from "./schemas"
import { IEditUsuarioProps } from "../types/users"

const FEditForm = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<IEditUsuarioProps>({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(editSchema),
        defaultValues: {
            id: 0,
            email: '',
            username: '',
            perfil: 0,
            status: 0
        }
    })

    return {
        register, handleSubmit, errors, setValue
    }
}

export default FEditForm