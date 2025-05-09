import SectionHeader from "@/components/SectionHeader/SectionHeader";

export default function WishlistLoading() {
  return (
    <div className="container mx-auto px-4 py-10 min-h-[70vh]">
      <SectionHeader
        title="My Wishlist"
        subtitle="Your favorite safari adventures saved for later"
      />

      <div className="mt-8">
        {/* Skeleton loader for wishlist items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col h-full animate-pulse"
            >
              {/* Image skeleton */}
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>

              {/* Content skeleton */}
              <div className="p-4 flex-grow flex flex-col">
                {/* Title skeleton */}
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md mb-2 w-3/4"></div>

                {/* Location skeleton */}
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md mb-3 w-2/3"></div>

                {/* Details skeleton */}
                <div className="flex flex-wrap gap-3 mb-3">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-20"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-24"></div>
                </div>

                <div className="mt-auto">
                  {/* Price and button skeleton */}
                  <div className="flex justify-between items-end">
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-24"></div>
                    <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-md w-28"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
