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

  return (
    <div className="fixed top-4 left-0 right-0 w-full grid grid-cols-3 items-start z-50 px-4 sm:px-6">
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

      {/* Center — nav pill, truly centered */}
      <div className="flex justify-center">
        <nav className="glass-panel px-6 py-3 rounded-lg shadow-lg shadow-black/20">
          <ul className="flex items-center space-x-8">
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

      {/* Right — utility links */}
      <div className="flex justify-end gap-2">
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
  );
}
