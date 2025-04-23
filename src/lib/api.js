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
export async function fetchFeaturedTours() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tours/featured`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData.data || [];
  } catch (error) {
    console.error("Error fetching featured tours:", error);
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

export async function FetchOneDayTrip(place) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tours/one-day-tours/${place}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData.data || [];
  } catch (error) {
    console.error("Error fetching one day trip:", error);
    return [];
  }
}
