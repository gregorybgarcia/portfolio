import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { getTotalYearsOfExperience } from "./utils/dateUtils";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

const yearsOfExperience = getTotalYearsOfExperience();

export const metadata: Metadata = {
  title: "Hire Gregory Garcia | Senior Front-End Developer & React Expert - Dublin, Ireland",
  description: `Senior Front-End Developer with ${yearsOfExperience}+ years building enterprise web applications. Expert in React, Next.js, TypeScript. Available for hire in Dublin, Ireland. Specializing in healthcare, fintech, and enterprise software. Open to remote and on-site opportunities.`,
  keywords: [
    // Job titles (include variations)
    "front-end developer",
    "frontend developer",
    "front end developer",
    "front-end engineer",
    "frontend engineer",
    "web developer",
    "react developer",
    "react engineer",
    "nextjs developer",
    "next.js developer",
    "javascript developer",
    "typescript developer",
    "full stack developer",
    "senior frontend developer",
    "senior react developer",
    "lead frontend developer",
    "ui developer",
    "ui engineer",
    "software engineer",
    "software developer",

    // Technologies
    "React",
    "React.js",
    "Next.js",
    "NextJS",
    "TypeScript",
    "JavaScript",
    "ES6",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Redux",
    "Material UI",
    "responsive design",
    "web development",
    "single page applications",
    "progressive web apps",

    // Location-based (Ireland focus)
    "developer Dublin",
    "developer Ireland",
    "frontend developer Ireland",
    "frontend developer Dublin",
    "react developer Dublin",
    "react developer Ireland",
    "web developer Ireland",
    "web developer Dublin",
    "hire developer Dublin",
    "hire developer Ireland",
    "software engineer Dublin",
    "software engineer Ireland",

    // Availability signals
    "available for hire",
    "looking for opportunities",
    "open to work",
    "contract developer",
    "freelance developer",
    "remote developer",
    "hybrid developer",

    // Experience and credentials
    `${yearsOfExperience} years experience`,
    "senior developer",
    "experienced developer",
    "professional developer",
    "lead developer",
    "healthcare developer",
    "fintech developer",

    // Industry expertise
    "healthcare software developer",
    "fintech developer",
    "enterprise developer",

    // Name variations
    "Gregory Garcia",
    "Gregory Barros Garcia",
    "Greg Garcia",
  ],
  authors: [{ name: "Gregory Garcia" }],
  creator: "Gregory Garcia",
  publisher: "Gregory Garcia",
  openGraph: {
    type: "profile",
    locale: "en_IE",
    url: "https://www.gregorygarcia.dev/",
    title: "Hire Gregory Garcia | Senior Front-End Developer - React & Next.js Expert",
    description: `Senior Front-End Developer with ${yearsOfExperience}+ years of experience. React, Next.js, TypeScript expert. Available for hire in Dublin, Ireland. Open to remote opportunities.`,
    siteName: "Gregory Garcia - Front-End Developer Portfolio",
    images: [
      {
        url: "https://www.gregorygarcia.dev/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Gregory Garcia - Senior Front-End Developer specializing in React and Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gregory Garcia | Senior Front-End Developer - React & Next.js",
    description: `${yearsOfExperience}+ years experience. React, Next.js, TypeScript. Available for hire in Dublin.`,
    images: ["https://www.gregorygarcia.dev/images/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  alternates: {
    canonical: "https://www.gregorygarcia.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7C3AED" />
      </head>
      <body className={roboto.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
