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

export const metadata: Metadata = {
  title: "Kartikeiya Rai — Software Engineer",
  description:
    "Software engineer specializing in React, Next.js, and full-stack web development. Based in Maharashtra, India.",
  keywords: ["software engineer", "React", "Next.js", "portfolio", "Kartikeiya Rai"],
  authors: [{ name: "Kartikeiya Rai" }],
  openGraph: {
    title: "Kartikeiya Rai — Software Engineer",
    description: "Software engineer specializing in React, Next.js, and full-stack web development.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
