"use client";

import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2, Building2, Handshake, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";

const values = [
  { icon: Building2, key: "Integrity" },
  { icon: Handshake, key: "Partnership" },
  { icon: Lightbulb, key: "Innovation" },
  { icon: Target, key: "Quality" },
];

const valueDescriptions: Record<string, string> = {
  Integrity: "Upholding honesty, transparency, and accountability in every transaction and service provided to our customers.",
  Partnership: "Building long term relationships with customers and partners through communication, trust, and mutually beneficial collaboration.",
  Innovation: "Continuously developing and delivering solutions that align with technological advancements and evolving industrial needs.",
  Quality: "Prioritizing the quality of our products and services to provide reliable solutions that meet our customers needs.",
};

const valueDescriptionsId: Record<string, string> = {
  Integrity: "Menjunjung tinggi kejujuran, transparansi, dan akuntabilitas dalam setiap transaksi dan layanan yang kami berikan kepada pelanggan.",
  Partnership: "Membangun hubungan jangka panjang dengan pelanggan dan mitra melalui komunikasi, kepercayaan, dan kolaborasi yang saling menguntungkan.",
  Innovation: "Terus mengembangkan dan menghadirkan solusi yang selaras dengan kemajuan teknologi serta kebutuhan industri yang terus berkembang.",
  Quality: "Mengutamakan kualitas produk dan layanan untuk memberikan solusi yang andal dan sesuai dengan kebutuhan pelanggan.",
};

const valueDescriptionsJa: Record<string, string> = {
  Integrity: "お客様に提供するすべての取引とサービスにおいて、誠実さ、透明性、説明責任を重視します。",
  Partnership: "コミュニケーション、信頼、相互利益に基づく協力を通じて、お客様やパートナーとの長期的な関係を築きます。",
  Innovation: "技術の進歩と変化する産業ニーズに沿ったソリューションを継続的に開発・提供します。",
  Quality: "製品とサービスの品質を重視し、お客様のニーズに応える信頼性の高いソリューションを提供します。",
};

export default function AboutPage() {
  const { language, t } = useLanguage();
  const getValueDescription = (key: string) =>
    language === "id" ? valueDescriptionsId[key] : language === "ja" ? valueDescriptionsJa[key] : valueDescriptions[key];

  return (
    <div className="overflow-hidden">
      <section className="relative py-28 bg-gradient-to-br from-slate-50 via-white to-brand-50/30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ x: [0, 50, 0], y: [0, -30, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-10 right-10 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl" />
          <motion.div animate={{ x: [0, -40, 0], y: [0, 40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-brand-100/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              {language === "id" ? "Tentang " : language === "ja" ? "PT. METINDOについて" : "About "}
              {language !== "ja" && <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">PT. METINDO</span>}
            </h1>
            <p className="text-lg text-slate-800 leading-relaxed">{t("A trading company and supplier of high quality machinery products, trusted by hundreds of clients across Indonesia.")}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80)` }} />
                </div>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-8 -right-8 bg-gradient-to-br from-brand-500 to-brand-700 text-white rounded-2xl p-7 shadow-2xl shadow-brand-500/30">
                  <p className="text-4xl font-bold">{t("3 Years")}</p>
                  <p className="text-sm font-medium opacity-90 mt-1">{t("Industrial Solutions")}</p>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">{t("Who We Are?")}</h2>
              <div className="space-y-5 text-slate-800 leading-relaxed text-base">
                <p>{t("Our company description")}</p>
                <p>{t("Our experience description")}</p>
                <p>{t("Our team description")}</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["Certified Products", "Official Warranty", "Competitive Pricing", "Fast Shipping"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-slate-800 text-sm font-medium">{t(item)}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={t("Our Values")} title={t("Our Values")} subtitle={t("Our Values Description")} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, index) => (
              <motion.div key={value.key} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -6 }} className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/30 transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform duration-300"><value.icon className="w-6 h-6 text-white" /></div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">{t(value.key)}</h3>
                <p className="text-slate-800 text-sm leading-relaxed">{getValueDescription(value.key)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={t("Our Direction")} title={t("Vision & Mission")} subtitle={t("Our Direction Description")} />
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} whileHover={{ y: -5 }} className="group relative bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-200/30 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-100 to-brand-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10"><div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20"><Eye className="w-7 h-7 text-white" /></div><h3 className="text-2xl font-bold text-slate-900 mb-5">{t("Vision")}</h3><p className="text-slate-800 leading-relaxed text-lg">{t("Vision Description")}</p></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} whileHover={{ y: -5 }} className="group relative bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-200/30 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-100 to-brand-200/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10"><div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20"><Target className="w-7 h-7 text-white" /></div><h3 className="text-2xl font-bold text-slate-900 mb-5">{t("Mission")}</h3><p className="text-slate-800 leading-relaxed text-lg">{t("Mission Description")}</p></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
