import React from 'react'
import { Box, Typography, Paper, Chip } from '@mui/material'
import { motion } from 'framer-motion'

const EXPERIENCE = [
  {
    position: "Frontend Developer Intern",
    company: "NexPuzz Technology",
    duration: "Aug 2025 - Mar 2025",
    description:
      "As a Frontend Developer Intern, I gained hands-on experience in building responsive and interactive web applications. I worked with modern technologies like React, HTML5, CSS3, and JavaScript to develop user-friendly interfaces. Collaborated with the design team to implement pixel-perfect UI designs and ensure cross-browser compatibility. Optimized web performance and maintained clean, maintainable code following best practices.",
    skills: [
      "React",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Git",
    ],
    icon: "🌐",
  },
  {
    position: "Full Stack Developer",
    company: "NexPuzz Technology",
    duration: "Apr 2026 - Present",
    description:
      "As a Full Stack Developer, I design and develop complete web applications from frontend to backend. I leverage technologies like React for frontend, Node.js and Express for backend, and MongoDB for database management. I create scalable REST APIs, implement authentication and authorization, manage databases, and deploy applications. I also collaborate with cross-functional teams to deliver robust solutions that meet client requirements and user expectations.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "Postgresql",
      "REST API",
      "Authentication",
      "Deployment",
    ],
    icon: "🧑🏻‍💻",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function WorkExperience() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
      <Typography variant="h2" component="h2" sx={{ mb: 2, fontWeight: "bold" }}>
        Work Experience
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 6, color: 'text.secondary', fontSize: '1.1rem' }}>
        My professional journey and experience in web development
      </Typography>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {EXPERIENCE.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(20px)',
                  borderLeft: '4px solid',
                  borderLeftColor: 'primary.main',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(8px)',
                    boxShadow: 6,
                  },
                }}
              >
                {/* Header with icon, position, and company */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, gap: 2 }}>
                  <Typography variant="h4" sx={{ fontSize: '2rem' }}>
                    {exp.icon}
                  </Typography>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      {exp.position}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600, mb: 0.5 }}>
                      {exp.company}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {exp.duration}
                    </Typography>
                  </Box>
                </Box>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  {exp.description}
                </Typography>

                {/* Skills chips */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {exp.skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'rgba(124, 58, 237, 0.1)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  )
}
