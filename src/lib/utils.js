// filepath: f:\frontend projects\Nextjs\Safari hub\src\lib\utils.js
export function getSessionCookieName() {
  const isProduction = process.env.NODE_ENV === "production";
  return isProduction
    ? "__Secure-authjs.session-token"
    : "authjs.session-token";
}

/**
 * Format a date string to a more readable format
 * @param {string} dateString - ISO date string
 * @param {object} options - Formatting options
 * @returns {string} Formatted date string
 */
export function formatDate(dateString, options = {}) {
  if (!dateString) return "Not specified";

  try {
    const date = new Date(dateString);

    // Check if date is valid
    if (isNaN(date.getTime())) return "Invalid date";

    const {
      includeTime = false,
      includeDayName = true,
      includeYear = true,
      locale = "en-US",
    } = options;

    const formatOptions = {
      weekday: includeDayName ? "long" : undefined,
      year: includeYear ? "numeric" : undefined,
      month: "long",
      day: "numeric",
      hour: includeTime ? "2-digit" : undefined,
      minute: includeTime ? "2-digit" : undefined,
      hour12: includeTime ? true : undefined,
    };

    // Remove undefined values
    Object.keys(formatOptions).forEach(
      (key) => formatOptions[key] === undefined && delete formatOptions[key]
    );

    return date.toLocaleDateString(locale, formatOptions);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
}

/**
 * Format a date for cart display (includes day name and time)
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
export function formatCartDate(dateString) {
  return formatDate(dateString, {
    includeTime: true,
    includeDayName: true,
    includeYear: true,
  });
}

/**
 * Format a date for compact display (no time, no day name)
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
export function formatCompactDate(dateString) {
  return formatDate(dateString, {
    includeTime: false,
    includeDayName: false,
    includeYear: true,
  });
}
