import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/SchemaMarkup";
import { constructMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = constructMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body className="min-h-screen bg-[#090A0F] text-[#F8FAFC] antialiased selection:bg-[#00F2FE]/30 selection:text-[#00F2FE]">
        <div className="flex flex-col min-h-screen relative">
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
