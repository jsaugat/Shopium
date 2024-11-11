import { auth as middleware, LOGIN_PATH } from "@/auth";
import { NextResponse } from "next/server";

// Middleware that checks if a request is authenticated.
export default middleware((req) => {
  // console.log({ req })
  const pathname = req.nextUrl.pathname;
  const origin = req.nextUrl.origin;

  //! In unauthenticated request if 'req.nextUrl.pathname' is not LOGIN_PATH, redirect to LOGIN_PATH
  if (!req.auth && pathname !== LOGIN_PATH && pathname !== "/") {
    const loginUrl = new URL(
      `${LOGIN_PATH}/?callbackUrl=${encodeURIComponent(pathname)}`
      , origin
    )
    return NextResponse.redirect(loginUrl)
  }
})

export const config = {
  matcher: [
    // Match all paths, except those that start with `_next` (Next.js internals) 
    // or requests for static files (e.g., HTML, CSS, JS, images, fonts, documents, etc.), 
    // unless they are specifically mentioned in the query string.
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

    // Always apply middleware to API routes and tRPC routes, including any nested routes.
    '/(api|trpc)(.*)',
  ],
};