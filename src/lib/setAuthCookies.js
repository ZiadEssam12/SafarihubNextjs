export async function setCookiesHeader({ sessionTokenCookie }) {
  const headers = {};
  if (sessionTokenCookie) {
    // Construct the cookie string to send
    headers[
      "Cookie"
    ] = `${sessionTokenCookie.name}=${sessionTokenCookie.value}`;
  }

  return headers;
}
