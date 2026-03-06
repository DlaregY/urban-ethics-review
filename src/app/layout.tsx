import type { Metadata } from "next";
import { Playfair_Display, Crimson_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Urban Ethics Review",
  description: "A Journal of Aesthetic Accountability — Dedicated to the rigorous examination of City Core Fashion and its broader implications for urban identity, material culture, and the ethics of the contemporary lifestyle industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${crimsonPro.variable} ${jetbrainsMono.variable} antialiased bg-parchment text-ink`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
