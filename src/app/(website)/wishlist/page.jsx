// filepath: f:\frontend projects\Nextjs\Safari hub\src\app\(website)\wishlist\page.jsx
import { fetchUserFavorites } from "@/lib/api";
import { cookies } from "next/headers";
import WishlistClient from "./WishlistClient";
import { getSessionCookieName } from "@/lib/utils"; // Import the new utility function

export const dynamic = "force-dynamic";

export default async function page() {
  const cookieStore = await cookies();

  const sessionCookieName = getSessionCookieName(); // Use the utility function

  const sessionTokenCookie = cookieStore.get(sessionCookieName);

  const favorites = await fetchUserFavorites({ sessionTokenCookie });

  return (
    <div className="container mx-auto px-4 py-10 min-h-[70vh]">
      <div className="mt-8">
        <WishlistClient initialFavorites={favorites} />
      </div>
    </div>
  );
}
