// ===== HEADER NAV =====
export const headerData = {
  logo: "ホリエモンAI学校 介護校",
  navItems: [
    { label: "資料の内容", href: "#preview" },
    { label: "こんな課題に", href: "#problems" },
    { label: "サービス概要", href: "#service" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "資料をダウンロード", href: "#download" },
};

// ===== HERO =====
export const heroData = {
  badge: "無料ダウンロード",
  headline: "介護×AI活用の\n全体像がわかる\nサービス資料",
  subheadline:
    "カリキュラム詳細、導入事例、助成金シミュレーション、料金プランをまとめた資料を無料でお届けします。",
  primaryCta: "今すぐ無料でダウンロード",
  secondaryCta: "LINEで相談する",
  ctaLinks: {
    download: "#download",
    line: "https://lin.ee/4V3MBVn",
  },
  documentInfo: [
    { label: "ページ数", value: "全32ページ" },
    { label: "形式", value: "PDF" },
    { label: "料金", value: "無料" },
  ],
};

// ===== PROBLEMS =====
export const problemsData = {
  sectionTitle: "こんな課題をお持ちの方へ",
  problems: [
    {
      icon: "Users" as const,
      title: "人手不足で業務が回らない",
      description:
        "採用しても定着しない。一人あたりの業務量は増える一方で、記録業務に追われて本来のケアに集中できない。",
    },
    {
      icon: "ClipboardList" as const,
      title: "AI活用の方法がわからない",
      description:
        "AIが業務効率化に使えるとは聞くが、介護現場で具体的にどう使えるのか、何から始めればいいのか見当がつかない。",
    },
    {
      icon: "UserCog" as const,
      title: "研修コストを抑えたい",
      description:
        "AI研修に興味はあるが、費用対効果が見えない。助成金が使えるらしいが、申請手続きが複雑で手が出せない。",
    },
  ],
  transition:
    "この資料では、これらの課題に対する具体的な解決策と、ホリエモンAI学校 介護校のサービス内容をわかりやすくご紹介しています。",
};

// ===== DOCUMENT PREVIEW =====
export const documentPreviewData = {
  sectionTitle: "資料でわかること",
  subtitle: "全32ページで介護×AI活用の全体像を解説",
  chapters: [
    {
      number: 1,
      title: "介護業界のAI活用の現状",
      description: "なぜ今、介護現場にAIが必要なのか。業界の課題とAI活用のトレンドを解説。",
    },
    {
      number: 2,
      title: "ホリエモンAI学校 介護校とは",
      description: "サービスの特長、カリキュラム構成、学習の進め方を紹介。",
    },
    {
      number: 3,
      title: "具体的な活用事例",
      description: "介護記録、ケアプラン作成、シフト管理など、現場での具体的なAI活用シーンを紹介。",
    },
    {
      number: 4,
      title: "導入施設の成果",
      description: "受講者の声と、業務効率化の具体的な数値データを掲載。",
    },
    {
      number: 5,
      title: "料金プラン・助成金シミュレーション",
      description: "個人プラン・法人プランの詳細と、助成金活用時の費用シミュレーション。",
    },
    {
      number: 6,
      title: "導入の流れ・サポート体制",
      description: "お申し込みから受講開始までのステップと、充実のサポート体制を解説。",
    },
  ],
};

// ===== BENEFITS =====
export const benefitsData = {
  sectionTitle: "この資料を読むメリット",
  benefits: [
    {
      icon: "FileText" as const,
      title: "介護×AIの全体像が5分でわかる",
      description:
        "AIの専門知識は不要。介護現場でAIがどう使えるか、具体例とともにわかりやすく解説しています。",
    },
    {
      icon: "Calculator" as const,
      title: "費用シミュレーションで予算が見える",
      description:
        "個人プラン・法人プランの料金に加え、助成金を活用した場合の実質負担額をシミュレーションで確認できます。",
    },
    {
      icon: "TrendingUp" as const,
      title: "導入施設の成果データで説得力",
      description:
        "介護記録40%短縮、ケアプラン作成58%短縮など、実際の導入施設で出ている成果を数字で確認できます。",
    },
    {
      icon: "Presentation" as const,
      title: "社内稟議にそのまま使える",
      description:
        "上長への説明や社内稟議に必要な情報がまとまっているので、検討資料としてそのまま活用できます。",
    },
  ],
};

// ===== SERVICE OVERVIEW =====
export const serviceOverviewData = {
  sectionTitle: "ホリエモンAI学校 介護校とは",
  description:
    "プログラミング不要。介護記録、ケアプラン作成、シフト管理など、介護現場の実務をAIで効率化する方法を学ぶ、介護業界特化型AIスクールです。",
  highlights: [
    { number: "240+", label: "講義が受講し放題" },
    { number: "10", label: "コースから選べる" },
    { number: "75%", label: "助成金で最大OFF" },
  ],
  features: [
    "介護業界に特化した実践カリキュラム",
    "1本10〜15分の短尺動画でスキマ時間に学習",
    "講師にいつでも質問可能なサポート体制",
    "助成金申請サポート付き（提携社労士紹介）",
  ],
};

// ===== DOWNLOAD FORM =====
export const downloadFormData = {
  sectionTitle: "無料で資料をダウンロード",
  subtitle: "以下のフォームにご入力ください。入力完了後、すぐに資料をダウンロードいただけます。",
  trust: [
    "入力は30秒で完了",
    "営業電話はしません",
    "個人情報は厳重に管理",
  ],
};

// ===== FAQ =====
export const faqData = {
  sectionTitle: "よくある質問",
  items: [
    {
      question: "資料のダウンロードに費用はかかりますか？",
      answer:
        "いいえ、完全に無料です。フォームにご入力いただくだけで、すぐに資料をダウンロードいただけます。",
    },
    {
      question: "資料をダウンロードすると営業電話がかかってきますか？",
      answer:
        "いいえ、営業電話は一切行っておりません。ご希望の方にのみ、メールで追加情報をお送りする場合がございます。",
    },
    {
      question: "個人でも資料をダウンロードできますか？",
      answer:
        "はい、個人の方でもダウンロードいただけます。個人プランの詳細も資料に含まれています。",
    },
    {
      question: "助成金の詳細も資料に書いてありますか？",
      answer:
        "はい、人材開発支援助成金の概要と、法人プランに適用した場合の費用シミュレーションを掲載しています。詳しい申請手続きについては、別途ご相談ください。",
    },
    {
      question: "資料の内容について質問したい場合はどうすればいいですか？",
      answer:
        "LINEまたはお問い合わせフォームからお気軽にご連絡ください。担当者が回答いたします。",
    },
  ],
};

// ===== FOOTER =====
export const footerData = {
  company: "ホリエモンAI学校 介護校",
  links: [
    { label: "運営会社", href: "#" },
    { label: "プライバシーポリシー", href: "#" },
    { label: "特定商取引法に基づく表記", href: "https://horiemon.ai/tokushoho" },
    { label: "お問い合わせ", href: "#" },
  ],
  copyright: `© ${new Date().getFullYear()} ホリエモンAI学校 介護校 All Rights Reserved.`,
};
