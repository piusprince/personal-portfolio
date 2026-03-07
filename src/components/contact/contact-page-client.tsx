"use client";

import { useState } from "react";
import { Headline, BodyText } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import {
  SentIcon,
  Github01Icon,
  Linkedin01Icon,
  TwitterIcon,
  LinkSquare01Icon,
  Location01Icon,
  Mail01Icon,
} from "hugeicons-react";

interface SocialItem {
  platform: string;
  url: string;
}

interface ContactPageClientProps {
  email: string;
  location: string;
  socials: SocialItem[];
}

function getSocialIcon(platform: string) {
  const value = platform.toLowerCase();
  if (value.includes("github")) return Github01Icon;
  if (value.includes("linkedin")) return Linkedin01Icon;
  if (value.includes("twitter") || value.includes("x")) return TwitterIcon;
  return LinkSquare01Icon;
}

export default function ContactPageClient({
  email,
  location,
  socials,
}: Readonly<ContactPageClientProps>) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // Client-side fallback: opens the user's mail app with prefilled content.
    globalThis.location.href = `mailto:${email}?subject=Hey from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0A${encodeURIComponent(form.email)}`;
    setStatus("sent");
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <BodyText
          muted
          className="text-sm uppercase tracking-widest font-semibold mb-4"
        >
          Get in Touch
        </BodyText>
        <Headline
          as="h1"
          className="text-5xl md:text-6xl tracking-tight mb-6 leading-[1.1]"
        >
          Let&apos;s talk.
        </Headline>
        <BodyText muted className="text-lg max-w-xl leading-relaxed">
          I&apos;m open to new projects, collaborations, and interesting
          conversations. Drop me a message and I&apos;ll get back to you.
        </BodyText>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-widest text-(--color-muted-foreground)"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-(--color-border) bg-(--color-card) text-(--color-foreground) placeholder:text-(--color-muted-foreground) focus:outline-none focus:ring-2 focus:ring-(--color-ring) transition-shadow text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-widest text-(--color-muted-foreground)"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-(--color-border) bg-(--color-card) text-(--color-foreground) placeholder:text-(--color-muted-foreground) focus:outline-none focus:ring-2 focus:ring-(--color-ring) transition-shadow text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-widest text-(--color-muted-foreground)"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              required
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-xl border border-(--color-border) bg-(--color-card) text-(--color-foreground) placeholder:text-(--color-muted-foreground) focus:outline-none focus:ring-2 focus:ring-(--color-ring) resize-none transition-shadow text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full px-8 font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              {status === "sending" ? "Opening mail app…" : "Send message"}
              <SentIcon className="w-4 h-4 ml-2" />
            </Button>
            {status === "sent" && (
              <BodyText muted className="text-sm">
                Your mail client should open with a prefilled draft.
              </BodyText>
            )}
          </div>
        </form>

        <div className="flex flex-col gap-8">
          <div>
            <BodyText className="text-xs uppercase tracking-widest text-(--color-muted-foreground) font-semibold mb-3">
              Email
            </BodyText>
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-2 text-sm text-(--color-foreground) hover:text-(--color-accent) transition-colors"
            >
              <Mail01Icon className="w-4 h-4 text-accent transition-transform group-hover:scale-110" />
              {email}
            </a>
          </div>

          <div>
            <BodyText className="text-xs uppercase tracking-widest text-(--color-muted-foreground) font-semibold mb-3">
              Social
            </BodyText>
            <div className="flex flex-col gap-3">
              {socials.map((link) => {
                const Icon = getSocialIcon(link.platform);
                return (
                  <a
                    key={`${link.platform}-${link.url}`}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-(--color-muted-foreground) hover:text-(--color-foreground) transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {link.platform}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <BodyText className="text-xs uppercase tracking-widest text-(--color-muted-foreground) font-semibold mb-3">
              Based in
            </BodyText>
            <BodyText muted className="flex items-center gap-2 text-sm">
              <Location01Icon className="w-4 h-4 text-accent" />
              {location}
            </BodyText>
          </div>
        </div>
      </div>
    </div>
  );
}
