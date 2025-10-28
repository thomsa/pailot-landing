"use client";

import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import {
  Wrench,
  Brain,
  Users,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { RefObject } from "react";
import { useTranslations } from 'next-intl';

const getFeatures = (t: any) => [
  {
    title: t('seamlessIntegration.title'),
    description: t('seamlessIntegration.description'),
    icon: Wrench
  },
  {
    title: t('customBuilt.title'),
    description: t('customBuilt.description'),
    icon: Brain
  },
  {
    title: t('smbFocused.title'),
    description: t('smbFocused.description'),
    icon: Users
  },
  {
    title: t('rapidImplementation.title'),
    description: t('rapidImplementation.description'),
    icon: Zap
  },
  {
    title: t('secureCompliant.title'),
    description: t('secureCompliant.description'),
    icon: Shield
  },
  {
    title: t('measurableROI.title'),
    description: t('measurableROI.description'),
    icon: TrendingUp
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12, duration: 0.6, ease: "easeOut" }
  })
};

const Features = () => {
  const t = useTranslations('features');
  const { ref, controls } = useScrollReveal();
  const features = getFeatures(t);

  return (
    <section id="features" className="space-y-12">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{t('headline')}</h2>
        <p className="mx-auto max-w-2xl text-base text-white/70">
          {t('description')}
        </p>
      </div>
      <div ref={ref as RefObject<HTMLDivElement>} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div key={feature.title} custom={index} initial="hidden" animate={controls} variants={cardVariants}>
              <Card className="group h-full border border-white/10 bg-white/5 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-glow">
                <CardBody className="space-y-6 p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-gradient/40 text-white shadow-inner">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
