import { Box } from "@mui/material"
import { Header } from "../layout/header/Header"
import { useAuth } from "../contexts/AuthContext"
import { Navigate, useLocation } from "react-router-dom"
import PaginacaoAnalises from "../components/analises/Paginacao"

export const Analises = () => {
    const { user } = useAuth()
    const location = useLocation()

    return (
        <>
            {user?.status === 1
                ?
                    <Box height="100vh">
                        <Header icon="home" text="Análises" />
                        <Box padding={3}>
                            <PaginacaoAnalises />
                        </Box>
                    </Box>
                :
                    <Navigate to='/reativacao' state={{ from: location }} replace/>
            }
        </>
        
    )
}