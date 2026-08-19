"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Product } from "@/data/products";
import { useLanguage } from "@/components/LanguageProvider";

interface ProductDetailProps {
  product: Product;
  index: number;
}

export default function ProductDetail({
  product,
  index,
}: ProductDetailProps) {
  const { language, t } = useLanguage();

  // Pilih deskripsi berdasarkan bahasa aktif
  const productDescription =
    language === "id"
      ? product.descriptionId || product.description
      : language === "ja"
      ? product.descriptionJa || product.description
      : product.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6 }}
      className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:shadow-xl
        hover:shadow-brand-100/50
        transition-all
        duration-500
        border
        border-slate-100
        h-full
        flex
        flex-col
      "
    >
      {/* Image */}
      <div className="relative h-64 shrink-0 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full
            h-full
            object-contain
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Image Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/30
            via-transparent
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            pointer-events-none
          "
        />

        {/* Product Number */}
        <div
          className="
            absolute
            top-4
            left-4
            w-8
            h-8
            bg-white/90
            backdrop-blur-sm
            rounded-lg
            flex
            items-center
            justify-center
            text-xs
            font-bold
            text-brand-600
            shadow-md
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        {/* Product Name */}
        <h4
          className="
            text-base
            font-bold
            text-slate-900
            mb-3
            group-hover:text-brand-600
            transition-colors
            duration-300
          "
        >
          {product.name}
        </h4>

        {/* Product Description */}
        <p
          className="
            text-slate-800
            text-sm
            leading-relaxed
            mb-6
          "
        >
          {productDescription}
        </p>

        {/* Button */}
        <Link
          href="/contact/"
          className="
            mt-auto
            inline-flex
            items-center
            justify-center
            gap-2
            w-full
            px-4
            py-2.5
            bg-gradient-to-r
            from-brand-500
            to-brand-700
            text-white
            rounded-xl
            text-sm
            font-semibold
            shadow-md
            shadow-brand-500/20
            hover:shadow-lg
            hover:shadow-brand-500/30
            transition-all
            duration-300
            hover:scale-[1.02]
            group/btn
          "
        >
          <MessageCircle className="w-4 h-4" />

          {t("Contact Us")}

          <ArrowUpRight
            className="
              w-3.5
              h-3.5
              transition-transform
              group-hover/btn:translate-x-0.5
              group-hover/btn:-translate-y-0.5
            "
          />
        </Link>
      </div>
    </motion.div>
  );
}