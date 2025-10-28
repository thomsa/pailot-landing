"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { RefObject } from "react";
import { useTranslations } from 'next-intl';

const getSteps = (t: any) => [
  {
    title: t('discoveryCall.title'),
    description: t('discoveryCall.description')
  },
  {
    title: t('customDesign.title'),
    description: t('customDesign.description')
  },
  {
    title: t('launchSupport.title'),
    description: t('launchSupport.description')
  }
];

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 1.4, ease: "easeInOut" } }
};

const HowItWorks = () => {
  const t = useTranslations('howItWorks');
  const { ref, controls } = useScrollReveal();
  const steps = getSteps(t);

  return (
    <section id="how-it-works" className="space-y-16">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t('headline')}</h2>
        <p className="mx-auto max-w-2xl text-base text-white/70">
          {t('description')}
        </p>
      </div>
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
      >
        <motion.svg
          initial="hidden"
          animate={controls}
          variants={lineVariants}
          viewBox="0 0 600 200"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00C6FF" />
              <stop offset="100%" stopColor="#1E90FF" />
            </linearGradient>
          </defs>
          <motion.path
            d="M40 160 Q200 40, 560 20"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            fill="transparent"
            variants={lineVariants}
          />
        </motion.svg>
        <motion.div
          className="pointer-events-none absolute left-0 top-0 h-full w-full"
          style={{
            offsetPath: "path('M40 160 Q200 40, 560 20')",
          }}
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-10 w-10 -translate-x-5 -translate-y-5 rounded-full bg-sky-gradient shadow-glow flex items-center justify-center text-white">
            <Rocket className="h-5 w-5" />
          </div>
        </motion.div>
        <div className="relative grid gap-12 pt-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              transition={{ delay: 0.2 * index, duration: 0.6, ease: "easeOut" }}
              className="space-y-4 text-center md:text-left"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white/80">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-white/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
