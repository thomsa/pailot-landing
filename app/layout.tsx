import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Pailot — Custom AI Solutions for SMBs",
  description:
    "Custom-tailored AI agents built specifically for small and medium-sized businesses. Stop settling for generic tools—get AI that understands your business.",
  openGraph: {
    title: "Pailot — Custom AI Solutions for SMBs",
    description:
      "Custom-tailored AI agents built specifically for small and medium-sized businesses. Stop settling for generic tools—get AI that understands your business.",
    url: "https://pailot.app",
    siteName: "Pailot",
    images: [
      {
        url: "https://pailot.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pailot - Custom AI for SMBs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pailot — Custom AI Solutions for SMBs",
    description:
      "Custom-tailored AI agents built specifically for small and medium-sized businesses. Get AI that actually works for your needs.",
    images: ["https://pailot.app/og-image.jpg"],
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const messages = await getMessages();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
