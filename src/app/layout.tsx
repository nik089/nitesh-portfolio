import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nitesh Yadav | Senior Frontend Developer",
  description: "Senior Frontend Developer with 4+ years building scalable, accessible, high-performance web applications. Specialist in Angular, React, Next.js, TypeScript, and Design Systems.",
  keywords: ["Frontend Developer", "Angular", "React", "TypeScript", "Next.js", "Design Systems", "Accessibility", "Portfolio"],
  authors: [{ name: "Nitesh Yadav" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  other: {
    "theme-color": "#0a0a0f",
  },
  openGraph: {
    title: "Nitesh Yadav | Senior Frontend Developer",
    description: "Building scalable, accessible, and high-performance web experiences for enterprise teams.",
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
      <body className="noise-overlay font-sans antialiased">{children}</body>
    </html>
  );
}
