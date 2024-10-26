import test from "@playwright/test";
import {getAdSlot, scrollPage} from "../../utils/PageHelpers";

test('Handle JS Alert', async ({page}) => {
    await page.goto("/javascript_alerts");
    const jsAlertLocator = page.locator('//button[contains(text(), "JS Alert")]');

    //MUST define the event control first
    page.on('dialog', async dialog => {
        await dialog.accept();
    })

    //Trigger the event
    await jsAlertLocator.click();
    await page.waitForTimeout(3 * 1000);
})

test('Handle JS Confirm', async ({page}) => {
    await page.goto("/javascript_alerts");
    const jsConfirmLocator = page.locator('//button[contains(text(), "JS Confirm")]');

    //MUST define the event control first
    page.on('dialog', async dialog => {
        console.log(`Alert msg is ${dialog.message()}`);
        await dialog.dismiss();
    })

    //Trigger the event
    await jsConfirmLocator.click();
    await page.waitForTimeout(3 * 1000);
})

test('Handle JS Prompt', async ({page}) => {
    await page.goto("/javascript_alerts");
    const jsPromptLocator = page.locator('//button[contains(text(), "JS Prompt")]');

    //MUST define the event control first
    page.on('dialog', async dialog => {
        console.log(`Alert msg is ${dialog.message()}`);
        await dialog.accept('Iam accepting the alert prompt!');
    })

    //Trigger the event
    await jsPromptLocator.click();
    await page.waitForTimeout(3 * 1000);
})

test('Execute JS snippets without params', async ({page}) => {
    await page.goto("/floating_menu");

    //Explore highlight
    await page.locator('h3').highlight();

    //Scroll to BOTTOM by JS
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    })
    await page.waitForTimeout(3 * 1000);

    //Scroll to TOP by JS
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    })
    await page.waitForTimeout(3 * 1000);
})

test('Execute JS snippets with params', async ({page}) => {
    await page.goto("/floating_menu");
    const scrollPercent = 0.25;
    //Scroll to BOTTOM by JS
    await page.evaluate(scrollPercentage => {
        window.scrollTo(0, scrollPercentage * document.body.scrollHeight);
    }, scrollPercent);
    await page.waitForTimeout(3 * 1000);
})

test('Execute JS snippets with params using support method', async ({page}) => {
    await page.goto("/floating_menu");
    const scrollPercent = 0.25;
    //Scroll to BOTTOM by JS
    await scrollPage(page, scrollPercent);
    await page.waitForTimeout(3 * 1000);
})

test('Execute JS snippets with params and return value', async ({page}) => {
    await page.goto("https://www.foodandwine.com/");
    await page.waitForSelector("#leaderboard-flex-1");
    const scrollPercent = 1;
    await scrollPage(page, scrollPercent);
    await page.waitForTimeout(3 * 1000);
    const adParams = await getAdSlot(page, "leaderboard-flex-1");
    console.log(`AdParams: ${JSON.stringify(adParams)}`);
})


