"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
// import * as motion from "motion/react-client"

interface MasonryGridItem {
  id: string
  url: string
  alt: string
  aspectRatio?: "square" | "video" | "auto" | "portrait" | "landscape"
}

interface MasonryGridProps {
  items: MasonryGridItem[]
  className?: string
}

export function MasonryGrid({ items, className }: MasonryGridProps) {
  // A simple client-side masonry layout
  // In a real scenario, this would dynamically measure heights. 
  // For the portfolio, we use CSS columns or CSS grid with varying spans to achieve the "Eushi" look.

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]", className)}>
      {items.map((item, index) => {
        // Create an asymmetrical layout pattern (1st item huge, next two side-by-side, etc)
        const isFeatured = index % 5 === 0
        const isPortrait = item.aspectRatio === "portrait"
        
        // Tailwind classes for our pseudo-masonry bento look
        let spanClasses = "md:col-span-6 row-span-1"
        
        if (isFeatured) {
          spanClasses = "md:col-span-12 row-span-2 md:row-span-3"
        } else if (isPortrait) {
          spanClasses = "md:col-span-4 row-span-2"
        } else if (index % 3 === 0) {
          spanClasses = "md:col-span-8 row-span-2"
        }

        return (
          <div
            key={item.id}
            className={cn(
              spanClasses,
              "relative rounded-xl overflow-hidden glass-panel group"
            )}
          >
            {/* The actual image implementation would be next/image, using standard img for scaffold */}
            <img
              src={item.url}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle inner shadow/border overlay */}
            <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" />
          </div>
        )
      })}
    </div>
  )
}
