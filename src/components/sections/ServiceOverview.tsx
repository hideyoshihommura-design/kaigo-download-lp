"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { serviceOverviewData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function ServiceOverview() {
  return (
    <section id="service" className="section-padding bg-bg-gray">
      <div className="container-article">
        <SectionTitle title={serviceOverviewData.sectionTitle} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-text-light text-center mb-10 max-w-2xl mx-auto leading-[1.8]"
        >
          {serviceOverviewData.description}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 sm:gap-6 mb-10"
        >
          {serviceOverviewData.highlights.map((item, i) => (
            <div key={i} className="gradient-border-card p-4 sm:p-6 text-center">
              <p className="text-2xl sm:text-4xl font-bold gradient-text mb-1">
                {item.number}
              </p>
              <p className="text-[0.7rem] sm:text-sm text-text-light">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Features list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border-card p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {serviceOverviewData.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm sm:text-base text-text">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
