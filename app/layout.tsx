import type { Metadata, Viewport } from "next";
import { Alegreya, Mulish, Reddit_Mono } from "next/font/google";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-alegreya",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mulish",
  display: "swap",
});

const redditMono = Reddit_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-reddit-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.company.name,
    template: `%s · ${content.company.name}`,
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const viewport: Viewport = { themeColor: content.colors.papier };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      className={`${alegreya.variable} ${mulish.variable} ${redditMono.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <SleadsBadge />
      </body>
    </html>
  );
}
