import { Box, Typography, useTheme } from "@mui/material"
import { Header } from "../layout/header/Header"
import { useAuth } from "../contexts/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

export const Home = () => {

    const theme = useTheme()
    const { user } = useAuth()
    const location = useLocation()

    return (
        <>
            {user?.status === 1
                ?
                    <Box height="100vh">
                        <Header icon="home" text="Página de Início" />
                        <Box padding={3}>
                            <Typography color={theme.palette.primary.contrastText} variant="h5" component="h5">Bem vindo {user?.username}!</Typography>
                        </Box>
                    </Box>
                :
                    <Navigate to='/reativacao' state={{ from: location }} replace/>
            }
        </>
        
    )
}