import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import the Inter font
import "./globals.css";

// Configure the Inter font
const interFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oumar Barry | Full-Stack Developer Portfolio",
  description:
    "Welcome to Oumar Barry's portfolio. I am a passionate full-stack developer specializing in building innovative web applications using modern technologies like Next.js, Tailwind CSS, and TypeScript. Explore my projects, skills, and professional journey.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont} antialiased`}>{children}</body>
    </html>
  );
}
