"use client";

import { useState } from "react";
import { Headline, BodyText } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { SentIcon, Github01Icon, Linkedin01Icon } from "hugeicons-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/piusprince",
    icon: Github01Icon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/piusprince",
    icon: Linkedin01Icon,
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Simple mailto fallback — swap for a real API when ready (e.g. Resend, Formspree)
    window.location.href = `mailto:piusprince@example.com?subject=Hey from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0A${encodeURIComponent(form.email)}`;
    setStatus("sent");
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-16">
        <BodyText muted className="text-sm uppercase tracking-widest font-semibold mb-4">
          Get in Touch
        </BodyText>
        <Headline as="h1" className="text-5xl md:text-6xl tracking-tight mb-6 leading-[1.1]">
          Let&apos;s talk.
        </Headline>
        <BodyText muted className="text-lg max-w-xl leading-relaxed">
          I&apos;m open to new projects, collaborations, and interesting conversations.
          Drop me a message and I&apos;ll get back to you.
        </BodyText>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-foreground)]">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] transition-shadow text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-foreground)]">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] transition-shadow text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-foreground)]">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              required
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)] resize-none transition-shadow text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full px-8 font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <SentIcon className="w-4 h-4 ml-2" />
            </Button>
            {status === "sent" && (
              <BodyText muted className="text-sm">
                Opening your mail client…
              </BodyText>
            )}
          </div>
        </form>

        {/* Sidebar */}
        <div className="flex flex-col gap-8">
          <div>
            <BodyText className="text-xs uppercase tracking-widest text-[var(--color-muted-foreground)] font-semibold mb-3">
              Email
            </BodyText>
            <a
              href="mailto:piusprince@example.com"
              className="text-sm text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              piusprince@example.com
            </a>
          </div>

          <div>
            <BodyText className="text-xs uppercase tracking-widest text-[var(--color-muted-foreground)] font-semibold mb-3">
              Social
            </BodyText>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <BodyText className="text-xs uppercase tracking-widest text-[var(--color-muted-foreground)] font-semibold mb-3">
              Based in
            </BodyText>
            <BodyText muted className="text-sm">
              Takoradi, Ghana 🇬🇭
            </BodyText>
          </div>
        </div>
      </div>
    </div>
  );
}
