"use client";

import { motion } from "framer-motion";
import { FileText, Calculator, TrendingUp, Presentation } from "lucide-react";
import { benefitsData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

const iconMap = {
  FileText,
  Calculator,
  TrendingUp,
  Presentation,
};

export function Benefits() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-default">
        <SectionTitle title={benefitsData.sectionTitle} />

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {benefitsData.benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 sm:gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-text mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[0.75rem] sm:text-sm text-text-light leading-[1.8]">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
