"use client";

import { Button } from "@heroui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Sparkles, Target, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const glow = useTransform(scrollYProgress, [0, 1], [0.4, 0.1]);
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden rounded-3xl border border-border-color bg-card-bg px-8 py-24 md:px-16"
    >
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
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70"
          >
            <Sparkles className="h-3 w-3" />
            {t("badge")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {t("headline")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="max-w-xl text-lg text-foreground/70"
          >
            {t("description")}
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
              {t("cta")}
            </Button>
            <Link
              href="#features"
              className="text-sm font-semibold text-foreground/70 transition-colors duration-300 hover:text-foreground"
            >
              {t("learnMore")} →
            </Link>
          </motion.div>
        </div>
        <motion.div
          style={{ y: floatY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-light/20 to-electric/20 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative aspect-square overflow-hidden rounded-2xl border border-border-color bg-card-bg "
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                alt="Business professional"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="relative aspect-square overflow-hidden rounded-2xl border border-border-color bg-card-bg"
            >
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                alt="Business team member"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative aspect-square overflow-hidden rounded-2xl border border-border-color bg-card-bg"
            >
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
                alt="Business leader"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="relative aspect-square overflow-hidden rounded-2xl border border-border-color bg-card-bg"
            >
              <Image
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
                alt="Business professional"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-6 text-foreground/70"
          >
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-sky-light" />
              <span className="text-sm">Tailored</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-sky-light" />
              <span className="text-sm">Powerful</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
