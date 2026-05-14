export const SITE_NAME = "Kavin G";
export const SITE_TITLE = "Kavin G | Full-Stack Developer Portfolio";
export const SITE_DESCRIPTION =
  "Explore Kavin G's portfolio to see projects, technical skills, resume, and contact details for full-stack web development work.";
export const SITE_IMAGE = "https://kaving.vercel.app/images/kaving.jpg";
export const SITE_KEYWORDS = [
  "Kavin G",
  "portfolio",
  "full stack developer",
  "React developer",
  "frontend developer",
  "JavaScript",
  "MUI",
  "Framer Motion",
  "web developer",
];

export function getSiteUrl() {
  if (import.meta.env.VITE_SITE_URL) {
    return import.meta.env.VITE_SITE_URL;
  }

  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }

  return "https://kaving.vercel.app";
}

export function createPersonSchema(siteUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kavin G",
    jobTitle: "Full-Stack Developer",
    url: siteUrl,
    image: new URL("/images/kaving.jpg", siteUrl).href,
    sameAs: [
      "https://github.com/Kaving2005",
      "https://www.linkedin.com/in/kavin-g-970b03294",
    ],
    description:
      "Full-stack developer building responsive React, MUI, and Framer Motion experiences.",
  };
}
