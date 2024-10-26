import test from "@playwright/test";
import {LoginPage01} from "../../models/pages/Login/LoginPageMethod01";
import {LoginPage02} from "../../models/pages/Login/LoginPageMethod02";
import HomePage from "../../models/pages/Login/HomePage";

test('Test for login page method 1', async ({page}) => {
    await page.goto('/login');
    const loginPage = new LoginPage01(page);
    await loginPage.inputUserName('tomsmith');
    await loginPage.inputPassword('SuperSecretPassword!');
    await loginPage.clickLoginBtn();
    await page.waitForTimeout(3 * 1000);
})

test('Test for login page method 2', async ({page}) => {
    await page.goto('/login');
    const loginPage = new LoginPage02(page);
    await loginPage.username().fill('tomsmith');
    await loginPage.password().fill('SuperSecretPassword!');
    await loginPage.loginBtn().click();
    await page.waitForTimeout(3 * 1000);
})

test('Handle component', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/register');
    const homePage = new HomePage(page);
    const headerComp = homePage.headerComp();
    await headerComp.headerLogo().click();
    await page.waitForTimeout(3 * 1000);
})
