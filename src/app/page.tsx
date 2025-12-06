import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import ParticlesBackground from "./Components/ParticlesBackground";
import CurrentWork from "./Components/CurrentWork";
import About from "./Components/About";
import Stats from "./Components/Stats";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import BackToTop from "./Components/BackToTop";
import ScrollProgress from "./Components/ScrollProgress";
import PageLoader from "./Components/PageLoader";
import { getTotalYearsOfExperience } from "./utils/dateUtils";

export default function Home() {
  const yearsOfExperience = getTotalYearsOfExperience();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gregory Garcia",
    "jobTitle": "Senior Front-End Developer",
    "description": `Senior Front-End Developer with ${yearsOfExperience}+ years of experience specializing in React, Next.js, and TypeScript`,
    "url": "https://www.gregorygarcia.dev",
    "email": "gregory.barros@hotmail.com",
    "telephone": "+353834329851",
    "image": "https://www.gregorygarcia.dev/images/profile.jpeg",
    "sameAs": [
      "https://www.linkedin.com/in/gregory-barros-garcia-4160b2157",
      "https://github.com/gregorybgarcia"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dublin",
      "addressCountry": "IE"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Node.js",
      "Redux",
      "Material UI",
      "Bootstrap",
      "Sass",
      "Jest",
      "Storybook",
      "Git",
      "Figma",
      "Web Development",
      "Front-End Development",
      "Full Stack Development"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "myPatientSpace"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageLoader />
      <ScrollProgress />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <Presentation />
        <ParticlesBackground />
        <About />
        <CurrentWork />
        <Projects />
        <Skills />
        <Experience />
        <Stats />
        <Contact />
        <BackToTop />
      </main>
    </>
  );
}
