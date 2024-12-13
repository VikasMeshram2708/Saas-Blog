import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikas Meshram | Programming Blogs & Tech Insights",
  description:
    "Explore Vikas Meshram's personal website featuring blogs on programming, web development, and the latest trends in the tech industry. Discover tips, tutorials, and insights to enhance your tech journey.",
  keywords: [
    "Vikas Meshram",
    "programming blogs",
    "tech insights",
    "web development",
    "software engineering",
    "coding tutorials",
    "latest tech trends",
    "personal blogs",
  ],
  authors: [
    { name: "Vikas Meshram", url: "https://vikasmeshram-portfolio.vercel.app" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="py-20 prose w-full max-w-7xl mx-auto text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
