import test from "@playwright/test";
import HomePage from "../models/pages/Login/HomePage";

test('Handle list of component', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const pageBody = homePage.pageBodyComp();
    const productItemList = await pageBody.productItemList();
    for (const product of productItemList) {
        const productTitle = await product.productTitleLoc().textContent();
        const productPrice = await product.productPriceLoc().textContent();
        console.log(`${productTitle}: ${productPrice}`);
    }
})