import { test, expect } from "@playwright/test";

test("Alert Handling", async ({ page }) => {
  await page.goto("https://automationpracticehubapp.netlify.app/");

  await page.getByPlaceholder("Admin").fill("Admin");
  await page.locator("#login-password").fill("Hello@123");
  await page.getByTestId("login-submit").click();

  await page.locator("#nav-advanced-elements").click();

  page.once("dialog", async a => {
    expect(a.type()).toBe("alert");
    expect(a.message()).toContain("This is a simple alert!");
    await a.accept();
  });
  await page.getByTestId("simple-alert-btn").click();
  
});
