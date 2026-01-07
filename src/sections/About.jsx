import React from 'react'
import { Typography, Box } from '@mui/material'
import { motion } from 'framer-motion'


export default function About(){
return (
<Box>
<Typography variant="h3">About me</Typography><br />
<motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}}>
<Typography sx={{ mt: 2, color: 'text.secondary', fontSize: '1.5rem', fontWeight: 500 }}>
  I am a dedicated and passionate software developer with a strong focus on building
  responsive, high-performance, and user-friendly applications. I enjoy transforming ideas
  into clean, functional, and scalable solutions.
</Typography>

<Typography sx={{ mt: 2, color: 'text.secondary', fontSize: '1.5rem', fontWeight: 500 }}>
  My expertise spans both front-end and back-end development, allowing me to work across the
  full application lifecycle. I have hands-on experience with modern frameworks, tools, and
  technologies that help me create seamless and efficient digital experiences.
</Typography>

<Typography sx={{ mt: 2, color: 'text.secondary', fontSize: '1.5rem', fontWeight: 500 }}>
  I am a continuous learner who actively explores new technologies, frameworks, and best
  practices. Through projects, hands-on experimentation, and real-world problem solving,
  I strive to continuously improve my skills and stay aligned with industry standards.
</Typography>

</motion.div>
</Box>
)
}