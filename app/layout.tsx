import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CDLPassPrep — The Complete CDL Study Guide Bundle | Pass Your CDL Test",
  description:
    "17 premium CDL study guides + a browser-based practice quiz trainer. Plain-English prep for the General Knowledge, Air Brakes, Combination, Hazmat, and Road tests. Instant download, one-time $99 payment.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cdlpassprep.com"),
  openGraph: {
    title: "CDLPassPrep — The Complete CDL Study Guide Bundle",
    description:
      "17 premium CDL study guides + a browser-based practice quiz trainer — plain English, everything you need from your first page of studying to your first week on the job.",
    images: ["/og-image.jpg"], // TODO: replace asset — use Guide 01 cover
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDLPassPrep — The Complete CDL Study Guide Bundle",
    description:
      "17 premium CDL study guides + a browser-based practice quiz trainer — plain English, everything you need to pass and get hired.",
    images: ["/og-image.jpg"], // TODO: replace asset
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-body bg-soft text-slate-700 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
