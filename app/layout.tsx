import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.purenestra.com";

const description =
  "Gentle baby wipes made for soft, safe, everyday care. 2X wider, plant-based, pH-balanced and dermatologist tested.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PureNestra — Gentle baby wipes for delicate skin",
    template: "%s | PureNestra",
  },
  description,
  applicationName: "PureNestra",
  keywords: [
    "baby wipes",
    "sensitive skin",
    "plant-based wipes",
    "pH-balanced",
    "dermatologist tested",
    "PureNestra",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "PureNestra",
    title: "PureNestra — Gentle baby wipes for delicate skin",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PureNestra — Gentle baby wipes for delicate skin",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
      className={cn(
        "h-full",
        "antialiased",
        fraunces.variable,
        plusJakartaSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
