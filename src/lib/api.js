// Section 1 :
// Tours related APIS

import { setCookiesHeader } from "./setAuthCookies";

/**
 * Fetches all tours data
 */
export async function fetchTours({ page }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tours?page=${page}`,
      {
        next: { revalidate: 60 }, // Revalidate every minute
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const responseData = await response.json();

    // Return the data and pagination from the response
    return {
      data: responseData.data || [],
      pagination: responseData.pagination || {},
    };
  } catch (error) {
    console.error("Error fetching tours:", error);
    // Always return a valid structure even on error
    return {
      data: [],
      pagination: {},
    };
  }
}

/**
 * Fetches tours data by category
 * @param {string} category - The category slug to fetch
 * @returns {Promise<Array>} - Array of tours in the category
 */
export async function fetchToursByCategory(category) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tours/categories/${category}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error(`Error fetching ${category} tours:`, error);
    return [];
  }
}

/**
 * Fetches featured tours
 * @returns {Promise<Array>} - Array of featured tours
 */

function reduceImagesQuality(data) {
  return data.map((tour) => {
    const reducedTour = { ...tour };

    // Process gallery images - create full size versions with moderate quality
    if (tour.gallery && Array.isArray(tour.gallery)) {
      reducedTour.gallery = tour.gallery.map((image) => {
        return image.replace("/upload/", "/upload/q_70/");
      });

      // Create new galleryThumbnails array with smaller, lower quality versions
      reducedTour.galleryThumbnails = tour.gallery.map((image) => {
        return image.replace("/upload/", "/upload/w_300,q_35/");
      });
    }

    return reducedTour;
  });
}

export async function fetchFeaturedTours() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tours/featured`
    );

    if (!response.ok) {
      return {
        success: false,
        message: "Failed to fetch featured tours",
        error: response.message,
      };
    }

    const responseData = await response.json();
    // Apply image quality reduction and add thumbnails

    return reduceImagesQuality(responseData.data || []);
  } catch (error) {
    console.error("Error fetching featured tours:", error);
    return {
      success: false,
      message: "Failed to fetch featured tours",
      error: error.message,
    };
    return [];
  }
}

export async function searchTours(q) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tours/search?q=${q}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData.data || [];
  } catch (error) {
    console.error("Error searching tours:", error);
    return [];
  }
}

export async function FetchOneDayTrip({ place, page }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tours/one-day-tours/${place}?page=${page}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const responseData = await response.json();

    return {
      data: responseData.data || [],
      pagination: {
        total: responseData.pagination.total || 0,
        page: responseData.pagination.page || 1,
        limit: responseData.pagination.limit || 20,
        pages: responseData.pagination.pages || 1,
      },
    };
  } catch (error) {
    console.error("Error fetching one day trip:", error);
    return [];
  }
}

// End secion 1

// Section 2 :
// Adding to favorites

// 1- get user's favorites
export async function fetchUserFavorites({ sessionTokenCookie }) {
  try {
    const headers = await setCookiesHeader({ sessionTokenCookie });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tours/favorite`,
      {
        headers: headers,
        cache: "no-store", // Add this to ensure fresh data for user-specific content
        credentials: "include", // Add this line
      }
    );

    if (!response.ok) {
      return {
        success: false,
        message: response.message,
      };
    }

    const responseData = await response.json();
    // Ensure you access the correct property, e.g., responseData.favorites
    return responseData.favorites || [];
  } catch (error) {
    console.error("Error fetching user favorites:", error);
    return [];
  }
}

// 2- add to favorites
export async function addToFavorites(tourId) {
  try {
    const response = await fetch("/api/tours/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tourId }),
      credentials: "include", // Add this line
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.message || "Failed to add to favorites" };
    }

    return data;
  } catch (error) {
    console.error("API error in addToFavorites:", error);
    return { error: "Network error occurred while adding to favorites" };
  }
}
// 3- delete from favorites
export async function deleteFromFavorites(tourId) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tours/favorite/${tourId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Add this line
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to delete from favorites: ${response.status}`);
    }

    const responseData = await response.json();

    console.log("Delete response:", responseData);

    return responseData;
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to delete from favorites",
    };
  }
}

// end section 2
// Get user Cart
export async function fetchUserCart({ headers }) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
      headers: {
        ...headers,
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
      },
      cache: "no-store", // Ensure no caching for user-specific content
      credentials: "include",
    });

    if (!response.ok) {
      return {
        success: false,
        message: "Failed to fetch user cart",
        cart: {
          items: [],
          itemCount: 0,
          total: 0,
        },
      };
    }

    const responseData = await response.json();

    // Ensure consistent response structure
    return (
      responseData || {
        success: true,
        cart: {
          items: [],
          itemCount: 0,
          total: 0,
        },
      }
    );
  } catch (error) {
    console.error("Error fetching user cart:", error);
    return {
      success: false,
      message: "Failed to fetch user cart",
      cart: {
        items: [],
        itemCount: 0,
        total: 0,
      },
    };
  }
}

export async function AddToCart({ tourId }) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tourId }),
      credentials: "include", // Add this line
    });

    const responseData = await response.json();
    if (!response.ok) {
      console.error("Error adding to cart:", responseData);
      return {
        success: false,
        message: responseData.message || "Failed to add to cart",
      };
    }

    console.log("Add to cart response:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error adding to cart:", error);
    return {
      success: false,
      message: error.message || "Failed to add to cart",
    };
  }
}

export async function ClearCart() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cart/clear`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Add this line
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      console.error("Error clearing cart:", responseData);
      return {
        success: false,
        message: responseData.message || "Failed to clear cart",
      };
    }

    console.log("Clear cart response:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error clearing cart:", error);
    return {
      success: false,
      message: error.message || "Failed to clear cart",
    };
  }
}

export async function UpdateCartItem({ itemId, quantity }) {}

export async function DeleteCartItem({ itemId }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cart/${itemId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Add this line
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      console.error("Error deleting cart item:", responseData);
      return {
        success: false,
        message: responseData.message || "Failed to delete cart item",
      };
    }

    console.log("Delete cart item response:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return {
      success: false,
      message: error.message || "Failed to delete cart item",
    };
  }
}
