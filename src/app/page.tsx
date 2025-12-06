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
    "alternateName": "Gregory Barros Garcia",
    "jobTitle": "Senior Front-End Developer",
    "description": `Experienced Front-End Developer with ${yearsOfExperience}+ years of professional experience building modern web applications using React, Next.js, TypeScript, and JavaScript. Specialized in creating responsive, accessible, and performant user interfaces for healthcare, fintech, and enterprise applications.`,
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
      "addressRegion": "Leinster",
      "addressCountry": "IE"
    },
    "knowsAbout": [
      "Front-End Development",
      "Web Development",
      "Full Stack Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Web Design",
      "Node.js",
      "Redux",
      "State Management",
      "Material UI",
      "Bootstrap",
      "Sass",
      "SCSS",
      "Jest",
      "Unit Testing",
      "Storybook",
      "Component Libraries",
      "Git",
      "Version Control",
      "Figma",
      "UI/UX Design",
      "Agile Development",
      "Scrum",
      "RESTful APIs",
      "GraphQL",
      "Performance Optimization",
      "Accessibility (a11y)",
      "Cross-browser Compatibility",
      "Mobile-first Design",
      "Single Page Applications",
      "Progressive Web Apps"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Front-End Developer",
      "occupationalCategory": "15-1254.00",
      "skills": "React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Redux, Material UI, Node.js",
      "experienceRequirements": `${yearsOfExperience} years`
    },
    "worksFor": {
      "@type": "Organization",
      "name": "myPatientSpace",
      "description": "Healthcare Technology Company"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Professional Web Development"
      }
    ],
    "award": [
      "11+ Professional Certificates",
      "20+ Technologies Mastered",
      "50+ Projects Contributed"
    ],
    "seeks": {
      "@type": "JobPosting",
      "title": "Front-End Developer, React Developer, Web Developer, Full Stack Developer",
      "description": "Seeking opportunities as a Front-End Developer, React Developer, or Full Stack Developer",
      "employmentType": ["FULL_TIME", "CONTRACT"],
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dublin",
          "addressCountry": "IE"
        }
      }
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
