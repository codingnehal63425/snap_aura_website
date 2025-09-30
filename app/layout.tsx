import type { Metadata } from "next";
import { Belleza, Bebas_Neue } from "next/font/google";
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

export const metadata: Metadata = {
  title: "SNAPAURA - Professional Photography",
  description: "Fashion, portrait, and commercial photography services by SNAPAURA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${belleza.variable} ${bebasNeue.variable} antialiased bg-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
