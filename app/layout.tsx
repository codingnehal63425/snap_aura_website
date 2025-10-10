import type { Metadata } from "next";
import { Belleza, Bebas_Neue, Dancing_Script } from "next/font/google";
import "./globals.css";

const belleza = Belleza({
  weight: '400',
  variable: '--font-belleza',
  subsets: ['latin'],
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas-neue',
  subsets: ['latin'],
});

const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "SNAPAURA - Professional Photography",
  description: "Fashion, portrait, and commercial photography services by SNAPAURA",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Snap Aura",
    capable: true,
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${belleza.variable} ${bebasNeue.variable} ${dancingScript.variable} antialiased bg-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
