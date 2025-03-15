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
  title: "Chess For Change | Transforming Lives Through Chess",
  description:
    "We empower communities by teaching chess as a tool for critical thinking, patience, and strategic planning.",
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
