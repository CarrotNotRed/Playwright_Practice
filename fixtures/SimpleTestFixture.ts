import {test as base} from '@playwright/test';

export const test = base.extend<{ initValue: string, numberValue: number }>({
    initValue: async ({page}, use) => {
        console.log('Before test body');
        await use('initialValue');
        console.log('After test body');
    },

    numberValue: async ({page}, use) => {
        await use(1);
    }
})