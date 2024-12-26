import {test as base} from '@playwright/test';

const test = base.extend<{
    testFixture: string,
    autoTestFixture: string,
    unusedFixture: string,
}, {
    workerFixture: string,
    autoWorkerFixture: string,
}>({
    workerFixture: [async ({browser}, use) => {
        // workerFixture setup...
        await use('workerFixture');
        // workerFixture teardown...
    }, {scope: 'worker'}],

    autoWorkerFixture: [async ({browser}, use) => {
        // autoWorkerFixture setup...
        await use('autoWorkerFixture');
        // autoWorkerFixture teardown...
    }, {scope: 'worker', auto: true}],

    testFixture: [async ({page, workerFixture}, use) => {
        // testFixture setup...
        await use('testFixture');
        // testFixture teardown...
    }, {scope: 'test'}],

    autoTestFixture: [async ({page}, use) => {
        // autoTestFixture setup...
        await use('autoTestFixture');
        // autoTestFixture teardown...
    }, {scope: 'test', auto: true}],

    unusedFixture: [async ({page}, use) => {
        // unusedFixture setup...
        await use('unusedFixture');
        // unusedFixture teardown...
    }, {scope: 'test'}],
});

test.beforeAll(async () => { /* ... */
});
test.beforeEach(async ({page}) => { /* ... */
});
test('first test', async ({page}) => { /* ... */
});
test('second test', async ({testFixture}) => { /* ... */
});
test.afterEach(async () => { /* ... */
});
test.afterAll(async () => { /* ... */
});