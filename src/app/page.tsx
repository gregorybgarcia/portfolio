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

  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.gregorygarcia.dev/#person",
    "name": "Gregory Garcia",
    "alternateName": ["Gregory Barros Garcia", "Greg Garcia"],
    "givenName": "Gregory",
    "familyName": "Garcia",
    "jobTitle": "Senior Front-End Developer",
    "description": `Senior Front-End Developer with ${yearsOfExperience}+ years of professional experience building modern web applications using React, Next.js, TypeScript, and JavaScript. Specialized in creating responsive, accessible, and performant user interfaces for healthcare, fintech, and enterprise applications. Currently leading front-end development at myPatientSpace in Dublin, Ireland.`,
    "url": "https://www.gregorygarcia.dev",
    "email": "mailto:gregory.barros@hotmail.com",
    "telephone": "+353834329851",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.gregorygarcia.dev/images/profile.jpeg",
      "caption": "Gregory Garcia - Senior Front-End Developer"
    },
    "sameAs": [
      "https://www.linkedin.com/in/gregory-barros-garcia-4160b2157",
      "https://github.com/gregorybgarcia"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dublin",
      "addressRegion": "Leinster",
      "addressCountry": "Ireland"
    },
    "workLocation": {
      "@type": "Place",
      "name": "Dublin, Ireland"
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
      "Jest",
      "Unit Testing",
      "Storybook",
      "Git",
      "Figma",
      "UI/UX Design",
      "Agile Development",
      "RESTful APIs",
      "GraphQL",
      "Performance Optimization",
      "Accessibility",
      "Mobile-first Design",
      "Single Page Applications",
      "Progressive Web Apps",
      "Healthcare Software",
      "Fintech Applications"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Front-End Developer",
      "occupationalCategory": "15-1254.00",
      "skills": "React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Redux, Material UI, Node.js",
      "experienceRequirements": `${yearsOfExperience} years`
    },
    "worksFor": {
      "@type": "Organization",
      "name": "myPatientSpace",
      "description": "Healthcare Technology Company"
    },
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": "Portuguese",
        "alternateName": "pt"
      },
      {
        "@type": "Language",
        "name": "Spanish",
        "alternateName": "es"
      }
    ],
    "award": [
      "11+ Professional Certificates",
      "20+ Technologies Mastered",
      "50+ Projects Contributed"
    ]
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gregory Garcia - Senior Front-End Developer Portfolio",
    "alternateName": "Gregory Garcia Portfolio",
    "url": "https://www.gregorygarcia.dev",
    "description": "Professional portfolio of Gregory Garcia, a Senior Front-End Developer specializing in React, Next.js, and TypeScript. Available for hire in Dublin, Ireland.",
    "author": {
      "@id": "https://www.gregorygarcia.dev/#person"
    },
    "inLanguage": "en"
  };

  const jsonLdProfilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@id": "https://www.gregorygarcia.dev/#person"
    },
    "dateCreated": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What technologies does Gregory Garcia specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Gregory Garcia is a Senior Front-End Developer with ${yearsOfExperience}+ years of experience specializing in React, Next.js, TypeScript, and JavaScript. He also has expertise in Tailwind CSS, Redux, Node.js, and modern web development practices.`
        }
      },
      {
        "@type": "Question",
        "name": "Is Gregory Garcia available for hire in Dublin, Ireland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Gregory Garcia is currently based in Dublin, Ireland and is open to new opportunities in front-end development. He is available for full-time, contract, and remote positions."
        }
      },
      {
        "@type": "Question",
        "name": "What industries has Gregory Garcia worked in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gregory Garcia has extensive experience in healthcare technology (myPatientSpace), fintech and payment solutions (Dexian/Getnet), accounting software (QYON), and social platforms (Incentiv)."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Gregory Garcia for job opportunities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach Gregory Garcia via email at gregory.barros@hotmail.com or phone at +353 83 432 9851. You can also connect on LinkedIn or view his work on GitHub."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfilePage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
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
