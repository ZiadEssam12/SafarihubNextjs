import Image from "next/image";
import Link from "next/link";
import BookTravel from "./BookTravel";
import TravelCardFavButton from "./TravelCardFavButton";

export default function TravelCard({
  id,
  title,
  overview_text,
  start_from,
  gallery,
  galleryThumbnails,
  slug,
  offer,
  duration,
  destinations,
  rating = 4.8,
  reviews = 28,
}) {
  return (
    <Link
      href={`/tours/${slug}`}
      className="relative flex flex-col ms-1 bg-white border-2 border-gray-100 dark:border-gray-500 rounded-lg shadow-md overflow-hidden h-full user-select-none transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full relative p-2 rounded-4xl overflow-hidden group">
          <Image
            src={galleryThumbnails ? galleryThumbnails[0] : gallery[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={0}
            height={0}
            sizes="100vw"
          />
          {/* Show the favorite button if the user has signed in */}
          <TravelCardFavButton id={id} title={title} />
          {/* Show offer badge if available */}
          {offer && (
            <div className="absolute top-0 left-0 bg-orange text-white px-3 py-1 rounded-br-md font-medium z-10 shadow-sm">
              Offer
            </div>
          )}

          {/* Duration badge */}
          <div className="absolute bottom-2 left-2 bg-white/90 text-darkBlue px-2 py-1 rounded-md text-xs font-medium z-10 shadow-sm flex items-center">
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {duration}
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        {/* Location info */}
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          {destinations?.[0]?.title ||
            destinations?.[0]?.destination?.title ||
            "Unknown Location"}

          {destinations?.length > 1 && (
            <span className="font-bold text-darkBlue mx-1 ">
              +{destinations.length - 1}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold color-dark dark:text-gray-100 mb-1 line-clamp-1"
          title={title}
        >
          {title}
        </h3>

        {/* Rating */}
        <div className="hidden flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating) ? "text-yellow-300" : "text-gray-300"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <span className="ml-1 text-xs text-gray-500">({reviews})</span>
        </div>

        {/* Description */}
        <p
          className="text-gray-600 dark:text-gray-200 text-sm flex-grow line-clamp-2"
          title={overview_text}
        >
          {overview_text}
        </p>

        {/* Price and CTA */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">From</span>
            <div className="text-2xl font-extrabold text-orange">
              ${start_from}
            </div>
          </div>

          <BookTravel tourId={id} />
        </div>
      </div>
    </Link>
  );
}
