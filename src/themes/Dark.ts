import { createTheme } from "@mui/material"
import { cyan } from "@mui/material/colors"

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1F3A5F',
            dark: '#1F3A5F',
            light: '#acc2ef',
            contrastText: '#fff'
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#fff'
        },
        background: {
            default: '#202124',
            paper: '#303134',
        }
    },
    typography: {
        fontFamily: '"Montserrat", sans-serif'
    }
})