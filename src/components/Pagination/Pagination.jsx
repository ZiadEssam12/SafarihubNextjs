import React from "react";
import Link from "next/link"; // Don't forget to import Link

export default function Pagination({ pagination, baseUrl = "" }) {
  const { page = 1, pages = 1, total = 1, limit = 20 } = pagination || {};

  // Convert page to number and ensure it's valid
  const currentPage = parseInt(page, 10) || 1;
  const totalPages = parseInt(pages, 10) || 1;

  // Check if there are previous/next pages
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  // Create the query parameters
  const prevPageHref = hasPrevPage ? `${baseUrl}?page=${currentPage - 1}` : "";
  const nextPageHref = hasNextPage ? `${baseUrl}?page=${currentPage + 1}` : "";
  return (
    <div className="flex justify-center items-center gap-4 my-6">
      <div className="flex justify-center items-center gap-4">
        {/* handling prev page */}
        {hasPrevPage ? (
          <Link
            href={prevPageHref}
            className="py-2 px-4 border-2 border-gray-200 rounded-md text-black hover:bg-darkBlue hover:text-white transition duration-300"
          >
            Previous
          </Link>
        ) : (
          <>
            <button
              className="py-2 px-4 border-2 border-gray-200 rounded-md text-black cursor-not-allowed opacity-50"
              disabled={!hasPrevPage}
            >
              Previous
            </button>
          </>
        )}

        {/* Current Page Indicator */}
        {/* end current page  */}

        {/* handling next page  */}
        {hasNextPage ? (
          <Link
            href={nextPageHref}
            className="py-2 px-4 border-2 border-gray-200 rounded-md text-black hover:bg-darkBlue hover:text-white transition duration-300"
          >
            Next
          </Link>
        ) : (
          <button
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            disabled={!hasNextPage}
          >
            Next
          </button>
        )}
        {/* end next page  */}
      </div>
      <div>
        <p className="text-gray-600 text-sm">
          Showing
          <span className="font-semibold text-gray-800 mx-1">
            {(currentPage - 1) * limit + 1}-{currentPage * limit}
          </span>
          of
          <span className="font-semibold text-gray-800 mx-1">{total}</span>
        </p>
      </div>
    </div>
  );
}
