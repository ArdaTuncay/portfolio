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
  title: "Arda Tuncay | Otonom Sistemler & Yapay Zeka Geliştiricisi",
  description:
    "Bilgisayar Mühendisliği öğrencisi. ROS 2, OpenCV, YOLOv8 ve otonom araç geliştirme alanında projeler.",
  keywords: ["Arda Tuncay", "Yapay Zeka", "Otonom Sistemler", "Robotik", "ROS 2", "YOLOv8", "Bilgisayar Mühendisi", "Yazılım"],
  authors: [{ name: "Arda Tuncay" }],
  openGraph: {
    title: "Arda Tuncay | Yapay Zeka & Otonom Sistemler",
    description: "Bilgisayar Mühendisliği öğrencisi. Otonom araç ve görüntü işleme projelerimi inceleyin.",
    url: "https://ardatuncay.com", // Bu alan adını alırsanız burası eşleşecek
    siteName: "Arda Tuncay Portfolyo",
    type: "website",
  },
  verification: {
    google: "-3NU3QQkhU77SDPqtyFAca-c2_1NMwagAj2va8GE9dU",
  },
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
