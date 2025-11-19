import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CssBaseline } from '@mui/material'
import ThemeProviderWrapper from './theme/ThemeProviderWrapper'
import './index.css'


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<ThemeProviderWrapper>
<CssBaseline />
<App />
</ThemeProviderWrapper>
</BrowserRouter>
</React.StrictMode>
)