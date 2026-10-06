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
import ScrollFade from "./Components/ScrollFade";
import PageLoader from "./Components/PageLoader";
import { getTotalYearsOfExperience } from "./utils/dateUtils";

export default function Home() {
  const yearsOfExperience = getTotalYearsOfExperience();

  const siteUrl = "https://www.gregorygarcia.dev";
  const personId = `${siteUrl}/#person`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        "name": "Gregory Garcia",
        "alternateName": ["Gregory Barros Garcia", "Greg Garcia"],
        "givenName": "Gregory",
        "familyName": "Garcia",
        "jobTitle": "Senior Front-End Developer (Lead)",
        "description": `Senior Full Stack Developer with ${yearsOfExperience}+ years of experience building web applications end to end, mainly with Node.js, React, Next.js and TypeScript, backed by MongoDB and PostgreSQL. Also experienced with Ruby on Rails, Laravel and C#. Currently leading front-end development at myPatientSpace in Dublin, Ireland.`,
        "url": siteUrl,
        "email": "mailto:gregory.barros@hotmail.com",
        "telephone": "+353834329851",
        "image": {
          "@type": "ImageObject",
          "url": `${siteUrl}/images/profile.jpeg`,
          "width": 480,
          "height": 480,
          "caption": "Gregory Garcia - Senior Full Stack Developer",
        },
        "sameAs": [
          "https://www.linkedin.com/in/gregory-barros-garcia-4160b2157",
          "https://github.com/gregorybgarcia",
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dublin",
          "addressRegion": "Leinster",
          "addressCountry": "IE",
        },
        "worksFor": {
          "@type": "Organization",
          "name": "myPatientSpace",
          "url": "https://www.mypatientspace.com",
        },
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Senior Full Stack Developer",
          "occupationalCategory": "15-1254.00",
          "skills": "Node.js, TypeScript, JavaScript, React, Next.js, MongoDB, PostgreSQL, REST APIs, Ruby on Rails, Laravel, C#, HTML, CSS, Tailwind CSS, Redux",
          "occupationLocation": {
            "@type": "City",
            "name": "Dublin",
          },
        },
        "knowsAbout": [
          "Full Stack Development",
          "Back-End Development",
          "Front-End Development",
          "Node.js",
          "Express",
          "REST APIs",
          "GraphQL",
          "MongoDB",
          "PostgreSQL",
          "SQL",
          "Ruby on Rails",
          "Laravel",
          "C#",
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Redux",
          "Material UI",
          "Jest",
          "Storybook",
          "Git",
          "Figma",
          "Responsive Web Design",
          "Accessibility",
          "Performance Optimization",
          "Agile Development",
          "Healthcare Software",
          "Fintech Applications",
        ],
        "knowsLanguage": [
          { "@type": "Language", "name": "English", "alternateName": "en" },
          { "@type": "Language", "name": "Portuguese", "alternateName": "pt" },
          { "@type": "Language", "name": "Spanish", "alternateName": "es" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "name": "Gregory Garcia",
        "alternateName": "Gregory Garcia Portfolio",
        "url": siteUrl,
        "inLanguage": "en",
        "publisher": { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        "url": siteUrl,
        "name": "Gregory Garcia | Senior Full Stack Developer in Dublin",
        "isPartOf": { "@id": `${siteUrl}/#website` },
        "mainEntity": { "@id": personId },
        "dateCreated": "2024-01-01",
        "dateModified": new Date().toISOString().split("T")[0],
        "inLanguage": "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What technologies does Gregory Garcia work with?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Gregory Garcia is a Senior Full Stack Developer with ${yearsOfExperience}+ years of experience, working mostly with Node.js, React, Next.js and TypeScript, and with MongoDB and PostgreSQL databases. He has also worked with Ruby on Rails, Laravel and C#.`,
            },
          },
          {
            "@type": "Question",
            "name": "Is Gregory Garcia available for hire in Dublin, Ireland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gregory Garcia is based in Dublin, Ireland and is open to new full stack development opportunities, including full-time, contract and remote positions.",
            },
          },
          {
            "@type": "Question",
            "name": "What industries has Gregory Garcia worked in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gregory Garcia has experience in healthcare technology (myPatientSpace), fintech and payment solutions (Dexian/Getnet), accounting software (QYON), and social impact platforms (Incentiv).",
            },
          },
          {
            "@type": "Question",
            "name": "How can I contact Gregory Garcia for job opportunities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can reach Gregory Garcia by email at gregory.barros@hotmail.com or by phone at +353 83 432 9851. You can also connect on LinkedIn or view his work on GitHub.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageLoader />
      <ScrollProgress />
      <ScrollFade />
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
