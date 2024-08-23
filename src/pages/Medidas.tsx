import { Box, Typography, useTheme } from "@mui/material"
import { Header } from "../layout/header/Header"
import { useAuth } from "../contexts/AuthContext"
import { Navigate, useLocation } from "react-router-dom"
import { MedidasForm } from "../components/medidas/MedidasForm"
import ModalMedidas from "../components/medidas/tabela-medidas/Modal"

export const Medidas = () => {

    const theme = useTheme()
    const { user } = useAuth()
    const location = useLocation()

    return (
        <>
            {user?.status === 1
                ?
                    <Box height="100vh">
                        <Header icon="home" text="Medidas" />
                        <Box padding={3}>
                            <Typography color={theme.palette.primary.contrastText} variant="h5" component="h5">Insira as suas medidas atuais, {user?.username}!</Typography>
                            <MedidasForm />
                        </Box>
                    </Box>
                :
                    <Navigate to='/reativacao' state={{ from: location }} replace/>
            }
        </>
        
    )
}