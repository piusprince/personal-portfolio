"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";

export default function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  return (
    <a
      href="/api/draft-mode/disable"
      className="text-sm text-gray-600 hover:text-gray-900"
    >
      Disable Draft Mode
    </a>
  );
}
