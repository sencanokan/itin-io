import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ITIN.io - Get Your ITIN Fast & Easy | IRS-Authorized CAA",
    template: "%s | ITIN.io",
  },
  description:
    "Apply for your Individual Taxpayer Identification Number online. IRS-authorized Certifying Acceptance Agent with 2-4 week processing. No passport mailing required.",
  keywords: [
    "ITIN",
    "ITIN application",
    "Individual Taxpayer Identification Number",
    "IRS",
    "CAA",
    "Certifying Acceptance Agent",
    "tax identification",
    "non-resident tax",
    "ITIN online",
  ],
  openGraph: {
    title: "ITIN.io - Get Your ITIN Fast & Easy",
    description:
      "IRS-authorized ITIN processing in 2-4 weeks. Apply online from anywhere in the world.",
    url: "https://itin.io",
    siteName: "ITIN.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITIN.io - Get Your ITIN Fast & Easy",
    description:
      "IRS-authorized ITIN processing in 2-4 weeks. Apply online from anywhere in the world.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://itin.io"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
