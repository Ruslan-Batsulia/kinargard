import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLocales = ["uk", "en"];
const defaultLocale = "uk";

export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host") || "";
  const host = hostHeader.split(":")[0];
  const subdomain = host.split(".")[0];

  const locale = supportedLocales.includes(subdomain) ? subdomain : defaultLocale;

  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", locale, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
