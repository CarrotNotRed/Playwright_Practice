import test from "@playwright/test";

test('Link text by xpath', async ({page}) => {
    await page.goto('/');
    const pageFooterLocator = page.locator('//a[contains(text(), "Elemental")]');

    //Set timeout when don't find the element
    // const invalidLocator = await page.waitForSelector('//a[contains(text(), "Elemental_")]', {timeout: 10*1000});
    // await invalidLocator.click();

    await pageFooterLocator.click();
    await page.waitForTimeout(5 * 1000); //DEBUG ONLY PURPOSE
})

test('Link text by css', async ({page}) => {
    await page.goto('/');
    const pageFooterLocator = page.locator('a:has-text("Elemental")');
    await pageFooterLocator.click();
})

test('Link text by filter', async ({page}) => {
    await page.goto('/');
    const pageFooterLocator = page.locator('a').filter({hasText: 'Elemental'}).click();
    await page.waitForTimeout(5 * 1000); //DEBUG ONLY PURPOSE
})

test('Form Authentication', async ({page}) => {
    await page.goto('/login');
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(5 * 1000); //DEBUG ONLY PURPOSE

    let headerPageWithTextContent = await page.locator('h2').textContent();
    console.log(headerPageWithTextContent);

    let headerPageWithInnerText = await page.locator('h2').innerText();
    console.log(headerPageWithInnerText);
})