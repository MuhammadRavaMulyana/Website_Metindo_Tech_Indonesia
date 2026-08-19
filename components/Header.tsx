"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const navLinks = [
  { href: "/", key: "Home" },
  { href: "/about/", key: "About" },
  { href: "/products/", key: "Products" },
  { href: "/contact/", key: "Contact" },
];

const languages = [
  { value: "id" as const, label: "Indonesia", short: "ID"},
  { value: "en" as const, label: "English", short: "EN"},
  { value: "ja" as const, label: "Japan", short: "JP"},
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const currentLanguage = languages.find((item) => item.value === language) ?? languages[0];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setLanguageOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-100" : "bg-white/90 backdrop-blur-md border-b border-slate-100"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <img src="/asset/logo%20metindo.png" alt="PT. Metindo Tech Indonesia" className="w-14 h-14 object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-5">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href} className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "text-white" : "text-black hover:text-brand-600"}`}>
                    {isActive && <motion.div layoutId="activeNav" className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-700 rounded-full shadow-md shadow-brand-500/25" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                    <span className="relative z-10">{t(link.key)}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="relative">
              <button type="button" onClick={() => setLanguageOpen((v) => !v)} aria-expanded={languageOpen} aria-label="Select language" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm hover:border-brand-300 hover:shadow-md transition-all">
                <Globe className="w-4 h-4" />
                <span>{currentLanguage.flag}</span>
                <span className="text-sm font-medium">{currentLanguage.short}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${languageOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {languageOpen && (
                  <motion.div initial={{ opacity: 0, y: -6, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.98 }} className="absolute right-0 top-full mt-2 w-44 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/50">
                    {languages.map((item) => (
                      <button key={item.value} type="button" onClick={() => { setLanguage(item.value); setLanguageOpen(false); }} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-left transition-colors ${language === item.value ? "bg-brand-50 text-brand-700" : "text-slate-700 hover:bg-slate-50"}`}>
                        <span>{item.flag}</span><span className="flex-1">{item.label}</span>{language === item.value && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2.5 rounded-xl bg-brand-50 text-brand-600 hover:bg-brand-100 transition-colors" aria-label="Toggle menu">
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X className="w-5 h-5" /></motion.div> : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><Menu className="w-5 h-5" /></motion.div>}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 overflow-hidden">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.08 }}>
                  <Link href={link.href} className={`block px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-md" : "text-slate-800 hover:bg-brand-50 hover:text-brand-600"}`}>{t(link.key)}</Link>
                </motion.div>;
              })}
              <div className="mt-2 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2">
                {languages.map((item) => <button key={item.value} type="button" onClick={() => { setLanguage(item.value); setIsMobileMenuOpen(false); }} className={`flex flex-col items-center gap-1 px-2 py-2 rounded-xl text-xs ${language === item.value ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50"}`}><span>{item.flag}</span><span>{item.short}</span></button>)}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
