"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050816]/80 px-10 py-16 text-center shadow-glow">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">It’s time to put your business on autopilot.</h2>
        <p className="mx-auto max-w-2xl text-base text-white/70">
          Join the waitlist and be the first to experience your AI business pilot.
        </p>
        <Button
          as={Link}
          href="/signup"
          radius="full"
          size="lg"
          className="gradient-border relative overflow-hidden bg-sky-gradient px-10 py-4 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          Join the Waitlist
        </Button>
      </motion.div>
    </section>
  );
};

export default CTA;
