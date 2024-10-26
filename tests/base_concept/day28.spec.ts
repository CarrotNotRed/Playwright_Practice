import test from "@playwright/test";
import HomePage from "../../models/pages/Login/HomePage";

test('Handle list of component', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const pageBody = homePage.pageBodyComp();
    const productItemList = await pageBody.productItemList();
    for (const product of productItemList) {
        const productTitle = await product.productTitleLoc().innerText();
        const productPrice = await product.productPriceLoc().innerText();
        console.log(`${productTitle}: ${productPrice}`);
    }
})

test('Test BaseComponent approach', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const footerComp = homePage.footerComp();
    const customerServiceTitle = await footerComp.customerServiceColumnComp().titleLoc().innerText();
    console.log(`Footer column title: ${customerServiceTitle}`);
    const itemList = await footerComp.customerServiceColumnComp().linksLoc();
    for (const item of itemList) {
        const subTitle = await item.innerText();
        console.log(`The subtitle is: ${subTitle}`);
    }
})