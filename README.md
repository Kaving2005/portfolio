Kavin’s Personal Portfolio

A modern, animated, responsive portfolio website built using React, Material-UI, Framer Motion, EmailJS, and Vite.
This portfolio showcases my skills, projects, resume, and ways to contact me.
Designed with clean UI, smooth transitions, and optimized for all devices.

Live Demo

Demo: Add your deployed link here

Features:
Modern UI & Animations

Material-UI components with a custom theme

Framer Motion animations on all pages

Smooth page transitions

Dark/Light theme toggle

Fully Responsive Design

Mobile-first layout

Scales beautifully on all screen sizes

Sections Included

Home — Intro + social icons + CTA

About — Personal description

Projects — Interactive project cards with expand animation

Skills — Animated skill grid with icons

Resume — CV viewer + download button

Contact — Email form with EmailJS + image section

Contact Form (EmailJS)

Sends messages directly to your email

Shows success/error notifications

Smooth Navigation

Sticky navbar

Scroll-to-section using #sectionID

Active highlight on current menu item

 Tech Stack
Frontend

React.js

Vite

Material UI (MUI)

Tailwind (if used for specific sections)

Framer Motion

React Icons

Backend / Email

EmailJS (Client-side email sending)

 Folder Structure
project-folder/
├── public/
│   ├── images/
│   │   ├── kavin.jpg
│   │   ├── contact.avif
│   │   ├── project-thumbnails/
│   │   └── resume.pdf
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── ui/
│   │       └── ProjectCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutPage.jsx
│   │   ├── Skills.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ResumePage.jsx
│   │   └── ContactPage.jsx
│   ├── theme/
│   │   └── ThemeProviderWrapper.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md

Installation & Setup
1️. Clone the repository
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio

2️. Install dependencies
npm install

3️. Setup EmailJS

Go to EmailJS Dashboard → Integration → API Keys
Add your values in .env:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

4️. Run project
npm run dev

