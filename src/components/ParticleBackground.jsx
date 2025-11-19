import React, { useCallback, useContext } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { ThemeContext } from "../theme/ThemeProviderWrapper"; // adjust path if needed

const ParticleBackground = () => {
  const { mode } = useContext(ThemeContext);  
  const isDark = mode === "dark";

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          number: { value: 70, density: { enable: true, area: 800 } },

          color: { value: isDark ? "#ffffff" : "#000000" },

          links: {
            enable: true,
            color: isDark ? "#ffffff" : "#000000",
            distance: 150,
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
            random: true,
            outModes: "out",
          },

          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticleBackground;
