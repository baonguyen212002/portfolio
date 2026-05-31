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
    "Portfolio of Shino — a backend developer (also full-stack) specializing in PHP, Laravel, MySQL and deployment on Linux/Nginx.",
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
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
