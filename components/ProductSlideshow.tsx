"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { categories } from "@/data/products";
import { useLanguage } from "@/components/LanguageProvider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// ============================================
// PRODUCT CATEGORY IMAGES
// ============================================

const categoryImages: Record<string, string> = {
  "chemical-solutions":
    "/asset/Chemical%20Solutions/gabungan%20CS.png",

  "mechanical-solutions":
    "/asset/Mechanical%20Solutions/gabungan%20MS.png",

  "special-tools":
    "/asset/Spesial%20Tools/gabungan%20ST.png",

  filter:
    "/asset/Filter/gabungan%20Filter.png",

  cbn:
    "/asset/CBN/gabungan%20CBN.png",

  superon:
    "/asset/Superon/gabungan%20Superon.png",
};

// ============================================
// INDONESIAN DESCRIPTIONS
// ============================================

const indonesianDescriptions: Record<string, string> = {
  "chemical-solutions":
    "Solusi kimia inovatif untuk meningkatkan efisiensi dan produktivitas berbagai proses industri.",

  "mechanical-solutions":
    "Solusi teknologi mekanikal dan industri untuk meningkatkan presisi, efisiensi, dan produktivitas.",

  "special-tools":
    "Solusi tooling presisi untuk mendukung berbagai proses manufaktur.",

  filter:
    "Solusi filtrasi berkualitas tinggi untuk menjaga kebersihan sistem industri.",

  cbn:
    "Solusi tooling CBN untuk pemotongan, penggerindaan, dan penyelesaian material keras.",

  superon:
    "Solusi perawatan kimia dan pengelasan untuk mendukung proses industri.",
};

// ============================================
// COMPONENT
// ============================================

export default function ProductSlideshow() {
  const { t, language, categoryName } = useLanguage();

  return (
    <div className="relative group">
      <Swiper
        modules={[
          Autoplay,
          Pagination,
          Navigation,
          EffectFade,
        ]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        loop
        className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60"
      >
        {categories.map((category, index) => {
          const imageSrc =
            categoryImages[category.id] || category.image;

          const description =
            language === "id"
              ? indonesianDescriptions[category.id] || category.description
              : language === "ja"
              ? ({
                  "chemical-solutions": "高品質な技術と製剤を通じて、さまざまな産業プロセスの効率性、生産性、性能を向上させる革新的な化学ソリューションを提供します。",
                  "mechanical-solutions": "さまざまな製造および産業活動における精度、効率、生産性、信頼性の向上を支援する機械・産業技術ソリューションを提供します。",
                  "special-tools": "切削、研削、仕上げなど、さまざまな製造プロセスを支援する精密工具ソリューションを提供します。",
                  filter: "空気、液体、オイル、油圧システムの清浄性を維持し、信頼性の高い産業運用を支援する高品質なろ過ソリューションを提供します。",
                  cbn: "硬質材料の切削、研削、仕上げ加工を支援するCBN工具ソリューションを提供し、高い耐摩耗性と安定した性能を実現します。",
                  superon: "溶接、潤滑、洗浄、その他さまざまな産業メンテナンス用途を支援する化学メンテナンスおよび溶接ソリューションを提供します。",
                } as Record<string, string>)[category.id] || category.description
              : category.description;

          return (
            <SwiperSlide key={category.id}>
              <div className="relative h-[420px] md:h-[520px] lg:h-[580px] overflow-hidden">

                {/* ========================================
                    BACKGROUND IMAGE
                ======================================== */}
                <img
                  src={imageSrc}
                  alt={categoryName(category.id, category.name)}
                  className="
                    absolute
                    inset-0
                    z-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-[2000ms]
                    ease-out
                    group-hover:scale-105
                  "
                  onError={() => {
                    console.error(
                      `Gagal memuat gambar: ${imageSrc}`
                    );
                  }}
                />

                {/* ========================================
                    IMAGE OVERLAY
                    Dibuat lebih transparan agar gambar
                    tetap terlihat.
                ======================================== */}
                <div
                  className="
                    absolute
                    inset-0
                    z-10
                    bg-gradient-to-r
                    from-slate-950/75
                    via-slate-900/40
                    to-slate-900/10
                  "
                />

                {/* ========================================
                    CONTENT
                ======================================== */}
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -40,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2,
                      }}
                      className="max-w-2xl"
                    >

                      {/* ==================================
                          PRODUCT NUMBER
                      ================================== */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-4
                          py-1.5
                          bg-white/10
                          backdrop-blur-sm
                          border
                          border-white/20
                          rounded-full
                          text-brand-300
                          text-xs
                          font-semibold
                          tracking-wider
                          uppercase
                          mb-5
                        "
                      >
                        <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />

                        {t("Product")} {String(index + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                      </motion.div>

                      {/* ==================================
                          TITLE
                      ================================== */}
                      <h3
                        className="
                          text-3xl
                          md:text-5xl
                          lg:text-6xl
                          font-bold
                          text-white
                          mb-5
                          leading-tight
                          tracking-tight
                          drop-shadow-lg
                        "
                      >
                        {categoryName(
                          category.id,
                          category.name
                        )}
                      </h3>

                      {/* ==================================
                          DESCRIPTION
                      ================================== */}
                      <p
                        className="
                          text-white
                          text-base
                          md:text-lg
                          mb-8
                          leading-relaxed
                          max-w-lg
                          drop-shadow-md
                        "
                      >
                        {description}
                      </p>

                      {/* ==================================
                          BUTTON
                      ================================== */}
                      <Link
                        href={`/products/#${category.id}`}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-7
                          py-3.5
                          bg-gradient-to-r
                          from-brand-500
                          to-brand-700
                          text-white
                          rounded-full
                          font-semibold
                          shadow-xl
                          shadow-brand-500/25
                          hover:shadow-brand-500/40
                          transition-all
                          duration-300
                          hover:scale-105
                          group/btn
                        "
                      >
                        {t("View All Products")}

                        <ArrowRight
                          className="
                            w-4
                            h-4
                            transition-transform
                            group-hover/btn:translate-x-1
                          "
                        />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}