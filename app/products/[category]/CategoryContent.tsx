"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Package,
  MessageCircle,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Category } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageProvider";

interface CategoryContentProps {
  category: Category;
}

// ============================================
// CATEGORY TRANSLATIONS
// ============================================

const categoryNames: Record<string, Record<string, string>> = {
  "chemical-solutions": {
    en: "Chemical Solutions",
    id: "Solusi Kimia",
    ja: "化学ソリューション",
  },

  "mechanical-solutions": {
    en: "Mechanical Solutions",
    id: "Solusi Mekanikal",
    ja: "機械ソリューション",
  },

  "special-tools": {
    en: "Special Tools",
    id: "Alat Khusus",
    ja: "特殊工具",
  },

  filter: {
    en: "Filter",
    id: "Filter",
    ja: "フィルター",
  },

  cbn: {
    en: "CBN",
    id: "CBN",
    ja: "CBN",
  },

  superon: {
    en: "Superon",
    id: "Superon",
    ja: "Superon",
  },
};

// ============================================
// CATEGORY DESCRIPTIONS
// ============================================

const categoryDescriptions: Record<
  string,
  Record<string, string>
> = {
  "chemical-solutions": {
    en: "Innovative chemical solutions designed to enhance the efficiency, productivity, and performance of various industrial processes through high-quality technologies and formulations.",

    id: "Solusi kimia inovatif yang dirancang untuk meningkatkan efisiensi, produktivitas, dan kinerja berbagai proses industri melalui teknologi dan formulasi berkualitas tinggi.",

    ja: "高品質な技術と製剤を通じて、さまざまな産業プロセスの効率性、生産性、性能を向上させる革新的な化学ソリューションを提供します。",
  },

  "mechanical-solutions": {
    en: "Mechanical and industrial technology solutions designed to improve precision, efficiency, productivity, and reliability across various manufacturing and industrial operations.",

    id: "Solusi teknologi mekanikal dan industri yang dirancang untuk meningkatkan presisi, efisiensi, produktivitas, dan keandalan dalam berbagai kegiatan manufaktur dan industri.",

    ja: "さまざまな製造および産業活動における精度、効率、生産性、信頼性の向上を支援する機械・産業技術ソリューションを提供します。",
  },

  "special-tools": {
    en: "Precision tooling solutions to support various manufacturing processes, including cutting, grinding, and finishing applications.",

    id: "Solusi tooling presisi untuk mendukung berbagai proses manufaktur, termasuk aplikasi pemotongan, penggerindaan, dan finishing.",

    ja: "切削、研削、仕上げなど、さまざまな製造プロセスを支援する精密工具ソリューションを提供します。",
  },

  filter: {
    en: "High-quality filtration solutions to maintain air, liquid, oil, and hydraulic system cleanliness while supporting reliable industrial operations.",

    id: "Solusi filtrasi berkualitas tinggi untuk menjaga kebersihan sistem udara, cairan, oli, dan hidrolik serta mendukung operasional industri yang andal.",

    ja: "空気、液体、オイル、油圧システムの清浄性を維持し、信頼性の高い産業運用を支援する高品質なろ過ソリューションを提供します。",
  },

  cbn: {
    en: "CBN tooling solutions for cutting, grinding, and finishing hard materials, offering high wear resistance and reliable performance.",

    id: "Solusi tooling CBN untuk pemotongan, penggerindaan, dan finishing material keras dengan ketahanan aus dan kinerja yang tinggi.",

    ja: "硬質材料の切削、研削、仕上げ加工を支援するCBN工具ソリューションを提供し、高い耐摩耗性と安定した性能を実現します。",
  },

  superon: {
    en: "Chemical maintenance and welding solutions to support welding, lubrication, cleaning, and various industrial maintenance applications.",

    id: "Solusi perawatan kimia dan pengelasan untuk mendukung proses pengelasan, pelumasan, pembersihan, dan berbagai kebutuhan perawatan industri.",

    ja: "溶接、潤滑、洗浄、その他さまざまな産業メンテナンス用途を支援する化学メンテナンスおよび溶接ソリューションを提供します。",
  },
};

// ============================================
// COMPONENT
// ============================================

export default function CategoryContent({
  category,
}: CategoryContentProps) {
  const { language, categoryName, t } = useLanguage();

  // ==========================================
  // CURRENT LANGUAGE
  // ==========================================

  const currentLanguage =
    language === "id"
      ? "id"
      : language === "ja"
      ? "ja"
      : "en";

  // ==========================================
  // CATEGORY NAME
  // ==========================================

  const translatedCategoryName =
    categoryNames[category.id]?.[currentLanguage] ||
    categoryName(category.id, category.name);

  // ==========================================
  // CATEGORY DESCRIPTION
  // ==========================================

  const translatedCategoryDescription =
    categoryDescriptions[category.id]?.[currentLanguage] ||
    category.description;

  // ==========================================
  // PAGE TEXT
  // ==========================================

  const pageTitle =
    currentLanguage === "id"
      ? "Daftar Produk"
      : currentLanguage === "ja"
      ? "製品一覧"
      : "Product List";

  const availableText =
    currentLanguage === "id"
      ? `${category.products.length} Produk Tersedia dalam Kategori Ini`
      : currentLanguage === "ja"
      ? `このカテゴリーには${category.products.length}製品があります`
      : `${category.products.length} Products Available in This Category`;

  const backText =
    currentLanguage === "id"
      ? "Kembali ke Semua Produk"
      : currentLanguage === "ja"
      ? "すべての製品に戻る"
      : "Back to All Products";

  const categoryLabel =
    currentLanguage === "id"
      ? "Kategori Produk"
      : currentLanguage === "ja"
      ? "製品カテゴリー"
      : "Product Category";

  const productsText =
    currentLanguage === "id"
      ? "Produk"
      : currentLanguage === "ja"
      ? "製品"
      : "Products";

  const interestedText =
    currentLanguage === "id"
      ? "Tertarik dengan Produk Ini?"
      : currentLanguage === "ja"
      ? "この製品にご興味がありますか？"
      : "Interested in These Products?";

  const contactDescription =
    currentLanguage === "id"
      ? "Hubungi tim kami untuk informasi harga, ketersediaan produk, dan informasi pemesanan."
      : currentLanguage === "ja"
      ? "価格、製品の在庫状況、およびご注文に関する情報については、当社のチームまでお問い合わせください。"
      : "Contact our team for pricing, product availability, and ordering information.";

  const contactText =
    currentLanguage === "id"
      ? "Hubungi Kami"
      : currentLanguage === "ja"
      ? "お問い合わせ"
      : "Contact Us";

  return (
    <div className="overflow-hidden">

      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section className="relative py-24 bg-gradient-to-br from-white via-white to-brand-50/70 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-brand-100/35 blur-3xl" />

          <div className="absolute -bottom-48 left-1/4 w-[420px] h-[420px] rounded-full bg-orange-100/25 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.07),transparent_35%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Back */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-colors mb-8 group text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />

              {backText}
            </Link>
          </motion.div>

          {/* Category */}
          <AnimatedSection>

            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/20">
                <Package className="w-7 h-7 text-white" />
              </div>

              <div>

                <span className="text-brand-600 text-xs font-bold tracking-wider uppercase">
                  {categoryLabel}
                </span>

                <div className="flex items-center gap-2 text-slate-800 text-sm mt-0.5">

                  <Link
                    href="/products/"
                    className="hover:text-brand-600 transition-colors"
                  >
                    {productsText}
                  </Link>

                  <ChevronRight className="w-3 h-3 text-slate-800" />

                  <span className="text-slate-800">
                    {translatedCategoryName}
                  </span>

                </div>

              </div>

            </div>

            {/* Category title */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 tracking-tight">
              {translatedCategoryName}
            </h1>

            {/* Category description */}

            <p className="text-slate-800 text-lg max-w-2xl leading-relaxed">
              {translatedCategoryDescription}
            </p>

          </AnimatedSection>
        </div>
      </section>

      {/* ========================================
          PRODUCTS GRID
      ======================================== */}

      <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimatedSection className="flex items-center justify-between mb-12">

            <div>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                {pageTitle}
              </h2>

              <p className="text-slate-800 mt-2">
                {availableText}
              </p>

            </div>

          </AnimatedSection>

          {/* Products */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">

            {category.products.map((product, index) => (
              <ProductDetail
                key={product.id}
                product={product}
                index={index}
              />
            ))}

          </div>

        </div>
      </section>

      {/* ========================================
          CONTACT CTA
      ======================================== */}

      <section className="py-20 bg-white relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50/50 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-100/30 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

          <AnimatedSection>

            <MessageCircle className="w-12 h-12 text-brand-400 mx-auto mb-5" />

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              {interestedText}
            </h2>

            <p className="text-slate-600 mb-8">
              {contactDescription}
            </p>

            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-700 text-white rounded-full font-semibold shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-300 hover:scale-105 group"
            >

              <MessageCircle className="w-5 h-5" />

              {contactText}

              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

            </Link>

          </AnimatedSection>

        </div>
      </section>

    </div>
  );
}