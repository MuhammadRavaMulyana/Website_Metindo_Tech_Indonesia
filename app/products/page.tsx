"use client";

import { motion } from "framer-motion";
import { Package, ArrowRight } from "lucide-react";
import Link from "next/link";
import { categories } from "@/data/products";
import CategoryCard from "@/components/CategoryCard";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProductsPage() {
  const { t, language } = useLanguage();
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-slate-50 via-white to-brand-50/30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-brand-100/20 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              {t("Our Products")}
            </h1>
            <p className="text-lg text-slate-800 leading-relaxed">
              {language === "id" ? "Kami menyediakan berbagai solusi produk industri untuk mendukung kegiatan manufaktur dan operasional bisnis Anda. Jelajahi kategori produk kami untuk menemukan solusi yang tepat." : language === "ja" ? "製造および事業運営を支える幅広い産業製品ソリューションを提供しています。製品カテゴリーをご覧いただき、最適なソリューションをお探しください。" : "We provide a wide range of industrial product solutions to support your manufacturing and business operations. Explore our product categories to find the right solutions for your industrial needs."}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={category.id} id={category.id}>
                <CategoryCard category={category} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - WHITE background */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-100/30 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              {t("Need Help Choosing the Right Product?")}
            </h2>
            <p className="text-slate-800 text-lg mb-10 max-w-2xl mx-auto">
              {language === "id"
                ? "Tim kami siap membantu Anda menemukan produk dan solusi industri yang tepat untuk kebutuhan operasional. Diskusikan kebutuhan teknis dan pilihan produk Anda bersama tim kami."
                : language === "ja"
                ? "お客様の運用ニーズに合った産業製品とソリューション選びをサポートします。技術要件や製品の選択肢についてお気軽にご相談ください。"
                : "Our team is ready to help you find the right industrial products and solutions for your operational needs. Discuss your technical requirements and product options with our team to find the most suitable and effective solution."}
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-700 text-white rounded-full font-semibold shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-300 hover:scale-105 group"
            >
              {t("Contact Us")}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}