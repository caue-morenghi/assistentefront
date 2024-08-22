import { Box, Icon, Typography, useTheme } from "@mui/material"
import { IHeaderProps } from "../../types/components"

export const Header = ({ icon, text, newUser }: IHeaderProps) => {

    const theme = useTheme()

    return (
        <Box display="flex" alignItems="center" justifyContent='space-between' padding={2} component="header" sx={{ backgroundColor: '#1F3A5F' }}>
            <Box display="flex" alignItems="center" gap={1}>
                <Icon fontSize="large" sx={{ color: '#fff' }}>{icon}</Icon>
                <Typography variant="h5" component="h5" color={theme.palette.secondary.contrastText}>{text}</Typography>
            </Box>
            {newUser ? newUser : ''}
        </Box>
    )
}