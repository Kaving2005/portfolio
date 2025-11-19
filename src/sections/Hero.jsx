import { Box, Typography, Button, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        px: { xs: 2, md: 8 },
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      {/* Left Text Section */}
      <Box>
        {/*  Gradient Animated Name */}
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{
            background: "linear-gradient(90deg, #00c6ff, #ff4ecd, #7b2ff7)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientMove 4s ease infinite",
            backgroundSize: "300% 300%",

            "@keyframes gradientMove": {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },
          }}
        >
          Hi, I'm Kavin
        </Typography>

        <Typography variant="h5" sx={{ opacity: 0.8, mt: 1 }}>
          Full-Stack Developer
        </Typography>

        {/* View Projects Button */}
        <Button
          variant="contained"
          sx={{ mt: 3, px: 4, py: 1.5 }}
          component={motion.a}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.94 }}
          href="#projects"
        >
          View My Work
        </Button>

        {/* Social Icons */}
        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
          
          {/* GitHub */}
          <IconButton
            component={motion.a}
            href="https://github.com/Kaving2005"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            sx={{
              fontSize: 35,
              color: "#1192e3ff",
              transition: "0.3s",
              "&:hover": {
                filter: "drop-shadow(0 0 10px #ffffff)",
              },
            }}
          >
            <FaGithub size={35} />
          </IconButton>

          {/* Instagram */}
          <IconButton
            component={motion.a}
            href="https://instagram.com/YOUR_INSTA"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            sx={{
              fontSize: 35,
              color: "#ff2f8b",
              transition: "0.3s",
              "&:hover": {
                filter: "drop-shadow(0 0 12px #ff2f8b)",
              },
            }}
          >
            <FaInstagram size={35} />
          </IconButton>

          {/* LinkedIn */}
          <IconButton
            component={motion.a}
            href="https://www.linkedin.com/in/kavin-g-970b03294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            sx={{
              fontSize: 35,
              color: "#0A66C2",
              transition: "0.3s",
              "&:hover": {
                filter: "drop-shadow(0 0 12px #0A66C2)",
              },
            }}
          >
            <FaLinkedin size={35} />
          </IconButton>

        </Box>
      </Box>

      {/* Right Image Section */}
      <Box
        component={motion.img}
        src="/images/kaving1.jpg"
        alt="Profile"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          width: { xs: 220, md: 350 },
          height: { xs: 220, md: 350 },
          borderRadius: "50%",
          objectFit: "cover",

          // ⭐ Neon Glow Effect
          boxShadow:
            "0 0 20px #7b2ff7, 0 0 40px #00c6ff, 0 0 60px #ff4ecd",
          animation: "glowPulse 4s ease-in-out infinite",

          "@keyframes glowPulse": {
            "0%": { boxShadow: "0 0 20px #7b2ff7, 0 0 40px #00c6ff" },
            "50%": { boxShadow: "0 0 40px #ff4ecd, 0 0 80px #00c6ff" },
            "100%": { boxShadow: "0 0 20px #7b2ff7, 0 0 40px #00c6ff" },
          },
        }}
      />
    </Box>
  );
}
