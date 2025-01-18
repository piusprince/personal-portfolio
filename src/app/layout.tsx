import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import DotPattern from "@/components/ui/dotted-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pius Prince Oduro - Software Engineer",
  description:
    "Software Engineer, Frontend Developer, and Open Source Enthusiast",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        <DotPattern className="w-full h-full" />
        <main className="container min-h-screen px-4 mx-auto text-black bg-white sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 dark:bg-black dark:text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
