"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Clock, Phone, Shield } from "lucide-react";
import { downloadFormData } from "@/data/content";

export function DownloadForm() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formContainerRef.current) return;

    // HubSpot form embed script
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/243875500.js";
    script.defer = true;
    formContainerRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <div className="gradient-line" />
      <section id="download" className="section-padding bg-bg-gray">
        <div className="container-article">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border-card p-6 sm:p-10"
          >
            <div className="text-center mb-8">
              <h2 className="section-heading mb-4">
                {downloadFormData.sectionTitle}
              </h2>
              <div className="gradient-line-thin w-20 mx-auto mb-4" />
              <p className="text-sm sm:text-base text-text-light max-w-xl mx-auto">
                {downloadFormData.subtitle}
              </p>
            </div>

            {/* HubSpot form embed */}
            <div ref={formContainerRef} className="mb-8">
              <div
                className="hs-form-frame"
                data-region="na2"
                data-form-id="a6c801c7-9d9e-4bcf-94db-9b39578497e9"
                data-portal-id="243875500"
              />
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {downloadFormData.trust.map((item, i) => {
                const icons = [Clock, Phone, Shield];
                const Icon = icons[i];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-text-muted text-xs sm:text-sm"
                  >
                    <Icon className="w-4 h-4" />
                    {item}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
