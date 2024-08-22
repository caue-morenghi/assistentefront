import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "./schemas"
import { ILoginUsuarioProps } from "../types/users"

const FLoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginUsuarioProps>({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(loginSchema)
    })
    return {
        register, handleSubmit, errors
    }
}

export default FLoginForm