import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sque – Turn customer conversations into product decisions",
    template: "%s – Sque",
  },
  description:
    "Transform qualitative customer feedback into quantitative insights. Sque synthesizes interviews, surveys, and feedback into structured insights, themes, and evidence you can act on.",
  keywords: [
    "customer research",
    "product insights",
    "customer feedback analysis",
    "user research",
    "product decisions",
    "customer interviews",
    "survey analysis",
    "AI research",
    "product management",
    "customer insights",
  ],
  authors: [{ name: "Sque" }],
  creator: "Sque",
  publisher: "Sque",
  metadataBase: new URL("https://sque.ai"),
  alternates: {
    canonical: "https://sque.ai",
  },
  openGraph: {
    title: "Sque – Turn customer conversations into product decisions",
    description:
      "Transform qualitative customer feedback into quantitative insights. Sque synthesizes interviews, surveys, and feedback into structured insights, themes, and evidence you can act on.",
    type: "website",
    url: "https://sque.ai",
    siteName: "Sque",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sque - Customer insights at the speed of AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sque – Turn customer conversations into product decisions",
    description:
      "Transform qualitative customer feedback into quantitative insights. Sque synthesizes interviews, surveys, and feedback into structured insights, themes, and evidence you can act on.",
    creator: "@sque_ai",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const maintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {maintenance ? (
          <div className="grid min-h-screen place-items-center p-6">
            <div className="max-w-md text-center">
              <h1 className="text-2xl font-semibold">
                We&apos;ll be right back
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                We&apos;re performing scheduled maintenance. Please check again
                soon.
              </p>
            </div>
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
