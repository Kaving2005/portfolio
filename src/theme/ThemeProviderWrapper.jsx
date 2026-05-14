import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { getDesignTokens } from './tokens'


export default function ThemeProviderWrapper({ children }){
// Prefer the user's OS theme when we are in a browser; default to light on the server.
const prefersDark =
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
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
