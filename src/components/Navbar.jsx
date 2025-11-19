import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { ThemeContext } from "../theme/ThemeProviderWrapper";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function Navbar() {
  const { mode, toggleMode } = React.useContext(ThemeContext);

  // Detect active section during scroll
  const [activeSection, setActiveSection] = useState("#home");

  const navs = [
    ["Home", "#home", "#ff6b6b", <HomeIcon sx={{ mr: 1 }} />],
    ["Projects", "#projects", "#4dabf7", <WorkIcon sx={{ mr: 1 }} />],
    ["About", "#about", "#ffa94d", <InfoIcon sx={{ mr: 1 }} />],
    ["Skills", "#skills", "#69db7c", <CodeIcon sx={{ mr: 1 }} />],
    ["Resume", "#resume", "#b197fc", <DescriptionIcon sx={{ mr: 1 }} />],
    ["Contact", "#contact", "#f06595", <ContactMailIcon sx={{ mr: 1 }} />],
  ];

  // Smooth scrolling
  const handleScroll = (e, link) => {
    e.preventDefault();
    document.querySelector(link).scrollIntoView({
      behavior: "smooth",
    });
  };

  // Active section detection
  useEffect(() => {
    const handleActiveSection = () => {
      navs.forEach(([_, link]) => {
        const section = document.querySelector(link);
        if (!section) return;

        const top = section.getBoundingClientRect().top;
        if (top <= 150 && top >= -400) {
          setActiveSection(link);
        }
      });
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid rgba(255,255,255,0.03)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component="a"
          href="#home"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            textDecoration: "none",
          }}
          onClick={(e) => handleScroll(e, "#home")}
        >
          Kavin G
        </Typography>

        {/* Nav Links */}
        <div>
          {navs.map(([title, link, color, icon]) => {
            const active = activeSection === link;
            return (
              <Button
                key={link}
                onClick={(e) => handleScroll(e, link)}
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  mr: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  color: color,
                  transition: "0.3s",
                  position: "relative",

                  // Hover glow
                  "&:hover": {
                    filter: "drop-shadow(0 0 6px " + color + ")",
                    transform: "scale(1.08)",
                  },

                  // Active underline
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: active ? "100%" : "0%",
                    height: "2px",
                    backgroundColor: color,
                    borderRadius: 10,
                    transition: "0.3s",
                  },
                }}
              >
                {icon}
                {title}
              </Button>
            );
          })}

          {/* Dark/Light Toggle */}
          <IconButton onClick={toggleMode} sx={{ ml: 1 }}>
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
