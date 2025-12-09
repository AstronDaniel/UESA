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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "UESA - Uganda Education Students Association",
    template: "%s | UESA",
  },
  description: "Uniting and empowering education students in Uganda to foster academic excellence, innovation, and sustainable development.",
  keywords: ["UESA", "Uganda Education Students Association", "Education Poland", "Makerere University", "Student Association", "Future Educators", "Uganda Education"],
  authors: [{ name: "Astron Daniel" }],
  creator: "UESA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uesa-three.vercel.app",
    title: "UESA - Uganda Education Students Association",
    description: "Uniting and empowering education students in Uganda.",
    siteName: "UESA",
    images: [
      {
        url: "/assets/og-image.jpg", // We don't have this yet but good to substitute or leave as placeholder
        width: 1200,
        height: 630,
        alt: "UESA - Uganda Education Students Association",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UESA - Uganda Education Students Association",
    description: "Uniting and empowering education students in Uganda.",
    creator: "@uesa_uganda",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
