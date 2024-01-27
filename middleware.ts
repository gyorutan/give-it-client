import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  console.log(token);
  const isLoggedIn = request.cookies.has("token");
  const pathname = request.nextUrl.pathname;
  const AUTH_PATH =
    pathname === "/auth" ||
    pathname === "/auth/login" ||
    pathname === "/auth/signup";
  console.log(isLoggedIn);

  if (AUTH_PATH) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !AUTH_PATH) {
    return NextResponse.redirect(new URL("/auth", request.nextUrl));
  }

  return null;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/auth", "/auth/login", "/auth/signup", "/"],
};
