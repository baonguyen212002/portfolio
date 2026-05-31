import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shino — Backend Developer",
  description:
    "Portfolio của Shino — Full-stack Developer thiên Backend, chuyên PHP, Laravel, MySQL và triển khai trên Linux/Nginx.",
  keywords: [
    "Backend Developer",
    "PHP",
    "Laravel",
    "MySQL",
    "Linux",
    "Nginx",
    "Vue",
    "Nuxt.js",
    "Portfolio",
    "Shino",
  ],
  authors: [{ name: "Shino" }],
  openGraph: {
    title: "Shino — Backend Developer",
    description: "Backend Developer · PHP · Laravel · MySQL · Linux · Nginx",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
