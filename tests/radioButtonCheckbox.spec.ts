import { test, expect } from "@playwright/test";

test("radiobuton", async ({ page }) => {
  await page.goto("https://automationpracticehubapp.netlify.app/");

  const username = page.getByPlaceholder("Admin");
  await username.fill("Admin");

  const password = page.locator("#login-password");
  await password.fill("Hello@123");

  const loginButton = page.getByTestId("login-submit");
  await loginButton.click();

  const RadioMale = page.locator("#gender-male");
  await RadioMale.check();
  await expect(RadioMale).toBeChecked();
  const msg = await page.locator("#radio-selection").textContent();
  console.log(msg);

  const checkBox = page.locator("#terms-checkbox");
  await checkBox.check();
  await expect(checkBox).toBeChecked();
  const msg1 = await page.locator("#checkbox-selection").textContent();
  console.log(msg1);
});
