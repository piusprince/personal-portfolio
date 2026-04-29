"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home01Icon,
  UserIcon,
  CodeCircleIcon,
  Mail01Icon,
  News01Icon,
  File01Icon,
} from "hugeicons-react";
import { cn } from "@/lib/utils";

interface MobileNavTabsProps {
  resumeUrl?: string;
}

const tabs = [
  { href: "/", label: "Home", icon: Home01Icon },
  { href: "/about", label: "About", icon: UserIcon },
  { href: "/projects", label: "Projects", icon: CodeCircleIcon },
  { href: "/contact", label: "Contact", icon: Mail01Icon },
  { href: "/blog", label: "Blog", icon: News01Icon },
];

export default function MobileNavTabs({
  resumeUrl,
}: Readonly<MobileNavTabsProps>) {
  const pathname = usePathname();

  return (
    <ul
      className={cn("grid gap-0.5", resumeUrl ? "grid-cols-6" : "grid-cols-5")}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive =
          tab.href === "/"
            ? pathname === "/"
            : pathname === tab.href || pathname.startsWith(`${tab.href}/`);

        return (
          <li key={tab.href} className="min-w-0">
            <Link
              href={tab.href}
              aria-current={isActive ? "page" : undefined}
              data-umami-event={`Mobile Nav ${tab.label} Link`}
              className={cn(
                "w-full min-w-0 flex flex-col items-center justify-center rounded-lg px-1 py-1.5 transition-colors",
                isActive
                  ? "text-foreground bg-white/8"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="text-[9px] leading-tight mt-1 truncate">
                {tab.label}
              </span>
            </Link>
          </li>
        );
      })}

      {resumeUrl && (
        <li className="min-w-0">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            data-umami-event="Mobile Nav CV Download"
            className="w-full min-w-0 flex flex-col items-center justify-center rounded-lg px-1 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Open CV"
          >
            <File01Icon className="h-4 w-4" />
            <span className="text-[9px] leading-tight mt-1 truncate">CV</span>
          </a>
        </li>
      )}
    </ul>
  );
}
