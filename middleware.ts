// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  // PUBLIC ROUTES (no auth required)
  const publicRoutes = ["/", "/about", "/contact"];

  // AUTH ROUTES (should not be accessible if logged in)
  const authRoutes = ["/login", "/register", "/forgot-password"];

  // PROTECTED ROUTES (require token)
  const protectedRoutes = ["/dashboard", "/chat"];

  // --- 1) PUBLIC ROUTES -> always allowed ---
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // --- 2) AUTH ROUTES: logged-in users shouldn't visit ---
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (isAuthRoute) {
    if (token) {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // --- 3) PROTECTED ROUTES ---
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // --- 4) Default allow ---
  return NextResponse.next();
}

// Define what routes middleware should monitor
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/chat/:path*",
    "/login",
    "/register",
    "/forgot-password",
  ],
};
