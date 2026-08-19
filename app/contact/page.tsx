"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "salesmetindo@gmail.com",
    descriptionKey: "Email Description",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    hoverBg: "hover:bg-blue-100",
    action: "mailto:salesmetindo@gmail.com",
    actionLabelKey: "Send Email",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+62 21-1234-5678",
    descriptionKey: "Phone Description",
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-50",
    textColor: "text-slate-800",
    hoverBg: "hover:bg-slate-100",
    action: "tel:+622112345678",
    actionLabelKey: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+62 851-8314-7209",
    descriptionKey: "WhatsApp Description",
    color: "from-emerald-500 to-emerald-700",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    hoverBg: "hover:bg-emerald-100",
    action: "https://wa.me/6285183147209",
    actionLabelKey: "Chat WhatsApp",
  },
];

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative py-28 bg-gradient-to-br from-slate-50 via-white to-brand-50/30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {/* Orange glow */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-10 right-10 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl"
          />

          {/* Second glow */}
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-brand-100/20 rounded-full blur-3xl"
          />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              {t("Contact Us")}
            </h1>

            <p className="text-lg text-slate-800 leading-relaxed">
              {t("Contact Hero Description")}
            </p>

          </AnimatedSection>
        </div>
      </section>


      {/* =====================================================
          CONTACT CARDS
      ====================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={t(info.title)}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden"
              >

                {/* Soft background decoration */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${info.color} opacity-5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`}
                />

                <div className="relative z-10">

                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {t(info.title)}
                  </h3>

                  <p className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-brand-600 transition-colors">
                    {info.value}
                  </p>

                  <p className="text-slate-800 text-sm mb-6">
                    {t(info.descriptionKey)}
                  </p>

                  <motion.a
                    href={info.action}
                    target={
                      info.title === "WhatsApp"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      info.title === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 ${info.bgColor} ${info.textColor} rounded-xl font-semibold ${info.hoverBg} transition-all duration-300 group/btn`}
                  >
                    <Send className="w-4 h-4" />

                    {t(info.actionLabelKey)}

                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </motion.a>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          OFFICE INFO
      ====================================================== */}
      <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT - OFFICE INFORMATION */}
            <AnimatedSection>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                {t("Visit Our Office")}
              </h2>

              <div className="space-y-6">

                {/* Address */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {t("Address")}
                    </h3>

                    <p className="text-slate-800 leading-relaxed">
                      Plaza Sumarecon Bekasi, Level 7 
                      <br />
                      Jl. Bulevar 
                      <br />
                      Harapan Mulya, Medan Satria, 
                      <br />
                      Kota Bekasi, Jawa Barat
                    </p>
                  </div>

                </div>


                {/* Operational Hours */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {t("Operational Hours")}
                    </h3>

                    <p className="text-slate-800 leading-relaxed">
                      {t("Monday - Friday: 08:00 - 17:00 WIB")}
                      <br />
                      {t("Saturday & Sunday: Closed")}
                    </p>
                  </div>

                </div>


                {/* Direct Contact */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {t("Direct Contact")}
                    </h3>

                    <p className="text-slate-800 leading-relaxed">
                      {t("Phone: +62 21-1234-5678")}
                      <br />
                      {t("WhatsApp: +62 851-8314-7209")}
                    </p>
                  </div>

                </div>

              </div>

            </AnimatedSection>


            {/* RIGHT - OFFICE IMAGE */}
            <AnimatedSection delay={0.2}>

              <div className="relative">

                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">

                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85"
                    alt={t("Office Building")}
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