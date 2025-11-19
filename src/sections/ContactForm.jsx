import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
        {/* LEFT IMAGE */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            minHeight: { xs: 200, md: "auto" },
            backgroundImage: "url('images/contact.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

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
