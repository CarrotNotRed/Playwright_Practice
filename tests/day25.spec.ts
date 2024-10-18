import test, {Locator} from "@playwright/test";

test('Dropdown Test', async ({page}) => {
    await page.goto('/dropdown');
    const dropdownListLocator = page.locator('#dropdown');
    await dropdownListLocator.selectOption({value: '2'});
    await page.waitForTimeout(1000);
    await dropdownListLocator.selectOption({index: 1});
    await page.waitForTimeout(1000);
    await dropdownListLocator.selectOption({label: 'Option 2'});
    await page.waitForTimeout(1000);
})

test('Dropdown Test using function', async ({page}) => {
    await page.goto('/dropdown');
    const dropdownListLocator = page.locator('#dropdown');
    await selectByIndex(dropdownListLocator, 2);
})

async function selectByIndex(dropdown: Locator, index: number) {
    return await dropdown.selectOption({index: index});
}

test('Handle Iframe', async ({page}) => {
    await page.goto('/iframe');
    const alertLocator = page.locator('[class$="warning"] > button');
    await alertLocator.click();
    const iframeLocator = page.locator('textarea[id^="mce"]');
    const textareaLocator = iframeLocator.locator('body > p');
    await textareaLocator.click();
    await textareaLocator.clear();
    await textareaLocator.fill('Test for iframe');
})

test('Mouse Hover and narrow down the searching scope', async ({page}) => {
    await page.goto('/hovers');
    const allProfiles = await page.locator('.figure').all();
    for (const profile of allProfiles) {
        const imgProfile = profile.locator('img');
        const name = profile.locator('h5');
        const profileLink = profile.locator('a');
        let user = await name.innerText();
        console.log(`user is: ${user}`);
        let isUserVisible = await name.isVisible();
        let isLinkVisible = await profileLink.isVisible();
        console.log(`User is visible before hovering: ${isUserVisible}`);
        console.log(`Profile link is visible before hovering: ${isLinkVisible}`);

        console.log('=========================');

        await imgProfile.hover();
        await page.waitForTimeout(1000);
        isUserVisible = await name.isVisible();
        isLinkVisible = await profileLink.isVisible();
        console.log(`User is visible: ${isUserVisible}`);
        console.log(`Profile link is visible: ${isLinkVisible}`);
    }
})

test('Handle Dynamic Controls', async ({page}) => {
    await page.goto('/dynamic_controls');
    //Handle for checkbox
    const checkboxFieldLocator = page.locator('#checkbox-example');
    const checkboxLocator = checkboxFieldLocator.locator('input');
    const isCheckboxChecked = await checkboxLocator.isChecked();
    if (!isCheckboxChecked) {
        await checkboxLocator.click();
    }

    //Remove checkbox button
    const removeCheckboxLocator = checkboxFieldLocator.locator('button');
    await removeCheckboxLocator.click();
    await page.waitForSelector('#checkbox-example input', {state: 'hidden'});

    //Handle Enable-Disable
    const enableFieldLocator = page.locator('#input-example');
    const enableButtonLocator = enableFieldLocator.locator('button', {hasText: 'Enable'});
    await enableButtonLocator.click();
    await page.waitForSelector('#input-example button:has-text("Enable")', {state: 'hidden'});
})
