import { Box, ThemeProvider } from "@mui/material"
import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { DarkTheme, LightTheme } from "../themes"
import { IAppThemeProvider, IThemeContextProps } from "../types/contexts"

const ThemeContext = createContext({} as IThemeContextProps)

export const AppThemeProvider = ({children}: IAppThemeProvider) => {

    const [themeName, setthemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setthemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, [])

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme
        return DarkTheme
    }, [themeName])

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}