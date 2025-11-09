import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

import { FooterGurbetci } from "@/components/blocks/footer-gurbetci";
import { NavbarGurbetci } from "@/components/blocks/navbar-gurbetci";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Gurbetci SuperApp - Polonya'daki Türk Gurbetçiler İçin",
    template: "%s | Gurbetci",
  },
  description:
    "Haberler, ilanlar, mekanlar, forum ve daha fazlası. Polonya'da yaşayan Türk gurbetçiler için her şey bir arada!",
  keywords: [
    "gurbetci",
    "polonya",
    "türk",
    "haberler",
    "ilan",
    "mekanlar",
    "forum",
    "warszawa",
    "türk gurbetçiler",
    "polonya türkler",
  ],
  authors: [{ name: "Gurbetci SuperApp Team" }],
  creator: "Gurbetci SuperApp",
  publisher: "Gurbetci SuperApp",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Gurbetci SuperApp",
    description:
      "Polonya'daki Türk gurbetçiler için süper uygulama. Haberler, ilanlar, mekanlar ve daha fazlası.",
    siteName: "Gurbetci",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gurbetci SuperApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurbetci SuperApp",
    description:
      "Polonya'daki Türk gurbetçiler için süper uygulama",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <NavbarGurbetci />
          <main className="">{children}</main>
          <FooterGurbetci />
        </ThemeProvider>
      </body>
    </html>
  );
}
