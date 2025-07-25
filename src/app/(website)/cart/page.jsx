import { EditIcon, TrashIcon } from "@/icons/Icons";
import Image from "next/image";
import Link from "next/link";
import { setCookiesHeader } from "@/lib/setAuthCookies";
import { cookies } from "next/headers";
import { getSessionCookieName, formatCartDate } from "@/lib/utils";
import { fetchUserCart } from "@/lib/api";
import ClearCartButton from "./ClearCartButton";
import DeleteItemFromCart from "./DeleteCartItem";
import EditCartItem from "./EditCartItem";

export const metadata = {
  title: "Cart - SafariHub",
  description: "View and manage your safari tours in your cart",
};

// Disable static generation for this page to always fetch fresh data
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function page() {
  const cookieStore = await cookies();
  const sessionCookieName = getSessionCookieName();
  const sessionTokenCookie = cookieStore.get(sessionCookieName);
  const headers = await setCookiesHeader({ sessionTokenCookie });

  // Add cache-busting timestamp
  const timestamp = Date.now();
  const headersWithCacheBust = {
    ...headers,
    "x-timestamp": timestamp.toString(),
  };
  const { cart } = await fetchUserCart({ headers: headersWithCacheBust });

  // Ensure cart has proper structure with fallbacks
  const safeCart = {
    items: cart?.items || [],
    itemCount: cart?.itemCount || cart?.items?.length || 0,
    total: cart?.total || 0,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 min-h-screen">
      {/* Cart Header */}
      {safeCart.itemCount > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-10 pb-4 border-b border-gray-300 dark:border-gray-700">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Your Cart
          </h1>
          <div className="mt-2 sm:mt-0 bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2">
            <p className="text-lg text-darkBlue">
              Total:{" "}
              <span className="text-2xl font-bold text-orange ml-2">
                ${safeCart.total}.00
              </span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {safeCart.itemCount} {safeCart.itemCount === 1 ? "item" : "items"}{" "}
              in your cart
            </p>
          </div>
        </div>
      )}
      {/* Cart Items */}
      <div className="flex flex-col gap-6">
        {safeCart.items?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="w-full md:w-[250px] h-[180px] md:h-[350px] relative">
              <Image
                src={item.tour.gallery[0]}
                alt={item.tour.title}
                width={250}
                height={350}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Content Container */}
            <div className="flex flex-col justify-between p-5 w-full">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <Link
                    href={`/tours/${item.tour.slug}`}
                    className="text-xl font-semibold text-darkBlue hover:text-orange dark:text-white dark:hover:text-orange transition-colors"
                  >
                    {item.tour.title}
                  </Link>

                  <div className="flex items-center gap-3">
                    <EditCartItem itemData={item} title={item.tour.title} />
                    <DeleteItemFromCart
                      itemId={item.id}
                      title={item.tour.title}
                    />
                  </div>
                </div>
              </div>{" "}
              {/* Trip Details */}
              <div className="grid grid-cols-1 gap-x-6 gap-y-3">
                <div className="flex flex-col space-y-1">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    From Date:
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {formatCartDate(item.fromDate)}
                  </span>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    To Date:
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {formatCartDate(item.toDate)}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide block">
                      Adults
                    </span>
                    <span className="text-lg font-bold text-darkBlue dark:text-white">
                      {item.adults}
                    </span>
                  </div>

                  <div className="text-center">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide block">
                      Children
                    </span>
                    <span className="text-lg font-bold text-darkBlue dark:text-white">
                      {item.children}
                    </span>
                  </div>

                  <div className="text-center">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide block">
                      Infants
                    </span>
                    <span className="text-lg font-bold text-darkBlue dark:text-white">
                      {item.infants}
                    </span>
                  </div>
                </div>
              </div>
              {/* Price */}
              <div className="flex justify-end mt-4">
                <div className="bg-orange/10 rounded-lg px-4 py-2">
                  <span className="text-orange font-bold text-2xl">
                    ${item.totalPrice}.00
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                    / tour
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      {/* Empty Cart State */}
      {safeCart.itemCount === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full mb-6 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
            Your cart is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Looks like you haven&apos;t added any tours to your cart yet.
          </p>
          <Link
            href="/hidden-gems"
            className="bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
          >
            Explore Tours
          </Link>
        </div>
      )}{" "}
      {/* Action Buttons */}
      {safeCart.itemCount > 0 && (
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <ClearCartButton />
          <Link
            href="/checkout"
            className="w-full sm:w-auto order-1 sm:order-2 bg-orange hover:bg-orange/90 text-sm md:text-md lg:text-lg text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md flex items-center justify-center"
          >
            <span>Proceed to Checkout</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
