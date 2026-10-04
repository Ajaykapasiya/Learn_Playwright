import { test, expect } from "@playwright/test";

test("tableValidation", async ({ page }) => {
  await page.goto(
    "https://automationpracticehubapp.netlify.app/basic-elements",
  );

  await page.getByTestId("login-username").fill("Admin");

  await page.getByTestId("login-password").fill("Hello@123");

  await page.getByRole("button", { name: "Sign In" }).click();

  await page.locator("#nav-advanced-elements").click();

  const staticTable = page.locator("table").first();
  const row = staticTable.locator("tbody tr");
  const count = await row.count();
  console.log(count);

  const onlyEngineer = row.filter({ hasText: "Engineering" });
  const onlyEngineerCount = await onlyEngineer.count();
  console.log(onlyEngineerCount);

  const salaryTexts = await staticTable
    .locator("tbody tr td:nth-child(4)")
    .allTextContents();

  console.log(salaryTexts);

  const salaries = salaryTexts.map((payments) =>
    Number(payments.replace(/[$,]/g, "")),
  );

  console.log(salaries);

  const maxSalaries = Math.max(...salaries);
  const minSalaries = Math.min(...salaries);

  console.log(maxSalaries);
  console.log(minSalaries);
});
