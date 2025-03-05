import { NextResponse } from "next/server";
import type { Locale } from "./src/common/types";
import { isLocale } from "./src/common/utils";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE } from "./src/common/constants";



export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host") || "";
  const host = hostHeader.split(":")[0];
  const subdomain = host.split(".")[0];

  const locale: Locale = isLocale(subdomain) ? subdomain : DEFAULT_LOCALE;

  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", locale, { path: "/" });
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel\\..*).*)'],
};
