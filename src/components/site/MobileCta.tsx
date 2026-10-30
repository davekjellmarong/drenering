"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Sticky "get quotes" bar on phones. Hidden on the quote flow itself and the
// partner sign-up, where it would only get in the way.
export function MobileCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/tilbud") || pathname.startsWith("/bli-partner")) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-3 backdrop-blur sm:hidden">
      <Link
        href="/tilbud"
        className="block rounded-lg bg-clay-500 py-3 text-center font-semibold text-white"
      >
        Få gratis tilbud på drenering
      </Link>
    </div>
  );
}
