"use client";

import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { RefObject } from "react";

const steps = [
  {
    title: "Map your process",
    description: "Blueprint every workflow in minutes with drag-and-drop templates."
  },
  {
    title: "Add AI copilots",
    description: "Assign automations to each checkpoint and connect the tools you rely on."
  },
  {
    title: "Let Pailot guide the work",
    description: "Launch the flight plan and watch the cockpit update as tasks complete themselves."
  }
];

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 1.4, ease: "easeInOut" } }
};

const HowItWorks = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="how-it-works" className="space-y-16">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">How Pailot charts the route</h2>
        <p className="mx-auto max-w-2xl text-base text-white/70">
          A guided path from mapping to mastery keeps every team aligned.
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
            d="M40 160 C200 20, 400 20, 560 160"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            fill="transparent"
            variants={lineVariants}
          />
        </motion.svg>
        <motion.div
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: ["0%", "100%"], rotate: [0, 12, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-0 top-0 h-full w-full"
        >
          <motion.div
            className="h-10 w-10 rounded-full bg-sky-gradient shadow-glow"
            style={{ offsetPath: "path('M40 160 C200 20, 400 20, 560 160')" }}
          >
            <div className="flex h-full w-full items-center justify-center text-white">
              <PaperAirplaneIcon className="h-5 w-5" />
            </div>
          </motion.div>
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
