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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

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

  function onTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0];
    setTouchStartX(touch.clientX);
    setTouchStartY(touch.clientY);
  }

  function onTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX === null || touchStartY === null || items.length < 2)
      return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;

    setTouchStartX(null);
    setTouchStartY(null);

    const horizontalThreshold = 45;
    const verticalThreshold = 36;
    if (
      Math.abs(deltaX) > horizontalThreshold &&
      Math.abs(deltaY) < verticalThreshold
    ) {
      if (deltaX < 0) {
        nextImage();
      } else {
        previousImage();
      }
    }
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
            className="absolute inset-0"
            onClick={closeLightbox}
            aria-label="Close image preview"
          />

          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close image preview"
          >
            <Cancel01Icon className="h-5 w-5" />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/25 hidden md:inline-flex"
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
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/25 hidden md:inline-flex"
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

          <div
            className="relative z-10 mx-auto h-[78vh] md:h-[85vh] max-w-6xl"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={activeItem.url}
              alt={activeItem.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {items.length > 1 && (
            <div className="md:hidden absolute z-10 bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 glass-panel rounded-2xl px-3 py-2 flex items-center gap-3">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  previousImage();
                }}
                className="rounded-full bg-white/15 p-2 text-white"
                aria-label="Previous image"
              >
                <ArrowLeft01Icon className="h-5 w-5" />
              </button>
              <span className="text-xs text-white/85 font-medium min-w-14 text-center">
                {(activeIndex ?? 0) + 1} / {items.length}
              </span>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                className="rounded-full bg-white/15 p-2 text-white"
                aria-label="Next image"
              >
                <ArrowRight01Icon className="h-5 w-5" />
              </button>
            </div>
          )}

          <p className="md:hidden absolute z-10 bottom-[calc(max(1rem,env(safe-area-inset-bottom))+3.5rem)] left-1/2 -translate-x-1/2 text-[11px] text-white/60">
            Swipe to browse. Tap outside image to close.
          </p>
        </div>
      )}
    </>
  );
}
