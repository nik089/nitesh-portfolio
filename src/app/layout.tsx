import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nitesh Yadav | Senior Frontend Developer",
  description: "Building scalable, accessible, and high-performance web experiences. Senior Frontend Developer with 4+ years in Angular, React, TypeScript.",
  keywords: ["Frontend Developer", "Angular", "React", "TypeScript", "Portfolio", "Web Developer"],
  authors: [{ name: "Nitesh Yadav" }],
  openGraph: {
    title: "Nitesh Yadav | Senior Frontend Developer",
    description: "Building scalable, accessible, and high-performance web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}