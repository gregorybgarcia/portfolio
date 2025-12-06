import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { getTotalYearsOfExperience } from "./utils/dateUtils";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

const yearsOfExperience = getTotalYearsOfExperience();

export const metadata: Metadata = {
  title: "Gregory Garcia | Senior Front-End Developer",
  description: `Senior Front-End Developer with ${yearsOfExperience}+ years of experience specializing in React, Next.js, and TypeScript. Building exceptional web experiences for healthcare, fintech, and enterprise applications.`,
  keywords: [
    "Gregory Garcia",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Development",
    "JavaScript",
    "Senior Developer",
    "myPatientSpace",
    "Healthcare Technology",
    "Dublin Ireland",
  ],
  authors: [{ name: "Gregory Garcia" }],
  creator: "Gregory Garcia",
  publisher: "Gregory Garcia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gregorygarcia.dev/",
    title: "Gregory Garcia | Senior Front-End Developer",
    description: "Senior Front-End Developer specializing in React, Next.js, and TypeScript. Creating exceptional web experiences.",
    siteName: "Gregory Garcia Portfolio",
    images: [
      {
        url: "https://www.gregorygarcia.dev/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Gregory Garcia - Senior Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gregory Garcia | Senior Front-End Developer",
    description: "Senior Front-End Developer specializing in React, Next.js, and TypeScript.",
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
