import { fetchUserFavorites } from "@/lib/api";
import { cookies } from "next/headers";
import WishlistClient from "./WishlistClient";

export const dynamic = "force-dynamic"; // Add this line

export default async function page() {
  const cookieStore = await cookies(); // Get cookies from the incoming request
  const sessionTokenCookie = cookieStore.get("authjs.session-token"); // Or whatever your session cookie is named

  const favorites = await fetchUserFavorites({ sessionTokenCookie });

  return (
    <div className="container mx-auto px-4 py-10 min-h-[70vh]">
      <div className="mt-8">
        <WishlistClient initialFavorites={favorites} />
      </div>
    </div>
  );
}
