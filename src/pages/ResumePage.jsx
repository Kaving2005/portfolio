import React from "react";
import { Typography, Button, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import Lottie from "lottie-react";
import resumeAnimation from "../pages/Resume.json";

export default function ResumePage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handleDownload = () => {
    window.open("/images/KAVIN_G_Resume.pdf", "_blank");
  };

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={3}
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: 900,
          borderRadius: 4,
          overflow: "hidden",
          backdropFilter: "blur(30px)",
          background: isDark
            ? "rgba(54, 63, 74, 0.75)"
            : "rgba(234, 214, 214, 0.9)",
        }}
      >
        {/* LEFT: RESUME ANIMATION */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 3,
            minHeight: { xs: 260, md: "auto" }, // FIX: prevents collapse
            background: isDark
              ? "linear-gradient(135deg, #0f2027, #203a43)"
              : "linear-gradient(135deg, #667eea, #764ba2)",
          }}
        >
          <Box
            component={motion.div}
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            sx={{
              width: 260,
              maxWidth: "100%",
            }}
          >
            <Lottie
              animationData={resumeAnimation}
              loop
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>

        {/* RIGHT: TEXT + BUTTON */}
        <Box sx={{ flex: 1, p: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            My Resume
          </Typography>

          <Typography sx={{ mt: 2, color: "text.secondary" }}>
            Download my resume to explore my professional experience, skills,
            and projects.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              background: isDark
                ? "linear-gradient(90deg, #36d1dc, #5b86e5)"
                : "linear-gradient(90deg, #667eea, #764ba2)",
              boxShadow: isDark
                ? "0 0 12px rgba(54,209,220,0.6)"
                : "0 0 12px rgba(118,75,162,0.5)",
            }}
            onClick={handleDownload}
          >
            Download Resume
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}