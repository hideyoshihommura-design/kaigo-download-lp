"use client";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { DocumentPreview } from "@/components/sections/DocumentPreview";
import { Benefits } from "@/components/sections/Benefits";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { DownloadForm } from "@/components/sections/DownloadForm";
import { FAQ } from "@/components/sections/FAQ";
import { FloatingCTA } from "@/components/sections/FloatingCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problems />
      <DocumentPreview />
      <Benefits />
      <ServiceOverview />
      <DownloadForm />
      <FAQ />
      <FloatingCTA />
      <Footer />
    </main>
  );
}
