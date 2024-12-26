import {test as base} from '@playwright/test';

export const test = base.extend<{ login: void }>({
    login: async ({page}, use) => {
        console.log('Before test body');
        await page.goto('/');
        console.log('Input username');
        console.log('Input password');
        console.log('Click on login button');
        await use();
    }
})
