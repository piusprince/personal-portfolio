"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
} from "hugeicons-react";
import { cn } from "@/lib/utils";

interface MasonryGridItem {
  id: string;
  url: string;
  alt: string;
  aspectRatio?: "square" | "video" | "auto" | "portrait" | "landscape";
}

interface MasonryGridProps {
  items: MasonryGridItem[];
  className?: string;
}

export function MasonryGrid({ items, className }: Readonly<MasonryGridProps>) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = useMemo(() => {
    if (activeIndex === null) return null;
    return items[activeIndex] ?? null;
  }, [activeIndex, items]);

  function closeLightbox() {
    setActiveIndex(null);
  }

  function nextImage() {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % items.length);
  }

  function previousImage() {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  }

  return (
    <>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}>
        {items.map((item, index) => {
          const isFeatured = index === 0;
          const isPortrait = item.aspectRatio === "portrait";

          let aspectClass = "aspect-[16/10]";
          if (isPortrait) aspectClass = "aspect-[4/5]";

          const spanClasses = isFeatured ? "md:col-span-2" : "md:col-span-1";

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                spanClasses,
                "relative rounded-xl overflow-hidden glass-panel group text-left cursor-zoom-in",
              )}
            >
              <div className={cn("relative w-full bg-card/20", aspectClass)}>
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, (min-width: 768px) 48vw, 96vw"
                  className="object-contain p-2 md:p-3 transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
              <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                Click to enlarge
              </div>
              <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" />
            </button>
          );
        })}
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 md:p-8">
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={closeLightbox}
            aria-label="Close image preview"
          >
            <Cancel01Icon className="h-5 w-5" />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                onClick={(event) => {
                  event.stopPropagation();
                  previousImage();
                }}
                aria-label="Previous image"
              >
                <ArrowLeft01Icon className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
              >
                <ArrowRight01Icon className="h-5 w-5" />
              </button>
            </>
          )}

          <div className="relative mx-auto h-[85vh] max-w-6xl">
            <Image
              src={activeItem.url}
              alt={activeItem.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
