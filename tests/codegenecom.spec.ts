import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationpracticehubapp.netlify.app/');
  await page.getByTestId('login-username').click();
  await page.getByTestId('login-username').fill('Admin');
  await page.getByTestId('login-password').click();
  await page.getByTestId('login-password').fill('Hello@123');
  await page.getByTestId('login-submit').click();
  await page.getByTestId('nav-ecommerce').click();
  await page.getByTestId('category-checkbox-electronics').check();
  await page.getByTestId('add-cart-btn-1').click();
  await page.getByTestId('cart-toggle-btn').click();
  await page.getByTestId('coupon-input').click();
  await page.getByTestId('coupon-input').fill('QA50');
  await page.getByTestId('apply-coupon-btn').click();
  await page.getByTestId('checkout-btn').click();
});