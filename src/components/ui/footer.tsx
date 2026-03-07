import Link from "next/link";
import Logo from "@/components/logo";
import { getProfile } from "@/app/_actions/getProfile";
import { SocialLink } from "@/types/sanity";
import {
  Mail01Icon,
  GithubIcon,
  Linkedin01Icon,
  TwitterIcon,
  InstagramIcon,
  ArrowUpRight01Icon,
} from "hugeicons-react";

const getSocialIcon = (platform: string) => {
  const p = platform.toLowerCase();
  if (p.includes("github"))
    return (
      <GithubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
    );
  if (p.includes("linkedin"))
    return (
      <Linkedin01Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
    );
  if (p.includes("twitter") || p.includes("x"))
    return (
      <TwitterIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
    );
  if (p.includes("instagram"))
    return (
      <InstagramIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
    );
  return (
    <ArrowUpRight01Icon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  );
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default async function Footer() {
  const year = new Date().getFullYear();
  const profile = await getProfile();
  const profileName = profile?.name?.toLowerCase() || "pius prince";

  const socialLinks: { label: string; href: string }[] =
    profile?.socials?.map((s: SocialLink) => ({
      label: s.platform,
      href: s.url,
    })) || [];

  const email = profile?.email || "piusprince@example.com";

  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-24 pb-0">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand row */}
        <div className="mb-16 flex items-center gap-3 border-b border-white/5 pb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
            <Logo className="w-6 h-6" bgColor="oklch(14% 0.005 286)" />
          </div>
          <span className="font-bricolage font-bold text-white text-xl tracking-tight">
            {profileName}.
          </span>
        </div>

        {/* Main content grid: CTA left, links right */}
        <div className="mb-20 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_auto]">
          {/* Left — CTA */}
          <div className="max-w-md">
            <h2 className="mb-4 font-bricolage font-bold text-3xl text-white tracking-tight sm:text-4xl leading-tight">
              Let&apos;s build something great.
            </h2>
            <p className="mb-8 text-base text-neutral-400 leading-relaxed">
              I&apos;m open to new projects and collaborations. Reach out — I
              read every message.
            </p>
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black text-sm transition-all hover:pr-8 active:scale-95"
            >
              Get in touch
              <Mail01Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right — link columns */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Navigate
              </p>
              <ul className="flex flex-col gap-4 font-medium text-neutral-400">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Social
              </p>
              <ul className="flex flex-col gap-4 font-medium text-neutral-400">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 transition-colors hover:text-white"
                    >
                      {getSocialIcon(link.label)}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-white/5 py-8 font-medium text-neutral-500 text-sm md:flex-row md:items-center">
          <p>
            © {year} {profile?.name || "Pius Prince Oduro"}. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Built with Next.js · Sanity · Tailwind CSS v4</span>
          </div>
        </div>

        {/* Giant watermark name */}
        <div className="flex justify-center overflow-hidden pb-0">
          <span className="select-none font-bricolage font-bold text-[12vw] text-white/4 leading-none tracking-tighter">
            {profileName}.
          </span>
        </div>
      </div>
    </footer>
  );
}
