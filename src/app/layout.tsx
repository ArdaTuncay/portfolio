import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arda Tuncay | Otonom Sistemler & Yapay Zeka",
  description:
    "Bilgisayar Mühendisliği öğrencisi. ROS 2, OpenCV, YOLOv8 ve otonom araç geliştirme alanında projeler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
