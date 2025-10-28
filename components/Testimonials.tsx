"use client";

import { Button } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Pailot gives us a control tower view of every workflow. Our team saves hours each week because the platform keeps everything synchronized.",
    name: "Aria Gomez",
    role: "COO, Northwind Studio"
  },
  {
    quote:
      "We plugged in our CRM and docs in minutes. The automations Pailot suggested were spot on, and approvals feel effortless now.",
    name: "Jared Chen",
    role: "Founder, DeltaForge"
  },
  {
    quote:
      "It feels like a calm, confident pilot guiding our operations. Visibility and security were non-negotiable, and Pailot nailed both.",
    name: "Maya Patel",
    role: "Head of Operations, AeroSync"
  }
];

const transition = { duration: 0.6, ease: "easeInOut" };

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="space-y-12">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Trusted by teams that lead the way</h2>
        <p className="mx-auto max-w-2xl text-base text-white/70">
          Feedback from operators who run on Pailot every day.
        </p>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B132B]/90 via-[#091027]/90 to-[#050816]/90 p-12 shadow-glow">
        <div className="absolute inset-0 bg-gradient-to-r from-electric/20 via-sky-light/10 to-transparent blur-3xl" />
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={transition}
              className="flex flex-col gap-6 text-center"
            >
              <p className="text-xl font-medium text-white/90 md:text-2xl">“{testimonials[activeIndex].quote}”</p>
              <div className="flex flex-col items-center text-sm text-white/60">
                <span className="font-semibold text-white/80">{testimonials[activeIndex].name}</span>
                <span>{testimonials[activeIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              variant="light"
              onPress={prev}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/20"
            >
              Prev
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.span
                  key={index}
                  className="h-2 w-6 rounded-full bg-white/20"
                  animate={{
                    width: activeIndex === index ? 32 : 24,
                    backgroundColor: activeIndex === index ? "#1E90FF" : "rgba(255,255,255,0.2)"
                  }}
                  transition={transition}
                />
              ))}
            </div>
            <Button
              variant="light"
              onPress={next}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/20"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
