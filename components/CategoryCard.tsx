"use client";

import { motion } from "framer-motion";
import { ExternalLink, Package } from "lucide-react";
import Link from "next/link";
import { Category } from "@/data/products";
import { useLanguage } from "@/components/LanguageProvider";

interface CategoryCardProps {
  category: Category;
  index: number;
}

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

export default function CategoryCard({
  category,
  index,
}: CategoryCardProps) {
  const { t, categoryName, categoryDescription } = useLanguage();
  const imageSrc = categoryImages[category.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-200/30 transition-all duration-500 border border-slate-100"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden bg-slate-200">
        <img
          src={imageSrc}
          alt={categoryName(category.id, category.name)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          onError={(e) => {
            console.error("Gagal memuat gambar:", imageSrc);
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent pointer-events-none" />

        {/* Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-brand-600 flex items-center gap-1.5 shadow-lg">
          <Package className="w-3.5 h-3.5" />
          {category.products.length} {t("Items")}
        </div>

        {/* Title */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors duration-300">
            {categoryName(category.id, category.name)}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-slate-800 text-sm leading-relaxed mb-5 line-clamp-2">
          {categoryDescription(category.id, category.description)}
        </p>

        <Link
          href={`/products/${category.id}/`}
          className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors group/btn"
        >
          <span className="relative">
            {t("View All Products")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover/btn:w-full" />
          </span>

          <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}