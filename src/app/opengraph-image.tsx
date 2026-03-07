import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pius Prince Oduro — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 56,
            left: 80,
            width: 64,
            height: 64,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="38 28 78 94"
            width="36"
            height="36"
          >
            <path
              d="M 45,95 L 45,35 L 70,35 A 20,20 0 0,1 90,55 A 20,20 0 0,1 70,75 L 45,75"
              fill="none"
              stroke="#ffffff"
              strokeWidth="12"
              strokeLinejoin="miter"
              strokeLinecap="square"
            />
            <path
              d="M 65,115 L 65,55 L 90,55 A 20,20 0 0,1 110,75 A 20,20 0 0,1 90,95 L 65,95"
              fill="none"
              stroke="#09090b"
              strokeWidth="22"
              strokeLinejoin="miter"
              strokeLinecap="square"
            />
            <path
              d="M 65,115 L 65,55 L 90,55 A 20,20 0 0,1 110,75 A 20,20 0 0,1 90,95 L 65,95"
              fill="none"
              stroke="#ffffff"
              strokeWidth="12"
              strokeLinejoin="miter"
              strokeLinecap="square"
            />
          </svg>
        </div>

        <p
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6366f1",
            marginBottom: 24,
            margin: "80px 0 24px 0",
          }}
        >
          Software Engineer
        </p>

        <h1
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            margin: "0 0 32px 0",
            letterSpacing: "-0.03em",
          }}
        >
          Pius Prince Oduro
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 26,
            color: "#a1a1aa",
            margin: "0 0 56px 0",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Building high-performance frontends, CMS-driven systems, and
          multi-tenant products.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["Next.js", "TypeScript", "React", "Storyblok"].map((tag) => (
            <span
              key={tag}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: 16,
                color: "#a1a1aa",
                fontFamily: "monospace",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 18,
            color: "#52525b",
            margin: 0,
          }}
        >
          piusprince.com
        </p>
      </div>
    ),
    { ...size },
  );
}
