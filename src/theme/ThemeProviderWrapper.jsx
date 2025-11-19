import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { getDesignTokens } from './tokens'


export default function ThemeProviderWrapper({ children }){
// prefer dark by default but we expose toggle in App
const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
const [mode, setMode] = React.useState(prefersDark ? 'dark' : 'light')
const toggleMode = () => setMode(prev => prev === 'dark' ? 'light' : 'dark')


const theme = React.useMemo(()=> createTheme(getDesignTokens(mode)), [mode])


return (
<ThemeContext.Provider value={{ mode, toggleMode }}>
<ThemeProvider theme={theme}>{children}</ThemeProvider>
</ThemeContext.Provider>
)
}


export const ThemeContext = React.createContext({ mode: 'dark', toggleMode: ()=>{} })