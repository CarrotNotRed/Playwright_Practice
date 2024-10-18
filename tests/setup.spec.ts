import test from "@playwright/test";

test("Test Setup", async ({page}) => {
    await page.goto("https://sdetpro.com");
});
