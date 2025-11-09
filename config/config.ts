/**
 * Configuration file for the Playwright automation framework
 * Modify these values according to your environment needs
 */

// Load environment variables from .env file if it exists
try {
  require('dotenv').config();
} catch (e) {
  // dotenv is optional, continue without it
}

export const config = {
  // Base URL for the application under test
  baseURL: process.env.BASE_URL || 'https://example.com',
  
  // Browser configuration
  browser: {
    // Options: 'chromium', 'firefox', 'webkit', or 'all'
    name: process.env.BROWSER || 'chromium',
    headless: process.env.HEADLESS !== 'false',
  },
  
  // Timeout configurations (in milliseconds)
  timeouts: {
    navigation: 30000,
    action: 10000,
    assertion: 5000,
  },
  
  // Test data
  testData: {
    // Add your test data here
  },
  
  // Environment-specific configurations
  environments: {
    dev: {
      baseURL: 'https://dev.example.com',
    },
    staging: {
      baseURL: 'https://staging.example.com',
    },
    prod: {
      baseURL: 'https://example.com',
    },
  },
};

