// filepath: f:\frontend projects\Nextjs\Safari hub\src\lib\utils.js
export function getSessionCookieName() {
  const isProduction = process.env.NODE_ENV === "production";
  return isProduction
    ? "__Secure-authjs.session-token"
    : "authjs.session-token";
}
