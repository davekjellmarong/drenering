import { NextRequest, NextResponse } from "next/server";
import { STATIC_CITIES } from "@/src/utils/Constants";

// Old city URLs used the display name (/drenering/Oslo, /drenering/Tromsø).
// 301 them to the lowercase ASCII slug before any page or cache is involved;
// doing this inside the page would let a cached redirect overwrite the real
// page on case-insensitive file systems.
export function middleware(request: NextRequest) {
  const segment = decodeURIComponent(
    request.nextUrl.pathname.split("/")[2] ?? ""
  );
  const city = STATIC_CITIES.find(
    (c) => c.name.toLowerCase() === segment.toLowerCase() ||
      c.slug === segment.toLowerCase()
  );

  if (city && segment !== city.slug) {
    const url = request.nextUrl.clone();
    url.pathname = `/drenering/${city.slug}`;
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/drenering/:city",
};
