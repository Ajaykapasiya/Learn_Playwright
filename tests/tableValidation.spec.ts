import { test, expect } from "@playwright/test";

test("tableValidation", async ({ page }) => {
  await page.goto(
    "https://automationpracticehubapp.netlify.app/basic-elements",
  );

  await page.getByTestId("login-username").fill("Admin");

  await page.getByTestId("login-password").fill("Hello@123");

  await page.getByRole("button", { name: "Sign In" }).click();

  await expect(page).toHaveTitle("HomePage");
});
