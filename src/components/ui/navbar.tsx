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
import MobileNavTabs from "@/components/ui/mobile-nav-tabs";

interface NavbarProps {
  resumeUrl?: string;
}

export default function Navbar({ resumeUrl }: Readonly<NavbarProps>) {
  const hasResume = Boolean(resumeUrl);

  return (
    <>
      <div className="hidden sm:block fixed top-4 left-0 right-0 w-full z-50 px-6">
        <div className="grid grid-cols-[auto_1fr_auto] items-start gap-2">
          <div className="flex justify-start">
            <Link
              href="/"
              aria-label="Home"
              className="glass-panel p-2 rounded-xl text-foreground hover:text-accent transition-colors"
            >
              <Logo className="w-8 h-8" bgColor="oklch(14% 0.005 286)" />
            </Link>
          </div>

          <div className="flex justify-center min-w-0">
            <nav className="glass-panel px-6 py-3 rounded-lg shadow-lg shadow-black/20 max-w-full overflow-x-auto">
              <ul className="flex items-center gap-8 whitespace-nowrap">
                <li>
                  <Link
                    href="/"
                    className="group flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Home01Icon className="h-5 w-5" />
                    <span className="text-xs font-medium tracking-wide">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="group flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <UserIcon className="h-5 w-5" />
                    <span className="text-xs font-medium tracking-wide">
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="group flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <CodeCircleIcon className="h-5 w-5" />
                    <span className="text-xs font-medium tracking-wide">
                      Projects
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="group flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail01Icon className="h-5 w-5" />
                    <span className="text-xs font-medium tracking-wide">
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="hidden md:flex justify-end gap-2">
            <Link
              href="/blog"
              className="glass-panel px-4 py-2.5 rounded-lg text-muted-foreground hover:text-foreground transition-colors inline-flex flex-col items-center gap-1 min-w-20"
            >
              <News01Icon className="w-5 h-5" />
              <span className="text-xs font-medium tracking-wide">Blog</span>
            </Link>

            {hasResume && (
              <a
                href={resumeUrl}
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

      <div className="fixed sm:hidden top-4 left-5 z-50">
        <Link
          href="/"
          aria-label="Home"
          className="glass-panel w-11 h-11 rounded-xl text-foreground hover:text-accent transition-colors inline-flex items-center justify-center"
        >
          <Logo className="w-6 h-6" bgColor="oklch(14% 0.005 286)" />
        </Link>
      </div>

      <div className="fixed sm:hidden left-2 right-2 bottom-4 z-50">
        <nav className="glass-panel bg-card/95 border-white/20 px-2 py-2 rounded-2xl shadow-[0_14px_34px_rgba(0,0,0,0.55)] overflow-hidden">
          <MobileNavTabs resumeUrl={resumeUrl} />
        </nav>
      </div>
    </>
  );
}
