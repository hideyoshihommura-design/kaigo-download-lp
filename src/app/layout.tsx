import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "【無料】ホリエモンAI学校 介護校｜サービス資料ダウンロード",
  description:
    "介護業界特化のAI活用スクール「ホリエモンAI学校 介護校」のサービス資料を無料でダウンロード。カリキュラム詳細、導入事例、助成金活用シミュレーション、料金プランをまとめた資料をお届けします。",
  keywords: [
    "介護 AI 研修 資料",
    "介護 DX 資料請求",
    "助成金 AI研修",
    "ホリエモン AI学校 資料",
    "介護 業務効率化",
  ],
  openGraph: {
    title: "【無料】ホリエモンAI学校 介護校｜サービス資料ダウンロード",
    description:
      "介護記録・ケアプラン作成をAIで効率化。カリキュラム詳細、導入事例、助成金シミュレーションをまとめた資料を無料でお届けします。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
