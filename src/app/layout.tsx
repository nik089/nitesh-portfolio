import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Nitesh Yadav | Senior Frontend Developer",
  description: "Senior Frontend Developer with 4+ years building scalable, accessible, high-performance web applications. Specialist in Angular, React, Next.js, TypeScript, and Design Systems.",
  keywords: ["Frontend Developer", "Angular", "React", "TypeScript", "Next.js", "Design Systems", "Accessibility", "Portfolio"],
  authors: [{ name: "Nitesh Yadav" }],
  creator: "Nitesh Yadav",
  publisher: "Nitesh Yadav",
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
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Nitesh Yadav | Senior Frontend Developer",
    description: "Building scalable, accessible, and high-performance web experiences for enterprise teams.",
    type: "website",
    locale: "en_US",
    siteName: "Nitesh Yadav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitesh Yadav | Senior Frontend Developer",
    description: "Building scalable, accessible, and high-performance web experiences for enterprise teams.",
    creator: "@niteshyadav",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`noise-overlay font-sans antialiased ${inter.variable} ${jetbrainsMono.variable} ${sora.variable}`}>
        {children}
      </body>
    </html>
  );
}
