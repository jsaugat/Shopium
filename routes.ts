export const publicRoutes = [
  // User can change their email from the settings page while being logged in so... this route must be public 
  "/auth/verify-email",
  "/auth/new-password"
]
export const authRoutes = ["/auth/login", "/auth/signup"]
export const apiAuthPrefix = "/api/auth";
export const DEFAULT_LOGIN_REDIRECT = "/profile"

/**
 * Route and configuration constants for authentication:
 *
 * - `publicRoutes`: Defines routes accessible without authentication (e.g., home page).
 * - `authRoutes`: Contains routes specifically for authentication actions, such as login and signup.
 * - `apiAuthPrefix`: Prefix path for API routes handling authentication-related requests (e.g., login and signup API endpoints).
 * - `DEFAULT_LOGIN_REDIRECT`: Default route to redirect users after a successful login.
 */