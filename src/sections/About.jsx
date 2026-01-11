import React from 'react'
import { Typography, Box, Grid } from '@mui/material'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        About Me
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Left side - Image */}
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              component="img"
              src="/images/aboutimg.svg" // put image in public folder
              alt="My profile"
              sx={{
                width: '100%',
                maxWidth: 350,
                borderRadius: '16px',
                boxShadow: 3,
              }}
            />
          </motion.div>
        </Grid>

        {/* Right side - Content */}
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '1.5rem',
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              I am a dedicated and passionate software developer with a strong focus on
              building responsive, high-performance, and user-friendly applications.
              I enjoy transforming ideas into clean, functional, and scalable solutions.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  )
}