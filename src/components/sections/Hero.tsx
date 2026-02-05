"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, FileDown } from "lucide-react";
import { heroData } from "@/data/content";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/kaigo-download-lp/images/Gemini_Generated_Image_70y5jx70y5jx70y5.png)",
          backgroundColor: "#1a1a3e",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container-default relative z-10 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-accent-pink text-white text-xs sm:text-sm font-bold px-4 py-2 rounded mb-4 sm:mb-6">
                {heroData.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[1.5rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.5] sm:leading-tight mb-4 sm:mb-6"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}
            >
              <span className="sm:hidden">
                介護×AI活用の
                <br />
                全体像がわかる
                <br />
                <span className="text-yellow-300">サービス資料</span>
              </span>
              <span className="hidden sm:inline">
                介護×AI活用の全体像がわかる
                <br />
                <span className="text-yellow-300">サービス資料</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[0.8rem] sm:text-lg text-white/90 mb-6 sm:mb-8 leading-[1.8]"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.3)" }}
            >
              カリキュラム詳細、導入事例、
              <br className="sm:hidden" />
              助成金シミュレーション、
              <br className="sm:hidden" />
              料金プランをまとめた資料を
              <br className="sm:hidden" />
              無料でお届けします。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4 md:justify-start justify-center"
            >
              <a href={heroData.ctaLinks.download} className="btn-primary">
                <FileDown className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                {heroData.primaryCta}
              </a>
              <a
                href={heroData.ctaLinks.line}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line"
              >
                <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                {heroData.secondaryCta}
              </a>
            </motion.div>
          </div>

          {/* Right: Document preview card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-card p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileDown className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-text text-lg">サービス資料</p>
                  <p className="text-text-muted text-sm">ホリエモンAI学校 介護校</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {heroData.documentInfo.map((info, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-text-light text-sm">{info.label}</span>
                    <span className="font-bold text-text text-sm">{info.value}</span>
                  </div>
                ))}
              </div>

              <a href="#download" className="btn-primary w-full text-center">
                <FileDown className="mr-2 w-5 h-5" />
                無料でダウンロード
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
