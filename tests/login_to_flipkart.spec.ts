import { test, expect } from '@playwright/test';
const authFile = 'playwright/.auth/user.json';


test('Login into Flipkart', async ({ page }) => {
    await page.goto('/account/login?ret=/');

    await page.getByLabel('Enter Email/Mobile number', { exact: true }).fill('')
    // Expect a title "to contain" a substring.
    //   await expect(page).toHaveTitle(/Playwright/);
});