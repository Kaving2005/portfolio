import React from 'react'
import { Card, CardContent, Typography, Chip, CardActions, Button } from '@mui/material'
import { motion } from 'framer-motion'


export default function ProjectCard({project}){
return (
<motion.div whileHover={{ y: -6, scale:1.02 }} whileTap={{scale:0.99}}>
<div className="card">
<Typography variant="h6" sx={{fontWeight:700}}>{project.title}</Typography>
<Typography variant="body2" sx={{mt:1, color:'text.secondary'}}>{project.desc}</Typography>
<div style={{display:'flex', gap:8, marginTop:12, flexWrap:'wrap'}}>
{project.tags.map((t)=> <Chip key={t} label={t} size="small"/>) }
</div>
<div style={{marginTop:14}}>
<Button variant="outlined" size="small">Details</Button>
</div>
</div>
</motion.div>
)
}