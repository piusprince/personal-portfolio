import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { draftMode } from "next/headers";
import DisableDraftMode from "@/components/disable-draft-mode";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PageTransition from "@/components/ui/page-transition";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Pius Prince Oduro - Software Engineer",
  description:
    "Software Engineer, Frontend Developer, and Open Source Enthusiast",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pius Prince Oduro - Software Engineer",
    description:
      "Software Engineer, Frontend Developer, and Open Source Enthusiast",
    url: siteUrl,
    siteName: "Pius Prince Oduro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pius Prince Oduro - Software Engineer",
    description:
      "Software Engineer, Frontend Developer, and Open Source Enthusiast",
  },
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
        <main className="relative container min-h-screen px-4 mx-auto sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-24 sm:pt-32 pb-28 sm:pb-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        {(await draftMode()).isEnabled && <DisableDraftMode />}
      </body>
    </html>
  );
}
