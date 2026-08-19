"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "id" | "en" | "ja";

const translations: Record<Language, Record<string, string>> = {
  en: {
    Home: "Home", About: "About", Products: "Products", Contact: "Contact",
    "About Us": "About Us", "Our Products": "Our Products", "Learn More": "Learn More",
    "Why Choose Us": "Why Choose Us", "Our Advantages": "Our Advantages",
    "Our Product Categories": "Our Product Categories",
    "Contact Us": "Contact Us", "Need Help Choosing the Right Product?": "Need Help Choosing the Right Product?",
    "View All Products": "View All Products", "Our Values": "Our Values", "Our Direction": "Our Direction",
    "Vision & Mission": "Vision & Mission", "Who We Are?": "Who We Are?", "Industrial Solutions": "Industrial Solutions",
    "Certified Products": "Certified Products", "Official Warranty": "Official Warranty", "Competitive Pricing": "Competitive Pricing", "Fast Shipping": "Fast Shipping",
    Vision: "Vision", Mission: "Mission", Integrity: "Integrity", Partnership: "Partnership", Innovation: "Innovation", Quality: "Quality",
    "Product": "Product", "Items": "Items", "Product List": "Product List", "Product Category": "Product Category", "Back to All Products": "Back to All Products",
    "Interested in This Products?": "Interested in This Products?", "Send Email": "Send Email", "Call Now": "Call Now", "Chat WhatsApp": "Chat WhatsApp",
    Email: "Email", Phone: "Phone", WhatsApp: "WhatsApp", "Visit Our Office": "Visit Our Office", Address: "Address", "Operational Hours": "Operational Hours", "Direct Contact": "Direct Contact",
    "Quick Links": "Quick Links", "All rights reserved.": "著作権所有",
    "About PT. METINDO": "About PT. METINDO", "A trading company and supplier of high quality machinery products, trusted by hundreds of clients across Indonesia.": "A trading company and supplier of high quality machinery products, trusted by hundreds of clients across Indonesia.",
    "3 Years": "3 Years", "Our company description": "PT. METINDO TECH INDONESIA is a company engaged in trading and the supply of machinery and industrial products. We are committed to providing high quality products and solutions tailored to the needs of customers across various industrial sectors in Indonesia.",
    "Our experience description": "With our experience and understanding of industrial needs, we continue to build long term relationships with customers and partners by providing quality products, professional services, and reliable technical support.",
    "Our team description": "Our team is ready to assist customers in finding the right products and solutions to support operational efficiency and ensure smooth business operations.",
    "Our Values Description": "The principles that guide every step we take to build trust, provide the best service, and deliver valuable solutions for our customers.",
    "Our Direction Description": "Our commitment to delivering the best industrial solutions through quality, exceptional service, and continuous innovation.",
    "Vision Description": "To become a trusted and leading company in providing integrated, innovative, and sustainable industrial solutions that create added value for customers and all stakeholders.",
    "Mission Description": "Providing the best solutions for industrial needs through high-quality, reliable, fast, and precise products and services, supported by innovation, expertise, and strong partnerships to achieve customer satisfaction and sustainable growth.",
    "Contact Hero Description": "We are ready to assist you. Contact us through one of the channels below to get more information about our industrial products and solutions.",
    "Email Description": "Send your questions and requirements via email.", "Phone Description": "Contact us during business hours for more information.", "WhatsApp Description": "Chat directly with our team via WhatsApp.",
    "Office Address": "Address", "Monday - Friday: 08:00 - 17:00 WIB": "Monday - Friday: 08:00 - 17:00 WIB", "Saturday & Sunday: Closed": "Saturday & Sunday: Closed", "Phone: +62 21-1234-5678": "Phone: +62 21-1234-5678", "WhatsApp: +62 851-8314-7209": "WhatsApp: +62 851-8314-7209",
    "Contact Preview Description": "Our team is ready to assist you in providing product information, pricing quotes, and technical consultations tailored to your industrial needs.",
    "Customer Support": "Customer Support", "Industrial Machinery": "Industrial Machinery", "Office Building": "Office Building",
  },
  id: {
    Home: "Beranda", About: "Tentang Kami", Products: "Produk", Contact: "Kontak",
    "About Us": "Tentang Kami", "Our Products": "Produk Kami", "Learn More": "Selengkapnya",
    "Why Choose Us": "Mengapa Memilih Kami", "Our Advantages": "Keunggulan Kami",
    "Our Product Categories": "Kategori Produk Kami", "Contact Us": "Hubungi Kami", "Need Help Choosing the Right Product?": "Butuh Bantuan Memilih Produk yang Tepat?",
    "View All Products": "Lihat Semua Produk", "Our Values": "Nilai-Nilai Kami", "Our Direction": "Arah Perusahaan",
    "Vision & Mission": "Visi & Misi", "Who We Are?": "Siapa Kami?", "Industrial Solutions": "Solusi Industri",
    "Certified Products": "Produk Bersertifikasi", "Official Warranty": "Garansi Resmi", "Competitive Pricing": "Harga Kompetitif", "Fast Shipping": "Pengiriman Cepat",
    Vision: "Visi", Mission: "Misi", Integrity: "Integritas", Partnership: "Kemitraan", Innovation: "Inovasi", Quality: "Kualitas",
    "Product": "Produk", "Items": "Item", "Product List": "Daftar Produk", "Product Category": "Kategori Produk", "Back to All Products": "Kembali ke Semua Produk",
    "Interested in This Products?": "Tertarik dengan Produk Ini?", "Send Email": "Kirim Email", "Call Now": "Hubungi Sekarang", "Chat WhatsApp": "Chat WhatsApp",
    Email: "Email", Phone: "Telepon", WhatsApp: "WhatsApp", "Visit Our Office": "Kunjungi Kantor Kami", Address: "Alamat", "Operational Hours": "Jam Operasional", "Direct Contact": "Kontak Langsung",
    "Quick Links": "Tautan Cepat", "All rights reserved.": "Hak cipta dilindungi.",
    "About PT. METINDO": "Tentang PT. METINDO", "A trading company and supplier of high quality machinery products, trusted by hundreds of clients across Indonesia.": "Perusahaan trading dan pemasok produk mesin berkualitas tinggi yang dipercaya oleh ratusan pelanggan di seluruh Indonesia.",
    "3 Years": "3 Tahun", "Our company description": "PT. METINDO TECH INDONESIA adalah perusahaan yang bergerak di bidang trading dan penyediaan mesin serta produk industri. Kami berkomitmen menyediakan produk dan solusi berkualitas tinggi yang disesuaikan dengan kebutuhan pelanggan di berbagai sektor industri di Indonesia.",
    "Our experience description": "Dengan pengalaman dan pemahaman terhadap kebutuhan industri, kami terus membangun hubungan jangka panjang dengan pelanggan dan mitra melalui penyediaan produk berkualitas, layanan profesional, dan dukungan teknis yang andal.",
    "Our team description": "Tim kami siap membantu pelanggan menemukan produk dan solusi yang tepat untuk mendukung efisiensi operasional dan memastikan kelancaran kegiatan bisnis.",
    "Our Values Description": "Prinsip-prinsip yang menjadi panduan kami dalam membangun kepercayaan, memberikan layanan terbaik, dan menghadirkan solusi yang bernilai bagi pelanggan.",
    "Our Direction Description": "Komitmen kami untuk menghadirkan solusi industri terbaik melalui kualitas, layanan yang unggul, dan inovasi berkelanjutan.",
    "Vision Description": "Menjadi perusahaan terpercaya dan terkemuka dalam menyediakan solusi industri yang terintegrasi, inovatif, dan berkelanjutan untuk menciptakan nilai tambah bagi pelanggan dan seluruh pemangku kepentingan.",
    "Mission Description": "Menyediakan solusi terbaik untuk kebutuhan industri melalui produk dan layanan yang berkualitas tinggi, andal, cepat, dan presisi, didukung oleh inovasi, keahlian, dan kemitraan yang kuat untuk mencapai kepuasan pelanggan dan pertumbuhan berkelanjutan.",
    "Contact Hero Description": "Kami siap membantu Anda. Hubungi kami melalui salah satu channel di bawah ini untuk mendapatkan informasi lebih lanjut mengenai produk dan solusi industri kami.",
    "Email Description": "Kirimkan pertanyaan dan kebutuhan Anda melalui email.", "Phone Description": "Hubungi kami pada jam kerja untuk informasi lebih lanjut.", "WhatsApp Description": "Chat langsung dengan tim kami melalui WhatsApp.",
    "Office Address": "Alamat", "Monday - Friday: 08:00 - 17:00 WIB": "Senin - Jumat: 08:00 - 17:00 WIB", "Saturday & Sunday: Closed": "Sabtu & Minggu: Tutup", "Phone: +62 21-1234-5678": "Telepon: +62 21-1234-5678", "WhatsApp: +62 851-8314-7209": "WhatsApp: +62 851-8314-7209",
    "Contact Preview Description": "Tim kami siap membantu Anda dalam memberikan informasi produk, penawaran harga, dan konsultasi teknis yang disesuaikan dengan kebutuhan industri Anda.",
    "Customer Support": "Dukungan Pelanggan", "Industrial Machinery": "Mesin Industri", "Office Building": "Gedung Kantor",
  },
  ja: {
    Home: "ホーム", About: "会社概要", Products: "製品", Contact: "お問い合わせ",
    "About Us": "会社概要", "Our Products": "製品一覧", "Learn More": "詳しく見る",
    "Why Choose Us": "選ばれる理由", "Our Advantages": "当社の強み", "Our Product Categories": "製品カテゴリー",
    "Contact Us": "お問い合わせ", "Need Help Choosing the Right Product?": "製品選びをお手伝いします",
    "View All Products": "すべての製品を見る", "Our Values": "企業理念", "Our Direction": "当社の方向性",
    "Vision & Mission": "ビジョンとミッション", "Who We Are?": "私たちについて", "Industrial Solutions": "産業ソリューション",
    "Certified Products": "認証製品", "Official Warranty": "正規保証", "Competitive Pricing": "競争力のある価格", "Fast Shipping": "迅速な配送",
    Vision: "ビジョン", Mission: "ミッション", Integrity: "誠実さ", Partnership: "パートナーシップ", Innovation: "イノベーション", Quality: "品質",
    "Product": "製品", "Items": "件", "Product List": "製品一覧", "Product Category": "製品カテゴリー", "Back to All Products": "製品一覧に戻る",
    "Interested in This Products?": "この製品にご興味がありますか？", "Send Email": "メールを送る", "Call Now": "電話する", "Chat WhatsApp": "WhatsAppで相談",
    Email: "メール", Phone: "電話", WhatsApp: "WhatsApp", "Visit Our Office": "オフィスを訪問", Address: "住所", "Operational Hours": "営業時間", "Direct Contact": "直接お問い合わせ",
    "Quick Links": "クイックリンク", "All rights reserved.": "著作権所有",
    "About PT. METINDO": "PT. METINDOについて", "A trading company and supplier of high quality machinery products, trusted by hundreds of clients across Indonesia.": "インドネシア全土の数百社のお客様から信頼されている、高品質な機械製品の貿易会社・サプライヤーです。",
    "3 Years": "3年間", "Our company description": "PT. METINDO TECH INDONESIAは、機械および産業製品の貿易・供給を行う会社です。インドネシアのさまざまな産業分野のお客様のニーズに合わせ、高品質な製品とソリューションを提供しています。",
    "Our experience description": "産業ニーズに関する経験と理解を活かし、高品質な製品、専門サービス、信頼できる技術サポートを通じて、お客様やパートナーとの長期的な関係を築いています。",
    "Our team description": "当社のチームは、お客様の業務効率と円滑な事業運営を支援する適切な製品・ソリューション選びをサポートします。",
    "Our Values Description": "信頼を築き、最高のサービスを提供し、お客様に価値あるソリューションを届けるための、私たちの行動を導く原則です。",
    "Our Direction Description": "品質、優れたサービス、継続的なイノベーションを通じて、最高の産業ソリューションを提供するという当社のコミットメントです。",
    "Vision Description": "お客様とすべてのステークホルダーに付加価値をもたらす、統合的で革新的かつ持続可能な産業ソリューションを提供する、信頼されるリーディングカンパニーを目指します。",
    "Mission Description": "高品質で信頼性が高く、迅速かつ精密な製品・サービスを通じて産業ニーズに最適なソリューションを提供し、イノベーション、専門知識、強固なパートナーシップによって顧客満足と持続的な成長を実現します。",
    "Contact Hero Description": "お客様をサポートいたします。以下のいずれかのチャネルからお問い合わせいただき、当社の産業製品・ソリューションについて詳しい情報をご確認ください。",
    "Email Description": "ご質問やご要望をメールでお送りください。", "Phone Description": "営業時間内にお問い合わせください。", "WhatsApp Description": "WhatsAppで当社チームに直接ご相談いただけます。",
    "Office Address": "住所", "Monday - Friday: 08:00 - 17:00 WIB": "月曜日～金曜日：08:00～17:00 WIB", "Saturday & Sunday: Closed": "土曜日・日曜日：休業", "Phone: +62 21-1234-5678": "電話：+62 21-1234-5678", "WhatsApp: +62 851-8314-7209": "WhatsApp：+62 851-8314-7209",
    "Contact Preview Description": "製品情報、価格のお見積り、産業ニーズに合わせた技術相談について、当社チームがサポートいたします。",
    "Customer Support": "カスタマーサポート", "Industrial Machinery": "産業機械", "Office Building": "オフィスビルディング",
  },
};

const categoryNames: Record<string, Record<Language, string>> = {
  "chemical-solutions": { en: "Chemical Solutions", id: "Solusi Kimia", ja: "ケミカルソリューション" },
  "mechanical-solutions": { en: "Mechanical Solutions", id: "Solusi Mekanikal", ja: "機械ソリューション" },
  "special-tools": { en: "Special Tools", id: "Alat Khusus", ja: "特殊工具" },
  filter: { en: "Filter", id: "Filter", ja: "フィルター" },
  cbn: { en: "CBN", id: "CBN", ja: "CBN" },
  superon: { en: "Superon", id: "Superon", ja: "Superon" },
};


const categoryDescriptions: Record<string, Record<Language, string>> = {
  "chemical-solutions": { en: "Innovative chemical solutions designed to enhance the efficiency, productivity, and performance of various industrial processes through high-quality technologies and formulations.", id: "Solusi kimia inovatif yang dirancang untuk meningkatkan efisiensi, produktivitas, dan kinerja berbagai proses industri melalui teknologi dan formulasi berkualitas tinggi.", ja: "高品質な技術と製剤を通じて、さまざまな産業プロセスの効率性、生産性、性能を向上させる革新的な化学ソリューションを提供します。" },
  "mechanical-solutions": { en: "Mechanical and industrial technology solutions designed to improve precision, efficiency, productivity, and reliability across various manufacturing and industrial operations.", id: "Solusi teknologi mekanikal dan industri yang dirancang untuk meningkatkan presisi, efisiensi, produktivitas, dan keandalan dalam berbagai kegiatan manufaktur dan industri.", ja: "さまざまな製造および産業活動における精度、効率、生産性、信頼性の向上を支援する機械・産業技術ソリューションを提供します。" },
  "special-tools": { en: "Precision tooling solutions to support various manufacturing processes, including cutting, grinding, and finishing applications.", id: "Solusi tooling presisi untuk mendukung berbagai proses manufaktur, termasuk aplikasi pemotongan, penggerindaan, dan finishing.", ja: "切削、研削、仕上げなど、さまざまな製造プロセスを支援する精密工具ソリューションを提供します。" },
  filter: { en: "High-quality filtration solutions to maintain air, liquid, oil, and hydraulic system cleanliness while supporting reliable industrial operations.", id: "Solusi filtrasi berkualitas tinggi untuk menjaga kebersihan sistem udara, cairan, oli, dan hidrolik serta mendukung operasional industri yang andal.", ja: "空気、液体、オイル、油圧システムの清浄性を維持し、信頼性の高い産業運用を支援する高品質なろ過ソリューションを提供します。" },
  cbn: { en: "CBN tooling solutions for cutting, grinding, and finishing hard materials, offering high wear resistance and reliable performance.", id: "Solusi tooling CBN untuk pemotongan, penggerindaan, dan finishing material keras dengan ketahanan aus dan kinerja yang tinggi.", ja: "硬質材料の切削、研削、仕上げ加工を支援するCBN工具ソリューションを提供し、高い耐摩耗性と安定した性能を実現します。" },
  superon: { en: "Chemical maintenance and welding solutions to support welding, lubrication, cleaning, and various industrial maintenance applications.", id: "Solusi perawatan kimia dan pengelasan untuk mendukung proses pengelasan, pelumasan, pembersihan, dan berbagai kebutuhan perawatan industri.", ja: "溶接、潤滑、洗浄、その他さまざまな産業メンテナンス用途を支援する化学メンテナンスおよび溶接ソリューションを提供します。" },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  categoryName: (id: string, fallback: string) => string;
  categoryDescription: (id: string, fallback: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    const saved = window.localStorage.getItem("metindo-language") as Language | null;
    if (saved === "id" || saved === "en" || saved === "ja") setLanguageState(saved);
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem("metindo-language", next);
    document.documentElement.lang = next === "ja" ? "ja" : next;
  };

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    t: (key) => translations[language][key] ?? translations.en[key] ?? key,
    categoryName: (id, fallback) => categoryNames[id]?.[language] ?? fallback,
    categoryDescription: (id, fallback) => categoryDescriptions[id]?.[language] ?? fallback,
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}
