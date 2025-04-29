"use client";

export async function authorizeCredentials(credentials) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/authorize`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      return null;
    }

    return data.user;
  } catch (error) {
    console.error("Authentication error:", error);
    return null;
  }
}
