"use client";

export default function DisableDraftMode() {
  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg text-sm z-50 hover:bg-gray-800"
    >
      Disable Draft Mode
    </a>
  );
}
