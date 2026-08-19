"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductSlideshow from "@/components/ProductSlideshow";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";

const features = [
  {
    image: "/asset/Our%20Advantages/Industrial%20Trading.png",
    title: "Industrial Trading",
    desc: "Providing a wide range of industrial products and solutions from trusted suppliers to meet our customers needs.",
  },
  {
    image: "/asset/Our%20Advantages/Fast%20Delivery.png",
    title: "Fast Delivery",
    desc: "Supporting the procurement process with fast, safe, and timely delivery tailored to our customers needs.",
  },
  {
    image: "/asset/Our%20Advantages/Technical%20Support.png",
    title: "Technical Support",
    desc: "Providing technical support and consultation to help customers find solutions that meet their operational needs.",
  },
  {
    image: "/asset/Our%20Advantages/Quality%20Guaranteed.png",
    title: "Quality Guaranteed",
    desc: "Providing products with consistently maintained quality standards to support performance and reliability in industrial applications.",
  },
  {
    image: "/asset/Our%20Advantages/Certified%20Products.png",
    title: "Certified Products",
    desc: "Providing products with certifications and quality standards that support performance and reliability in industrial applications.",
  },
  {
    image: "/asset/Our%20Advantages/Expert%20Team.png",
    title: "Expert Team",
    desc: "Providing a team of professionals ready to offer information, consultation, and solutions tailored to customer needs.",
  },
];

export default function HomePage() {
  const { t, language } = useLanguage();

  const translatedFeatures = features.map((feature) => {
    const originalTitle = feature.title;
    const idDescriptions: Record<string, string> = {
      "Industrial Trading": "Menyediakan berbagai produk dan solusi industri dari pemasok terpercaya untuk memenuhi kebutuhan pelanggan.",
      "Fast Delivery": "Mendukung proses pengadaan dengan pengiriman yang cepat, aman, dan tepat waktu sesuai kebutuhan pelanggan.",
      "Technical Support": "Menyediakan dukungan teknis dan konsultasi untuk membantu pelanggan menemukan solusi sesuai kebutuhan operasional.",
      "Quality Guaranteed": "Menyediakan produk dengan standar kualitas yang terjaga untuk mendukung kinerja dan keandalan dalam aplikasi industri.",
      "Certified Products": "Menyediakan produk dengan sertifikasi dan standar kualitas yang mendukung kebutuhan industri.",
      "Expert Team": "Menyediakan tim profesional yang siap memberikan informasi, konsultasi, dan solusi sesuai kebutuhan pelanggan.",
    };
    const jaDescriptions: Record<string, string> = {
      "Industrial Trading": "信頼できるサプライヤーから幅広い産業製品とソリューションを提供します。",
      "Fast Delivery": "お客様のニーズに合わせ、迅速・安全・確実な納品をサポートします。",
      "Technical Support": "お客様の運用ニーズに合ったソリューションを見つけるため、技術サポートとコンサルティングを提供します。",
      "Quality Guaranteed": "産業用途での性能と信頼性を支える、安定した品質基準の製品を提供します。",
      "Certified Products": "業界のニーズに対応する認証および品質基準を満たす製品を提供します。",
      "Expert Team": "情報、コンサルティング、ソリューションを提供する専門チームが対応します。",
    };
    return {
      ...feature,
      title: t(originalTitle),
      desc: language === "id" ? idDescriptions[originalTitle] : language === "ja" ? jaDescriptions[originalTitle] : feature.desc,
    };
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-brand-50/40">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 80, 0], y: [0, -40, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-brand-100/20 rounded-full blur-3xl"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-brand-50/60 to-transparent rounded-full" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            >

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                PT.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
                  METINDO
                </span>
                  <br />
                    <span className="text-4xl md:text-5xl lg:text-6xl text-black">
                      TECH INDONESIA
                    </span>
                  </h1>

              <p className="text-lg md:text-xl text-black leading-relaxed mb-10 max-w-xl">
                <strong className="text-slate-900">PT. METINDO TECH INDONESIA</strong>{" "}
                {language === "id"
                  ? "adalah perusahaan trading dan pemasok produk mesin berkualitas tinggi serta solusi industri untuk mendukung kebutuhan operasional berbagai sektor industri di Indonesia."
                  : language === "ja"
                    ? "は、高品質な機械製品と産業ソリューションを提供し、インドネシアのさまざまな産業分野の運用ニーズを支援する貿易会社です。"
                    : "is a trading company and supplier of high quality machinery products and industrial solutions, supporting the operational needs of various industrial sectors across Indonesia."}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-700 text-white rounded-full font-semibold shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-300 hover:scale-105 group"
                >
                  {t("Learn More")}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/products/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black border-2 border-slate-200 rounded-full font-semibold hover:border-brand-300 hover:bg-brand-50/50 transition-all duration-300"
                >
                  {t("Our Products")}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="w-full aspect-[4/3] max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-brand-100/50 border border-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                      alt="Industrial Machinery"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - with images instead of icons */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t("Why Choose Us")}
            title={t("Our Advantages")}
            subtitle={language === "id" ? "Kami berkomitmen menyediakan produk berkualitas tinggi dan layanan profesional yang mendukung efisiensi, produktivitas, dan kelancaran operasional industri pelanggan." : language === "ja" ? "高品質な製品と専門サービスを提供し、お客様の産業における効率、生産性、円滑な運用を支援します。" : "We are committed to providing high quality products and professional services that support the efficiency, productivity, and smooth operation of our customers industries."}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {translatedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-800 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Slideshow Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t("Our Products")}
            title={t("Our Product Categories")}
            subtitle={language === "id" ? "Kami menyediakan berbagai solusi produk industri untuk mendukung kegiatan manufaktur dan operasional bisnis Anda. Jelajahi kategori produk kami untuk menemukan solusi yang tepat." : language === "ja" ? "製造および事業運営を支える幅広い産業製品ソリューションを提供しています。製品カテゴリーをご覧いただき、最適なソリューションをお探しください。" : "We provide a wide range of industrial product solutions to support your manufacturing and business operations. Explore our product categories to find the right solutions for your industrial needs."}
          />

          <AnimatedSection delay={0.2} className="mt-16">
            <ProductSlideshow />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Preview Section - WHITE background */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-100/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                {t("Contact Us")}
              </h2>
              <p className="text-slate-800 text-lg leading-relaxed mb-10">
                {t("Contact Preview Description")}
              </p>
              <div className="space-y-5 mb-10">
                {[
                  { label: "Email", value: "salesmetindo@gmail.com" },
                  { label: "Phone", value: "+62 21-1234-5678" },
                  { label: "WhatsApp", value: "+62 851-8314-7209" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-brand-500 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-slate-800 text-sm font-medium">{item.label}</span>
                    <span className="text-slate-900 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-700 text-white rounded-full font-semibold shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-300 hover:scale-105 group"
              >
                {t("Contact Us")}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative flex justify-center">
                <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Customer Support"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
