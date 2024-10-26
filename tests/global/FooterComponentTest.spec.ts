import test from "@playwright/test";
import {FooterTestFlow} from "../../test_flow/global/FooterTestFlow";

const PAGES = [
    {pageName: 'Home Page', slug: '/'},
    {pageName: 'Login Page', slug: '/login'},
    {pageName: 'Register Page', slug: '/register'}
]

PAGES.forEach((page) => {
    const {pageName, slug} = page;
    test(`Test Footer Component for ${pageName}`, async ({page}) => {
        await page.goto(slug);
        const footerTestFlow = new FooterTestFlow(page);
        await footerTestFlow.verifyFooterComp();
    })
})
