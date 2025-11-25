import React from "react";
import { Typography, Button, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function ResumePage() {
  const handleDownload = () => {
    window.open("/images/KAVIN_G_Resume.pdf", "_blank"); // Opens PDF in new tab
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
          background: (theme) =>
            theme.palette.mode === "light"
              ? "rgba(234, 214, 214, 0.9)"
              : "rgba(54, 63, 74, 0.75)",
        }}
      >

        {/* LEFT: Resume Preview */}
        <Box
          sx={{
            flex: 1,
            minHeight: 350,
            backgroundImage:
              "url('/images/resume.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* RIGHT: Text + Button */}
        <Box sx={{ flex: 1, p: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            My Resume
          </Typography>

          <Typography sx={{ mt: 2, color: "text.secondary" }}>
            Download my resume to view my professional experience, skills, and
            projects.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4 }}
            onClick={handleDownload}
          >
            Download Resume
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
