import { ThemeProvider } from "@/components/provider/theme-provider";
import Footer from "@/components/shared/Footer";
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
    default: "Dogland | Discover Dog Breeds",
    template: "%s | Dogland",
  },
  description:
    "Explore Dogland - your ultimate resource for discovering and learning about various dog breeds. Powered by DopAPI.",
  abstract:
    "Dogland offers comprehensive information on dog breeds, including characteristics, history, and images, all powered by DopAPI.",
  applicationName: "Dogland",
  keywords:
    "dog breeds, dog information, canine database, dog photos, pet care, dog characteristics, DopAPI",
  openGraph: {
    title: "Dogland",
    description:
      "Explore Dogland - your ultimate resource for discovering and learning about various dog breeds. Powered by DopAPI.",
    url: "https://dogland.vercel.app",
    siteName: "Dogland",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dogland.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dogland - Discover Dog Breeds",
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
    title: "Dogland",
    card: "summary_large_image",
    description:
      "Explore Dogland - your ultimate resource for discovering and learning about various dog breeds. Powered by DopAPI.",
    images: [
      {
        url: "https://dogland.vercel.app/twitter-image.jpg",
        alt: "Dogland - Discover Dog Breeds",
      },
    ],
  },
  alternates: {
    canonical: "https://dogland.vercel.app",
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
          "h-full min-h-screen w-full overflow-x-hidden bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
