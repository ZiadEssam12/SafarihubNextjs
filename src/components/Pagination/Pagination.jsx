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

  const pagesList = new Array(totalPages).fill(0).map((_, index) => index + 1);

  return (
    <div className="flex flex-col md:flex-row items-center w-full my-6 relative">
      {/* Center div - takes full width on mobile, centered on desktop */}
      <div className="flex justify-center items-center gap-4 w-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
        {/* Your pagination controls - Previous button, page numbers, Next button */}
        {/* handling prev page */}
        {hasPrevPage ? (
          <Link
            href={prevPageHref}
            className="py-2 px-4 border-2 border-gray-200 rounded-md text-black hover:bg-darkBlue hover:text-white transition duration-300"
          >
            Previous
          </Link>
        ) : (
          <button
            className="py-2 px-4 border-2 border-gray-200 rounded-md text-black cursor-not-allowed opacity-50"
            disabled={!hasPrevPage}
          >
            Previous
          </button>
        )}

        {/* Page numbers remain the same */}
        {pagesList.map((pageNumber) => {
          if (pageNumber === currentPage) {
            return (
              <span
                key={pageNumber}
                className="py-2 px-4 border-2 border-gray-200 rounded-md bg-darkBlue text-white"
              >
                {page}
              </span>
            );
          }
          if (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1) {
            return (
              <Link
                key={pageNumber}
                href={`${baseUrl}?page=${pageNumber}`}
                className={`py-2 px-4 border-2 border-gray-200 rounded-md text-black hover:bg-darkBlue hover:text-white transition duration-300 ${
                  pageNumber === currentPage ? "bg-darkBlue text-white" : ""
                }`}
              >
                {pageNumber}
              </Link>
            );
          }
          return null; // Don't forget to return null for iterations that don't match
        })}

        {/* Next button */}
        {hasNextPage ? (
          <Link
            href={nextPageHref}
            className="py-2 px-4 border-2 border-gray-200 rounded-md text-black hover:bg-darkBlue hover:text-white transition duration-300"
          >
            Next
          </Link>
        ) : (
          <button
            className="py-2 px-4 border-2 border-gray-200 rounded-md text-black cursor-not-allowed opacity-50"
            disabled={!hasNextPage}
          >
            Next
          </button>
        )}
      </div>

      {/* End div - shows on all screens, placed at the end */}
      <div className="mt-4 md:mt-0 md:ml-auto">
        <p className="text-gray-600 text-sm">
          Showing
          <span className="font-semibold text-gray-800 mx-1">
            {(currentPage - 1) * limit + 1}-
            {Math.min(currentPage * limit, total)}
          </span>
          of
          <span className="font-semibold text-gray-800 mx-1">{total}</span>
        </p>
      </div>
    </div>
  );
}
