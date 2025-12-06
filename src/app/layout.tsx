import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { getTotalYearsOfExperience } from "./utils/dateUtils";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

const yearsOfExperience = getTotalYearsOfExperience();

export const metadata: Metadata = {
  title: "Hire Gregory Garcia | Senior Front-End Developer & React Expert - Dublin",
  description: `Experienced Front-End Developer with ${yearsOfExperience}+ years building modern web applications. Expert in React, Next.js, TypeScript, and JavaScript. Available for hire in Dublin, Ireland. Proven track record in healthcare, fintech, and enterprise software development.`,
  keywords: [
    // Job titles recruiters search for
    "front-end developer",
    "frontend developer",
    "front end developer",
    "web developer",
    "react developer",
    "nextjs developer",
    "next.js developer",
    "javascript developer",
    "typescript developer",
    "full stack developer",
    "senior frontend developer",
    "senior react developer",
    "ui developer",
    "software engineer",
    "software developer",

    // Technologies
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Redux",
    "Material UI",
    "responsive design",
    "web development",

    // Location-based
    "developer Dublin",
    "frontend developer Ireland",
    "react developer Dublin",
    "web developer Ireland",
    "hire developer Dublin",

    // Experience indicators
    `${yearsOfExperience} years experience`,
    "senior developer",
    "experienced developer",
    "professional developer",

    // Name
    "Gregory Garcia",
    "Gregory Barros Garcia",
  ],
  authors: [{ name: "Gregory Garcia" }],
  creator: "Gregory Garcia",
  publisher: "Gregory Garcia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gregorygarcia.dev/",
    title: "Hire Gregory Garcia | Senior Front-End Developer - React & Next.js Expert",
    description: `Experienced Front-End Developer with ${yearsOfExperience}+ years. React, Next.js, TypeScript expert. Available for hire in Dublin, Ireland.`,
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
      <body className={roboto.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
