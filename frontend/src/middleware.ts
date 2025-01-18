/* eslint-disable prettier/prettier */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get("auth_token_fin_plan");

  if (isAuthenticated && request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  if (!isAuthenticated && request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/login", request.url));
  }

  if (isAuthenticated && request.nextUrl.pathname === "/login") {
    return NextResponse.rewrite(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
