import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import DotPattern from "@/components/ui/dotted-background";
import { draftMode } from "next/headers";
import DisableDraftMode from "@/components/disable-draft-mode";
import { VisualEditing } from "next-sanity";
import Navbar from "@/components/ui/navbar";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} antialiased relative min-h-screen`}
      >
        <Navbar />
        <DotPattern className="fixed inset-0" />
        <main className="relative container min-h-screen px-4 mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 dark:text-white">
          {children}
        </main>
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing zIndex={1000} />
          </>
        )}
      </body>
    </html>
  );
}
