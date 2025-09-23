import { test, expect } from '@playwright/test';

test.describe('The Internet - Herokuapp', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/The Internet/);
    await expect(page.locator('h1')).toContainText('Welcome to the-internet');
  });

  test('should navigate to A/B Testing page', async ({ page }) => {
    await page.goto('/');
    await page.click('text=A/B Testing');
    await expect(page).toHaveURL(/.*abtest/);
    await expect(page.locator('h3')).toContainText(/A\/B Test/);
  });

  test('should navigate to Add/Remove Elements page', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Add/Remove Elements');
    await expect(page).toHaveURL(/.*add_remove_elements/);
    
    // Test adding elements
    await page.click('button:has-text("Add Element")');
    await expect(page.locator('.added-manually')).toBeVisible();
    
    // Test removing elements
    await page.click('button:has-text("Delete")');
    await expect(page.locator('.added-manually')).not.toBeVisible();
  });
});
