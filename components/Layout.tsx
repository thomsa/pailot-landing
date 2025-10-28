"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <HeroUIProvider>
        <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(30,144,255,0.15),_transparent_55%)]">
          <Navbar />
          <main className="mx-auto flex w-full max-w-6xl flex-col gap-32 px-6 pb-32 pt-32 md:px-12 lg:px-16">
            {children}
          </main>
          <Footer />
        </div>
      </HeroUIProvider>
    </ThemeProvider>
  );
};

export default Layout;
