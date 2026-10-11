import { test, expect } from "@playwright/test";

test("loginValidation", async ({ page }) => {
  await page.goto("https://automationpracticehubapp.netlify.app/");

  await page.getByTestId("login-username").fill("Admin");

  await page.getByTestId("login-password").fill("Hello@123");

  await page.getByRole("button", { name: " Sign In " }).click();

  const country1 = page.locator("#country-dropdown");
  await country1.selectOption("India");

  await expect(country1).toHaveValue("india");

  const country2 = page.locator(".multi-select-trigger");
  await country2.click();

  await page.getByRole("option", { name: "JavaScript" }).click();
  await page.getByRole("option", { name: "TypeScript" }).click();

  await expect(page.locator("#skills-dropdown")).toContainText("JavaScript");
  await expect(page.locator("#skills-dropdown")).toContainText("TypeScript");

  const country3 = page.locator("#searchable-dropdown");
  await country3.fill("React");
  await page.getByRole("option", { name: "React", exact: true }).click();

  await expect(country3).toHaveValue('React')
});
