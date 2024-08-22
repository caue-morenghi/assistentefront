import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "./schemas"

const FRegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            perfil: 0,
        }
    })

    return {
        register, handleSubmit, errors
    }
}

export default FRegisterForm