/* eslint-disable prettier/prettier */
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = false;

  // Redirect to home page if user is authenticated and tries to access "/login" route
  if (pathname === "/login" && accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect to login page if user is NOT authenticated and tries to access route "/"
  if (pathname === "/" && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect to home page if user tries access route "/auth" and is  authenticated
  if (pathname === "/auth" && accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// Configuration to only capture the pages that are accessed and not the Next assets or api
// Match all request paths except those starting with:
// - api (API routes)
// - _next/static (static files)
// - _next/image (image optimization files)
// - favicon.ico (favicon file)

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
