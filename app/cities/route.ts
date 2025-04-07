export const dynamic = "force-static";

import { getPublicDataFetch } from "@/src/utils/Request";
import { NextResponse } from "next/server";

export async function GET() {
  const cities = await getPublicDataFetch("/Cities?populate=*");

  return NextResponse.json(cities);
}
