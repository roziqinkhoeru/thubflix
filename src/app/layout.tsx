import { ThemeProvider } from "@/components/provider/theme-provider";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Thubflix | Discover Movie Trailers",
    template: "%s | Thubflix",
  },
  description:
    "Explore Thubflix - your ultimate resource for discovering and watching the latest movie trailers. Powered by TMDB.",
  abstract:
    "Thubflix offers a comprehensive collection of movie trailers, including the latest releases, top-rated films, and much more, all powered by TMDB.",
  applicationName: "Thubflix",
  keywords:
    "movie trailers, film trailers, latest movies, upcoming films, TMDB, Thubflix, movie previews, cinema trailers",
  openGraph: {
    title: "Thubflix",
    description:
      "Explore Thubflix - your ultimate resource for discovering and watching the latest movie trailers. Powered by TMDB.",
    url: "https://thubflix.vercel.app",
    siteName: "Thubflix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/thubflix-square.png",
        width: 1200,
        height: 630,
        alt: "Thubflix - Discover Movie Trailers",
      },
    ],
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
  twitter: {
    title: "Thubflix",
    card: "summary_large_image",
    description:
      "Explore Thubflix - your ultimate resource for discovering and watching the latest movie trailers. Powered by TMDB.",
    images: [
      {
        url: "/thubflix-square.png",
        alt: "Thubflix - Discover Movie Trailers",
      },
    ],
  },
  alternates: {
    canonical: "https://thubflix.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-full min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
