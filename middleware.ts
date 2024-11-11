// export { auth as middleware } from "@/auth"

import { auth, BASE_PATH } from "@/auth";
import { NextResponse } from "next/server";

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

export default auth(
  request => {
    const reqUrl = new URL(request.url);

    // If not authenticated and not at home route, redirect to the login page.
    if (!request.auth && reqUrl.pathname !== "/") {
      const PUBLIC_REDIRECT_PATH = new URL(
        `${BASE_PATH}/signin?callback=${encodeURIComponent(reqUrl.pathname)}`,
        request.url
      )
      return NextResponse.redirect(PUBLIC_REDIRECT_PATH)
    }
  }
)