import React, { useState } from "react";
import { Box, Typography, Paper, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";

const DEMO = [
  {
    title: "Snake Game",
    desc: "Creating a Snake game using HTML, CSS, and JavaScript involves setting up the visual elements and then implementing the game logic.",
    tags: ["HTML", "CSS", "JS"],
    demo: "https://snake-game-zeta-neon.vercel.app/",
    github: "https://github.com/Kaving2005/Snake-Game",
  },
  {
    title: "BMI Calculator",
    desc: "A Body Mass Index (BMI) calculator can be implemented using HTML for structure, CSS for styling, and JavaScript for functionality.",
    tags: ["React", "CSS"],
    demo: "https://bmicalculator-kavings-projects.vercel.app/",
    github: "https://github.com/Kaving2005/BMI",
  },
  {
    title: "Portfolio",
    desc: "Animated personal portfolio using React, Framer Motion, and modern UI patterns.",
    tags: ["React", "Framer Motion", "MUI"],
    demo: "#",
    github: "#",
  },
];

export default function ProjectsGrid() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleProject = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        Projects
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
        }}
      >
        {DEMO.map((p, i) => (
          <Paper
            key={i}
            component={motion.div}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Title */}
            <Typography variant="h6" fontWeight="bold">
              {p.title}
            </Typography>

            {/* Short Info */}
            <Typography sx={{ opacity: 0.7, mt: 1 }}>
              {p.desc.substring(0, 50)}...
            </Typography>

            {/* VIEW DETAILS BUTTON */}
            <Button
              variant="text"
              size="small"
              sx={{ mt: 1, textTransform: "none" }}
              onClick={() => toggleProject(i)}
            >
              {openIndex === i ? "Hide Details" : "View Details"}
            </Button>

            {/* Expanded Content */}
            {openIndex === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
              >
                <Typography sx={{ mt: 2 }}>{p.desc}</Typography>

                {/* Tags */}
                <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
                  {p.tags.map((tag, index) => (
                    <Chip key={index} label={tag} color="primary" size="small" />
                  ))}
                </Box>

                {/* Buttons */}
                <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                  <Button
                    variant="contained"
                    href={p.demo}
                    target="_blank"
                    size="small"
                  >
                    Live Demo
                  </Button>

                  <Button
                    variant="outlined"
                    href={p.github}
                    target="_blank"
                    size="small"
                  >
                    GitHub
                  </Button>
                </Box>
              </motion.div>
            )}
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
