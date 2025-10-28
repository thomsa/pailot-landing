import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Pailot — Your AI Business Pilot",
  description:
    "Pailot is the AI cockpit for your company workflows. Connect tools, automate tasks, and keep every process on course.",
  openGraph: {
    title: "Pailot — Your AI Business Pilot",
    description:
      "Pailot is the AI cockpit for your company workflows. Connect tools, automate tasks, and keep every process on course.",
    url: "https://pailot.app",
    siteName: "Pailot",
    images: [
      {
        url: "https://pailot.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pailot preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pailot — Your AI Business Pilot",
    description:
      "Pailot connects your tools, automates workflows, and keeps your business running smoothly.",
    images: ["https://pailot.app/og-image.jpg"]
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
