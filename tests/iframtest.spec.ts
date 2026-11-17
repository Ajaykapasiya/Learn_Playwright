import { expect, test } from "@playwright/test";

test("iframetest", async ({ page }) => {
  await page.goto("https://automationpracticehubapp.netlify.app/");

  await page.getByTestId("login-username").fill("Admin");
  await page.getByTestId("login-password").fill("Hello@123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page.locator("#nav-advanced-elements").click();

  const frame = page.frameLocator("#iframe-section");

  await frame.locator("#iframe-input").fill("Hello");

  await frame.locator("#iframe-submit").click();

  await expect(frame.locator("#iframe-message")).toHaveText("Submitted: Hello");

  const childFrame = page
    .frameLocator("#parent-iframe")
    .frameLocator("#child-iframe");

  await childFrame.locator("#child-iframe-input").fill("Hii");

  await childFrame.locator("#child-iframe-submit").click();

  await expect(childFrame.locator("#child-iframe-message")).toHaveText(
    "Child submitted: Hii",
  );
});
