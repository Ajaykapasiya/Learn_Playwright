import { test, expect } from "@playwright/test";

test("Alert Handling", async ({ page }) => {
  await page.goto("https://automationpracticehubapp.netlify.app/");

  await page.getByPlaceholder("Admin").fill("Admin");
  await page.locator("#login-password").fill("Hello@123");
  await page.getByTestId("login-submit").click();

  await page.locator("#nav-advanced-elements").click();

  page.once("dialog", async (a) => {
    expect(a.type()).toBe("alert");
    expect(a.message()).toContain("This is a simple alert!");
    await a.accept();
  });
  await page.getByTestId("simple-alert-btn").click();

  page.once("dialog", async (b) => {
    expect(b.type()).toBe("confirm");
    expect(b.message()).toContain("Do you confirm this action?");
    await b.dismiss();
  });
  await page.locator("#confirm-alert-btn").click();

  page.once("dialog", async (c) => {
    expect(c.type()).toBe("prompt");
    await c.accept("Hello world");
  });
  await page.getByTestId("prompt-alert-btn").click();
  await page.waitForTimeout(3000);
});
