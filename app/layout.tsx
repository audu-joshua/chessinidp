import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import ThemeProvider from "@/components/theme-provider";
import SiteFooter from "@/components/site-footer";
import LoaderPage from "@/components/loader-page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QueenV Chess Academy | Transforming Lives Through Chess",
  description:
    "We empower communities by teaching chess as a tool for critical thinking, patience, and strategic planning.",
  openGraph: {
    title: "QueenV Chess Academy | Transforming Lives Through Chess",
    description:
      "We empower communities by teaching chess as a tool for critical thinking, patience, and strategic planning.",
    images: [
      {
        url: "/og-image.jpg", // Use your PNG image here
        width: 1200,
        height: 630,
        alt: "QueenV Chess Academy - Transforming Lives Through Chess",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QueenV Chess Academy | Transforming Lives Through Chess",
    description:
      "We empower communities by teaching chess as a tool for critical thinking, patience, and strategic planning.",
    images: ["/og-image.jpg"], // PNG works here too
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <LoaderPage />
          <SiteHeader />
          {children} 
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
