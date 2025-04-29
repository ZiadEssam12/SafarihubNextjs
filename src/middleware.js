// middleware.js
export { default } from "next-auth/middleware";

// (optional) you can control which routes need auth:
export const config = {
  matcher: [
    "/dashboard/:path*", // protect dashboard and subpages
    "/admin/:path*",
  ],
};
