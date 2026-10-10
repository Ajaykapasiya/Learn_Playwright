import { test, expect } from "@playwright/test";

test("validation of login page", async ({ page }) => {
  await page.goto("https://automationpracticehubapp.netlify.app/advanced");

  const username = page.getByPlaceholder("Admin");

  const password = page.getByPlaceholder("#login-username");

  const login = page.getByTestId("login-submit");

  const alert = page.getByPlaceholder("#login-error");

  await expect(username).toHaveValue("");
  await expect(password).toHaveValue("");

  await login.click();

  await expect(alert).toBeVisible();
});
