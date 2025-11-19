import React from 'react'
import { Typography, Box } from '@mui/material'
import { motion } from 'framer-motion'


export default function About(){
return (
<Box>
<Typography variant="h3">About me</Typography><br />
<motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}}>
<Typography sx={{mt:2, color:'text.secondary', fontSize:'1.5rem',fontWeight:"500"}}> ⭐ These are the technologies I work with to build responsive, fast, and modern applications.  
I enjoy learning new tools and continuously improving my development skills.

</Typography>
<Typography sx={{mt:2, color:'text.secondary', fontSize:'1.5rem',fontWeight:"500"}}> ⭐ I am a passionate and dedicated developer who enjoys turning ideas into real, functional
applications. My skillset spans across both front-end and back-end technologies, allowing
me to build complete, responsive, and user-focused solutions. I continuously explore new
tools, frameworks, and best practices to improve my craft and stay updated in the fast-
growing tech world. These are the technologies I work with confidently and use to create
smooth, modern, and high-performance projects.
</Typography>
<Typography sx={{mt:2, color:'text.secondary', fontSize:'1.5rem',fontWeight:"500"}}> ⭐ As a passionate learner and aspiring developer, I am continuously exploring new technologies.  
These are the tools and programming languages I have learned and practiced through projects,  
assignments, and personal experiments.

</Typography>
</motion.div>
</Box>
)
}