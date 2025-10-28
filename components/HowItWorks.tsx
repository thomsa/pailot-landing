"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { RefObject } from "react";
import { useTranslations } from "next-intl";

const getSteps = (t: any) => [
  {
    title: t("discoveryCall.title"),
    description: t("discoveryCall.description"),
  },
  {
    title: t("customDesign.title"),
    description: t("customDesign.description"),
  },
  {
    title: t("launchSupport.title"),
    description: t("launchSupport.description"),
  },
];

const HowItWorks = () => {
  const t = useTranslations("howItWorks");
  const { ref, controls } = useScrollReveal();
  const steps = getSteps(t);

  return (
    <section id="how-it-works" className="space-y-16">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          {t("headline")}
        </h2>
        <p className="mx-auto max-w-2xl text-base text-foreground/70">
          {t("description")}
        </p>
      </div>
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
      >
        <div className="relative grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              transition={{
                delay: 0.2 * index,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="space-y-4 text-center md:text-left"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-sm font-semibold text-foreground/80">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-foreground/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
