import type { Metadata, Viewport } from "next";
// stubbed for offline sandbox build
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import BackToTopButton from "@/components/layout/BackToTopButton";
import PageTransition from "@/components/layout/PageTransition";

const sora = { variable: "--font-display" };
const inter = { variable: "--font-body" };
const jetbrainsMono = { variable: "--font-mono" };

const siteUrl = "https://rafianaz.com"; // Replace with your actual site URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rafia Naz | Web Developer & Agentic AI Developer",
    template: "%s | Rafia Naz",
  },
  description:
    "Portfolio of Rafia Naz — Final-Year Mechanical Engineering student, Web Developer, and Agentic AI Developer building AI-powered web applications with Next.js and TypeScript.",
  keywords: [
    "Rafia Naz",
    "Web Developer",
    "Agentic AI Developer",
    "Next.js Developer",
    "Mechanical Engineering",
    "TypeScript",
    "AI Integration",
    "University of Sargodha",
  ],
  authors: [{ name: "Rafia Naz", url: siteUrl }],
  creator: "Rafia Naz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Rafia Naz Web Developer & Agentic AI Developer",
    description:
      "Portfolio of Rafia Naz — Final Year Mechanical Engineering student, Web Developer, and Agentic AI Developer building AI powered web applications.",
    siteName: "Rafia Naz Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rafia Naz — Web Developer & Agentic AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafia Naz | Web Developer & Agentic AI Developer",
    description:
      "Portfolio of Rafia Naz — Final Year Mechanical Engineering student, Web Developer, and Agentic AI Developer.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background font-body text-foreground`}
      >
        <LoadingScreen />
       <ScrollProgressBar />
        <Navbar />
        <PageTransition>
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
        </PageTransition>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
