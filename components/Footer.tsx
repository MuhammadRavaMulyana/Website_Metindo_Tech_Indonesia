"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const quickLinks = [
  { href: "/", key: "Home" },
  { href: "/about/", key: "About Us" },
  { href: "/products/", key: "Products" },
  { href: "/contact/", key: "Contact" },
];

const productLinks = [
  { href: "/products/chemical-solutions/", id: "chemical-solutions" },
  { href: "/products/mechanical-solutions/", id: "mechanical-solutions" },
  { href: "/products/special-tools/", id: "special-tools" },
  { href: "/products/filter/", id: "filter" },
  { href: "/products/cbn/", id: "cbn" },
  { href: "/products/superon/", id: "superon" },
];

export default function Footer() {
  const { t, language } = useLanguage();

  const productLabels: Record<string, string> = {
    "chemical-solutions": language === "id" ? "Solusi Kimia" : language === "ja" ? "化学ソリューション" : "Chemical Solutions",
    "mechanical-solutions": language === "id" ? "Solusi Mekanikal" : language === "ja" ? "機械ソリューション" : "Mechanical Solutions",
    "special-tools": language === "id" ? "Special Tools" : language === "ja" ? "特殊工具" : "Special Tools",
    filter: language === "id" ? "Filter" : language === "ja" ? "フィルター" : "Filter",
    cbn: "CBN",
    superon: "Superon",
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
            {/* Logo Perusahaan */}
              <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                <img
                  src="/asset/logo metindo.png"
                  alt="PT. METINDO"
                  className="w-full h-full object-contain"
                />
              </div>

            {/* Nama Perusahaan */}
              <div>
                <h3 className="text-base font-bold tracking-tight text-white">
                  PT. METINDO
                </h3>

                <p className="text-[10px] text-brand-400 tracking-[0.2em] uppercase font-semibold">
                  Tech Indonesia
                </p>
              </div>
            </div>
            <p className="text-white text-sm leading-relaxed mb-6">
              {language === "id"
                ? "Perusahaan trading dan penyedia solusi industri yang menghadirkan produk mesin dan peralatan berkualitas untuk mendukung kebutuhan industri di seluruh Indonesia."
                : language === "ja"
                ? "インドネシア全土の産業ニーズを支援する高品質な機械・設備を提供する貿易会社および産業ソリューションプロバイダーです。"
                : "A trading company and industrial solutions provider offering high-quality machinery and equipment to support the needs of industries across Indonesia."}
            </p>
            <div className="flex items-center gap-2 text-white text-sm">
              <Clock className="w-4 h-4 text-brand-500" />
              <span>{t("Monday - Friday: 08:00 - 17:00 WIB")}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">{t("Quick Links")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-brand-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">{t("Products")}</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-brand-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
                    {productLabels[link.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">{t("Contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white text-sm group">
                <Mail className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0 group-hover:text-brand-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">salesmetindo@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-white text-sm group">
                <Phone className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0 group-hover:text-brand-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">+62 21-1234-5678</span>
              </li>
              <li className="flex items-start gap-3 text-white text-sm group">
                <MessageCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0 group-hover:text-brand-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">+62 851-8314-7209</span>
              </li>
              <li className="flex items-start gap-3 text-white text-sm group">
                <MapPin className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0 group-hover:text-brand-400 transition-colors" />
                <span className="group-hover:text-white transition-colors">Plaza Sumarecon Bekasi, Level 7 Jl. Bulevar Harapan Mulya, Medan Satria, Kota Bekasi, Jawa Barat</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-white text-sm">
              &copy; {new Date().getFullYear()} PT. METINDO TECH INDONESIA. {t("All rights reserved.")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
