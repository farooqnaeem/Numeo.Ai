import { test as base } from '@playwright/test';
import { BasePage } from '../base/BasePage';

/**
 * Custom test fixtures
 * Extend this to add more fixtures for your tests
 * 
 * Note: Screenshots on failure are handled by the afterEach hook in test-hooks.ts
 */

// Extend the base test with custom fixtures
export const test = base.extend<{
  basePage: BasePage;
}>({
  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },
});

export { expect } from '@playwright/test';

