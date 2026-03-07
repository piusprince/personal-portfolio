import { Headline, BodyText } from "@/components/ui/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Pius Prince Oduro",
  description:
    "Engineering notes, frontend architecture writeups, and product lessons.",
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <BodyText
        muted
        className="text-sm uppercase tracking-widest font-semibold mb-4"
      >
        Writing
      </BodyText>
      <Headline as="h1" className="text-5xl md:text-6xl tracking-tight mb-6">
        Blog
      </Headline>
      <BodyText muted className="text-lg leading-relaxed max-w-2xl">
        Articles are coming soon. This section will cover frontend architecture,
        CMS patterns, and practical lessons from production work.
      </BodyText>
    </div>
  );
}
