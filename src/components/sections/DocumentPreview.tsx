"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { documentPreviewData } from "@/data/content";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function DocumentPreview() {
  return (
    <section id="preview" className="section-padding bg-bg-gray">
      <div className="container-default">
        <SectionTitle
          title={documentPreviewData.sectionTitle}
          subtitle={documentPreviewData.subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {documentPreviewData.chapters.map((chapter, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gradient-border-card p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {chapter.number}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-text mb-2">
                    {chapter.title}
                  </h3>
                  <p className="text-[0.75rem] sm:text-sm text-text-light leading-[1.7]">
                    {chapter.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="#download" className="btn-primary">
            <BookOpen className="mr-2 w-5 h-5" />
            資料を無料でダウンロード
          </a>
        </motion.div>
      </div>
    </section>
  );
}
