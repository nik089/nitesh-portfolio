import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nitesh Yadav | Senior Frontend Developer",
  description: "Building scalable, accessible, and high-performance web experiences. Senior Frontend Developer with 4+ years in Angular, React, TypeScript.",
  keywords: ["Frontend Developer", "Angular", "React", "TypeScript", "Portfolio", "Web Developer"],
  authors: [{ name: "Nitesh Yadav" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  other: {
    "theme-color": "#0a192f",
  },
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
