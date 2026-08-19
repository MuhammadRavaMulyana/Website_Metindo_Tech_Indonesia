import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: {
    default: "PT. METINDO TECH INDONESIA | Trading & Industrial Machinery",
    template: "%s | PT. METINDO TECH INDONESIA",
  },
  description: "PT. METINDO TECH INDONESIA - Perusahaan trading dan penyedia produk mesin-mesin berkualitas tinggi. Chemical Solutions, Mechanical Solutions, Special Tools, Filter, CBN, dan Superon.",
  keywords: ["trading", "machinery", "industrial", "chemical solutions", "mechanical solutions", "special tools", "filter", "CBN", "Superon", "Indonesia", "PT METINDO"],
  authors: [{ name: "PT. METINDO TECH INDONESIA" }],
  creator: "PT. METINDO TECH INDONESIA",
  metadataBase: new URL("https://metindo-tech.co.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "PT. METINDO TECH INDONESIA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <LanguageProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
