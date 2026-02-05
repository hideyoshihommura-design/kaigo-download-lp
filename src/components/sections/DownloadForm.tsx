"use client";

import { motion } from "framer-motion";
import { Clock, Phone, Shield } from "lucide-react";
import { downloadFormData } from "@/data/content";

export function DownloadForm() {
  const isFormConfigured = downloadFormData.formUrl !== "FORM_URL_HERE";

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

            {/* External form embed */}
            <div className="mb-8">
              {isFormConfigured ? (
                <iframe
                  src={downloadFormData.formUrl}
                  width="100%"
                  height="600"
                  style={{ border: "none" }}
                  title="資料ダウンロードフォーム"
                />
              ) : (
                <div className="bg-bg-gray rounded-2xl p-8 sm:p-12 text-center">
                  <p className="text-text-muted text-sm mb-2">
                    外部フォームがここに埋め込まれます
                  </p>
                  <p className="text-text-muted text-xs">
                    data/content.ts の <code className="bg-white px-2 py-1 rounded text-primary font-mono">formUrl</code> を
                    HubSpotフォームやGoogleフォームのURLに差し替えてください
                  </p>
                </div>
              )}
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
