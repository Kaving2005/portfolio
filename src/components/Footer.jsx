import React from 'react'
import { Box, Typography } from '@mui/material'


export default function Footer(){
return (
<Box sx={{py:6, textAlign:'center', color:'text.secondary'}}>
<Typography>© {new Date().getFullYear()} Kavin G — Built with React + MUI + Framer Motion</Typography>
</Box>
)
}