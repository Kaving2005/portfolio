import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useTheme } from "@mui/material/styles";
import contactAnimation from "../sections/Contact.json";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Stack,
  Alert
} from "@mui/material";

const Contact = () => {
  const form = useRef();
  const theme = useTheme();
const isDark = theme.palette.mode === "dark";

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully!");
          setErrorMessage("");
          form.current.reset();

          // Hide success after 4 sec
          setTimeout(() => setSuccessMessage(""), 4000);
        },
        () => {
          setErrorMessage("Failed to send message. Please try again.");
          setSuccessMessage("");

          setTimeout(() => setErrorMessage(""), 4000);
        }
      );
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: 900,
          borderRadius: 4,
          overflow: "hidden",
          background: (theme) =>
            theme.palette.mode === "light"
              ? "rgba(255,255,255,0.9)"
              : "rgba(20,20,20,0.85)",
          backdropFilter: "blur(60px)",
        }}
      >
        {/* LEFT ANIMATION */}
{/* LEFT ANIMATED PANEL */}
<Box
  component={motion.div}
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  sx={{
    flex: 1,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: isDark
      ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
      : "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
  }}
>
  {/* TEXT */}
  <Typography
    variant="h4"
    fontWeight="bold"
    textAlign="center"
    gutterBottom
  >
    Let’s Work Together
  </Typography>

  <Typography
    textAlign="center"
    sx={{ opacity: 0.9, maxWidth: 300 }}
  >
    Have an idea, project, or just want to connect?
    Send me a message anytime.
  </Typography>

  {/* LOTTIE */}
  <Box
    component={motion.div}
    animate={{ y: [0, -12, 0] }}
    transition={{ repeat: Infinity, duration: 3 }}
    sx={{ width: 260, mt: 4 }}
  >
    <Lottie
      animationData={contactAnimation}
      loop
    />
  </Box>
</Box>


        {/* RIGHT FORM */}
        <Box sx={{ flex: 1.2, p: 6 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 3 }}
          >
            Contact Me
          </Typography>

          {/* SUCCESS / ERROR MESSAGES */}
          {successMessage && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {successMessage}
            </Alert>
          )}

          {errorMessage && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Alert>
          )}

          <form ref={form} onSubmit={sendEmail}>
            <Stack spacing={3}>
              <TextField label="Name" name="user_name" fullWidth required />
              <TextField
                label="Email"
                name="user_email"
                type="email"
                fullWidth
                required
              />
              <TextField
                label="Number"
                name="number"
                type="number"
                fullWidth
                required
              />
              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                fullWidth
                required
              />

              <Button type="submit" variant="contained" size="large">
                Send Message
              </Button>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default Contact;