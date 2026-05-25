import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coverposal.vercel.app"),
  title: "Coverposal — AI Upwork Proposal & Cover Letter Generator",
  description:
    "Generate winning Upwork proposals and cover letters in 30 seconds. Paste any job description, add your resume, and get a tailored proposal instantly. Free to try.",
  keywords: [
    "upwork proposal generator",
    "AI cover letter generator",
    "freelance proposal writer",
    "upwork proposal template",
    "AI proposal generator",
    "cover letter AI",
    "freelance job application",
  ],
  openGraph: {
    title: "Coverposal — Win More Upwork Jobs with AI",
    description:
      "Generate winning Upwork proposals and cover letters in 30 seconds. Free to try.",
    url: "https://coverposal.vercel.app",
    siteName: "Coverposal",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Coverposal — AI Upwork Proposal Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coverposal — Win More Upwork Jobs with AI",
    description:
      "Generate winning Upwork proposals and cover letters in 30 seconds. Free to try.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
