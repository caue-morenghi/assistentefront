import { Box, Divider, Typography, useTheme } from "@mui/material"
import { VisualizacaoAnalise } from "./VisualizacaoAnalise"
import { TAnalisesMedidasProps } from "../../../services/api/funcionalidades/MedidasService"

export const AnaliseMedidas = ({ usuario_id, updated_at, medida_id, id, created_at, analise }: TAnalisesMedidasProps) => {

    const theme = useTheme()

    return (
        <Box sx={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', bgcolor: '#ededed' }}>  
            <Box sx={{ bgcolor: theme.palette.background.paper }}>
                <Typography sx={{ color: theme.palette.primary.contrastText, padding: 2 }}>{new Date(created_at).toLocaleDateString()}</Typography>
            </Box>
            <Divider />
            <Box sx={{ bgcolor: theme.palette.background.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1 }}>
                <VisualizacaoAnalise key={id} usuario_id={usuario_id} updated_at={updated_at} medida_id={medida_id} created_at={created_at} id={id} analise={analise}/>
            </Box>
        </Box>
    )
}