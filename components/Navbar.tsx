"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = resolvedTheme === "light";

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <Link
          href="#top"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-foreground"
        >
          <Image
            src="/logo.svg"
            alt="Pailot"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="hidden text-foreground/90 md:inline">Pailot</span>
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium text-foreground/70 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(isLight ? "dark" : "light")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-all duration-300 hover:bg-foreground/20"
          >
            {mounted && isLight ? (
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </button>
          <Button
            as={Link}
            href="/get-started"
            size="sm"
            radius="full"
            className="gradient-border relative overflow-hidden bg-foreground/5 px-6 font-semibold text-foreground shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/10"
          >
            Take Off
          </Button>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground/10 text-foreground md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden"
        >
          <div className="space-y-6 px-6 pb-8 text-sm font-medium text-foreground/80">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-full border border-white/10 px-4 py-3 text-center transition-colors duration-300 hover:border-white/30 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between">
              <span className="text-foreground/70">Theme</span>
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(isLight ? "dark" : "light")}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-all duration-300 hover:bg-foreground/20"
              >
                {mounted && isLight ? (
                  <MoonIcon className="h-5 w-5" />
                ) : (
                  <SunIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            <Button
              as={Link}
              href="/get-started"
              size="md"
              radius="full"
              className="gradient-border relative w-full overflow-hidden bg-foreground/5 py-3 font-semibold text-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 hover:bg-foreground/10"
            >
              Take Off
            </Button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;
