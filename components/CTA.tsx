"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const CTA = () => {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border-color bg-background/80 px-10 py-16 text-center shadow-glow">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          {t("headline")}
        </h2>
        <p className="mx-auto max-w-2xl text-base text-foreground/70">
          {t("description")}
        </p>
        <Button
          as={Link}
          href="/get-started"
          radius="full"
          size="lg"
          className="gradient-border relative overflow-hidden bg-sky-gradient px-10 py-4 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          <span className="flex items-center gap-2">
            {t("button")}
            <ArrowRight className="h-5 w-5" />
          </span>
        </Button>
      </motion.div>
    </section>
  );
};

export default CTA;
