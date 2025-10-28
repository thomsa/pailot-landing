"use client";

import { Button } from "@heroui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const glow = useTransform(scrollYProgress, [0, 1], [0.4, 0.1]);
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B132B]/70 px-8 py-24 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl md:px-16">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Image
          src="/plane-bg.svg"
          alt="Flight path background"
          fill
          priority
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="object-cover opacity-70"
        />
      </motion.div>
      <motion.div
        style={{ rotate }}
        className="pointer-events-none absolute right-[-8rem] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-sky-gradient blur-3xl"
      />
      <div className="relative grid gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] md:items-center">
        <div className="space-y-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
          >
            Your AI business pilot
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Your AI Business Pilot.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="max-w-xl text-lg text-white/70"
          >
            Pailot connects your tools, automates your workflows, and keeps your business running smoothly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              as={Link}
              href="/get-started"
              radius="full"
              className="gradient-border relative overflow-hidden bg-sky-gradient px-8 py-3 text-base font-semibold text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              Take Off
            </Button>
            <Link href="#features" className="text-sm font-semibold text-white/70 transition-colors duration-300 hover:text-white">
              See how it works →
            </Link>
          </motion.div>
        </div>
        <motion.div
          style={{ y: floatY, opacity: glow }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-3xl" />
          <motion.div
            animate={{ rotate: [0, 5, -5, 0], y: [0, -10, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative grid h-full place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl"
          >
            <div className="grid place-items-center rounded-full border border-white/10 bg-black/60 p-10 text-center text-white">
              <span className="text-sm uppercase tracking-[0.5em] text-white/50">Pailot</span>
              <p className="mt-4 text-2xl font-semibold">Autopilot<br />for work</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
