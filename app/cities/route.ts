export const dynamic = "force-static";

import { NextResponse } from "next/server";
import { STATIC_CITIES } from "@/src/utils/Constants";

export async function GET() {
  return NextResponse.json(STATIC_CITIES);
}
