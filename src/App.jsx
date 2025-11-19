import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import Skills from './pages/Skills.jsx'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPages'
import { Container } from '@mui/material'
import { motion } from 'framer-motion'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <div style={{ position: "relative" }}>
      
      {/* GLOBAL FIXED BACKGROUND */}
      <div 
        style={{ 
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none"
        }}
      >
        <ParticleBackground />
      </div>

      {/* MAIN APP CONTENT */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />

        <Container maxWidth={false} sx={{ paddingTop: 6 }}>

          {/* All pages in one long scroll page */}
          <SectionWrapper id="home"><Home /></SectionWrapper>
          <SectionWrapper id="projects"><ProjectsPage /></SectionWrapper>
          <SectionWrapper id="about"><AboutPage /></SectionWrapper>
          <SectionWrapper id="skills"><Skills /></SectionWrapper>
          <SectionWrapper id="resume"><ResumePage /></SectionWrapper>
          <SectionWrapper id="contact"><ContactPage /></SectionWrapper>

        </Container>

        <Footer />
      </div>

    </div>
  );
}

const SectionWrapper = ({ id, children }) => (
  <section id={id} style={{ minHeight: "100vh", paddingTop: "60px" }}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  </section>
)
