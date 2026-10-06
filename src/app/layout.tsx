import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { getTotalYearsOfExperience } from "./utils/dateUtils";
import { INTRO_SEEN_KEY } from "./utils/heroIntro";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-mono" });

const yearsOfExperience = getTotalYearsOfExperience();

const siteUrl = "https://www.gregorygarcia.dev";
const title = "Gregory Garcia | Senior Full Stack Developer in Dublin";
const description = `Senior Full Stack Developer in Dublin, Ireland with ${yearsOfExperience}+ years of experience. Node.js, React, Next.js, TypeScript, MongoDB and PostgreSQL. Open to new opportunities.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Gregory Garcia",
  },
  description,
  applicationName: "Gregory Garcia Portfolio",
  keywords: [
    "Gregory Garcia",
    "Gregory Barros Garcia",
    "full stack developer",
    "senior full stack developer",
    "node.js developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "frontend developer",
    "backend developer",
    "software engineer",
    "MongoDB",
    "PostgreSQL",
    "full stack developer Dublin",
    "full stack developer Ireland",
    "react developer Dublin",
    "software engineer Dublin",
    "healthcare software developer",
    "fintech developer",
  ],
  authors: [{ name: "Gregory Garcia", url: siteUrl }],
  creator: "Gregory Garcia",
  publisher: "Gregory Garcia",
  category: "technology",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_IE",
    url: "/",
    siteName: "Gregory Garcia",
    title,
    description,
    firstName: "Gregory",
    lastName: "Garcia",
    username: "gregorybgarcia",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#7C3AED",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Before first paint: on repeat visits, hide the hero intro so it doesn't flash before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("${INTRO_SEEN_KEY}")==="1")document.documentElement.setAttribute("data-intro-seen","")}catch(e){}`,
          }}
        />
      </head>
      <body className={`${roboto.className} ${mono.variable}`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
