import kemiThumb from "../assets/images/kemi-thumbnail.webp";
import solarThumb from "../assets/images/solar-thumbnail.webp";
import pristineThumb from "../assets/images/pristine-thumbnail.webp";

export const projects = [
  {
    title: "Kemi Taiwo Portfolio",
    description:
      "A portfolio and print shop website for a Lagos-based photographer, featuring a paginated gallery with orientation detection and a WhatsApp-based checkout flow.",
    tech: ["React", "Vite", "CSS Modules", "React Router"],
    github: "https://github.com/JAMIN-exe/kemi-portfolio",
    live: "https://shotbyktaiwo.netlify.app",
    thumbnail: kemiThumb,
  },
  {
    title: "Solar System Explorer",
    description:
      "An interactive React app fetching live planet data from a public API, with smooth-scroll navigation and a responsive layout.",
    tech: ["React", "Vite", "REST API"],
    github: "https://github.com/JAMIN-exe/solar-system-capstone",
    live: "https://solar-system-capstone.netlify.app",
    thumbnail: solarThumb,
  },
  {
    title: "Pristine Glow",
    description:
      "A skincare brand landing page built with vanilla HTML, CSS, and JavaScript, including a custom hamburger menu and full SEO meta tag suite.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/JAMIN-exe/test_pristine-glow",
    live: "https://testing-prestineglow.netlify.app",
    thumbnail: pristineThumb,
  },
];