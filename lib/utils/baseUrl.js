// Simple base URL detection
export const getBaseUrl = () => {
  // Check if we're in browser
  if (typeof window !== 'undefined') {
    return window.location.origin; // Gets http://localhost:3000 or https://www.mol-tech.us
  }
  // Server-side fallback
  if (process.env.DEPLOY_ENV === 'development') {
    return 'http://localhost:3006';
  }
  if (process.env.DEPLOY_ENV === 'preproduction') {
    return 'https://moltech-web-2-1-test.vercel.app';
  }
  return 'https://www.mol-tech.us';
};

// Export as constant for easy access
export const BASE_URL = getBaseUrl();
