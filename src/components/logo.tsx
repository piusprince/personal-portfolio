import React from 'react';

interface LogoProps {
  className?: string;
  bgColor?: string; // To handle the "cut-out" effect based on your site's background
}

export default function Logo({ className = "w-12 h-12", bgColor = "#0F172A" }: LogoProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 140 140" 
      className={className}
      aria-label="Pius Prince Logo"
      role="img"
    >
      {/* First 'P' (Back) */}
      <path 
        d="M 45,95 L 45,35 L 70,35 A 20,20 0 0,1 90,55 A 20,20 0 0,1 70,75 L 45,75" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="12" 
        strokeLinejoin="miter" 
        strokeLinecap="square" 
      />

      {/* Second 'P' Outline 
        This creates the interlocking 'cut-out' effect. 
        It matches the bgColor prop to look transparent against your site's background.
      */}
      <path 
        d="M 65,115 L 65,55 L 90,55 A 20,20 0 0,1 110,75 A 20,20 0 0,1 90,95 L 65,95" 
        fill="none" 
        stroke={bgColor} 
        strokeWidth="22" 
        strokeLinejoin="miter" 
        strokeLinecap="square" 
      />

      {/* Second 'P' (Front) */}
      <path 
        d="M 65,115 L 65,55 L 90,55 A 20,20 0 0,1 110,75 A 20,20 0 0,1 90,95 L 65,95" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="12" 
        strokeLinejoin="miter" 
        strokeLinecap="square" 
      />
    </svg>
  );
}