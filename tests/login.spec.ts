import { test, expect } from '@playwright/test';


test('Login Test - OrangeHRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.fill('input[name="username"]', 'admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h6')).toHaveText('Dashboard');
});
