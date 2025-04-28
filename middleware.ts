import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // console.log("Middleware triggered", req.nextUrl.pathname);

  const token = req.cookies.get("authToken")?.value;
  // console.log("Token from cookies:", token);

  const protectedPaths = ["/booking", "/my-booking", "/profile"];
  const authPages = ["/login", "/signup", "/forget-password", "/verify"];
  const pathname = req.nextUrl.pathname.toLowerCase();

  const isProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );
  const isAuthPage = authPages.some((path) =>
    pathname === path
  );

  if (isProtectedPath && !token) {
    // Not logged in and trying to access protected route -> redirect to login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isAuthPage) {
    // Logged in and trying to access auth-related pages -> redirect to home or dashboard
    return NextResponse.redirect(new URL("/", req.url)); // Redirect to homepage or dashboard
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/booking/:path*",
    "/my-booking/:path*",
    "/profile/:path*",
    "/login",
    "/signup",
    "/forget-password",
    "/verify",
  ],
};