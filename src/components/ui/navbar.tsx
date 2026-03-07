import Link from "next/link";
import {
  Home01Icon,
  UserIcon,
  CodeCircleIcon,
  Mail01Icon,
  News01Icon,
  File01Icon,
} from "hugeicons-react";
import Logo from "@/components/logo";
import { getProfile } from "@/app/_actions/getProfile";

export default async function Navbar() {
  const profile = await getProfile();
  const hasResume = Boolean(profile?.resumeUrl);

  return (
    <>
      <div className="fixed top-3 sm:top-4 left-0 right-0 w-full z-50 px-3 sm:px-6">
        <div className="grid grid-cols-[auto_1fr_auto] items-start gap-2 sm:gap-0">
          {/* Left — logo */}
          <div className="flex justify-start">
            <Link
              href="/"
              aria-label="Home"
              className="glass-panel p-2 rounded-xl text-foreground hover:text-accent transition-colors"
            >
              <Logo className="w-8 h-8" bgColor="oklch(14% 0.005 286)" />
            </Link>
          </div>

          {/* Center — desktop nav pill */}
          <div className="hidden sm:flex justify-center min-w-0">
            <nav className="glass-panel px-6 py-3 rounded-lg shadow-lg shadow-black/20 max-w-full overflow-x-auto">
              <ul className="flex items-center gap-8 whitespace-nowrap">
                <li>
                  <Link
                    href="/"
                    className="group flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Home01Icon className="h-5 w-5" />
                    <span className="text-xs font-medium tracking-wide">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="group flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <UserIcon className="h-5 w-5" />
                    <span className="text-xs font-medium tracking-wide">About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="group flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <CodeCircleIcon className="h-5 w-5" />
                    <span className="text-xs font-medium tracking-wide">Projects</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="group flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail01Icon className="h-5 w-5" />
                    <span className="text-xs font-medium tracking-wide">Contact</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right — utility links */}
          <div className="hidden md:flex justify-end gap-2">
            <Link
              href="/blog"
              className="glass-panel px-4 py-2.5 rounded-lg text-muted-foreground hover:text-foreground transition-colors inline-flex flex-col items-center gap-1 min-w-20"
            >
              <News01Icon className="w-5 h-5" />
              <span className="text-xs font-medium tracking-wide">Blog</span>
            </Link>

            {profile?.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-panel px-4 py-2.5 rounded-lg text-muted-foreground hover:text-foreground transition-colors inline-flex flex-col items-center gap-1 min-w-20"
              >
                <File01Icon className="w-5 h-5" />
                <span className="text-xs font-medium tracking-wide">CV</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Mobile floating tab bar */}
      <div className="fixed sm:hidden left-1/2 -translate-x-1/2 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 w-[calc(100%-1.5rem)] max-w-sm">
        <nav className="glass-panel px-4 py-2.5 rounded-2xl shadow-xl shadow-black/40">
          <ul
            className={`grid items-center gap-1 ${
              hasResume ? "grid-cols-6" : "grid-cols-5"
            }`}
          >
            <li>
              <Link
                href="/"
                className="flex flex-col items-center justify-center rounded-lg px-1 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Home"
              >
                <Home01Icon className="h-5 w-5" />
                <span className="text-[10px] leading-tight mt-1">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex flex-col items-center justify-center rounded-lg px-1 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="About"
              >
                <UserIcon className="h-5 w-5" />
                <span className="text-[10px] leading-tight mt-1">About</span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="flex flex-col items-center justify-center rounded-lg px-1 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Projects"
              >
                <CodeCircleIcon className="h-5 w-5" />
                <span className="text-[10px] leading-tight mt-1">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex flex-col items-center justify-center rounded-lg px-1 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Contact"
              >
                <Mail01Icon className="h-5 w-5" />
                <span className="text-[10px] leading-tight mt-1">Contact</span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="flex flex-col items-center justify-center rounded-lg px-1 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Blog"
              >
                <News01Icon className="h-5 w-5" />
                <span className="text-[10px] leading-tight mt-1">Blog</span>
              </Link>
            </li>
            {hasResume && (
              <li>
                <a
                  href={profile?.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center rounded-lg px-1 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Open CV"
                >
                  <File01Icon className="h-5 w-5" />
                  <span className="text-[10px] leading-tight mt-1">CV</span>
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
