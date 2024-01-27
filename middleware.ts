import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.has("token");
  const pathname = request.nextUrl.pathname;
  const AUTH_PATH =
    pathname === "/auth" ||
    pathname === "/auth/login" ||
    pathname === "/auth/signup";
  console.log(isLoggedIn);

  if (isLoggedIn && AUTH_PATH) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isLoggedIn && !AUTH_PATH) {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/auth", "/auth/login", "/auth/signup", "/"],
};
