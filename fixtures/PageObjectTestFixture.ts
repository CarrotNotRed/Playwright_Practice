import {test as base} from '@playwright/test';
import HomePage from "../models/pages/Login/HomePage";

export const test = base.extend<{ homePage: HomePage }>({
    homePage: async ({page}, use) => {
        await page.goto('/');
        const homePage = new HomePage(page);
        await use(homePage);
    }
})