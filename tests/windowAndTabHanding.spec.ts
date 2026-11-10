import { test, expect } from "@playwright/test";

test("login", async ({ page, context }) => {
  await page.goto(
    "https://automationpracticehubapp.netlify.app/basic-elements",
  );

  await page.getByTestId("login-username").fill("Admin");

  await page.getByTestId("login-password").fill("Hello@123");

  await page.getByRole("button", { name: "Sign In" }).click();

  await page.locator("#nav-advanced-elements").click();

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("#open-window-btn").click(),
  ]);

  const heading1 = newPage.locator("#popup-heading");
  console.log(await heading1.innerText());
  await newPage.close();

  const [newTab] = await Promise.all([
    context.waitForEvent("page"),
    page.getByLabel("Open New Tab").click(),
  ]);

  const heading2 = newTab.locator("#tab-heading");
  console.log(await heading2.innerText());

  await newTab.close();

  //open-multi-windows-btn
  //multi-window-heading-1

  const parent = page;
  await page.locator("#open-multi-windows-btn").click();
  await expect.poll(() => context.pages().length).toBe(4);
  const pages = context.pages();

  for (let i = 1; i < pages.length; i++) {
    console.log(await pages[i].title());
  }
});
