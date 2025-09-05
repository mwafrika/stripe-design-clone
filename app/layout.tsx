import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
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
  title: {
    default: "Sque – Customer insights at the speed of AI",
    template: "%s – Sque",
  },
  description:
    "Synthesize interviews, surveys, and feedback into product decisions with AI-powered research workflows.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Sque – Customer insights at the speed of AI",
    description:
      "Synthesize interviews, surveys, and feedback into product decisions with AI-powered research workflows.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sque – Customer insights at the speed of AI",
    description:
      "Synthesize interviews, surveys, and feedback into product decisions with AI-powered research workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = headers();
  const maintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {maintenance ? (
          <div className="grid min-h-screen place-items-center p-6">
            <div className="max-w-md text-center">
              <h1 className="text-2xl font-semibold">We’ll be right back</h1>
              <p className="mt-2 text-sm text-gray-500">
                We’re performing scheduled maintenance. Please check again soon.
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
