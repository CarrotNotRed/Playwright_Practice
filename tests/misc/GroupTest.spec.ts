import test, {expect} from "@playwright/test";
import {TEST_TYPES} from "../../types/TestTypes";

test.describe('Group 01', () => {

    let isSomethingMatched = "false";
    let isSomethingElseMatched = "false";
    test(`Test 01 - E2e flow`, async ({page}, testInfo) => {
        console.log(`${process.env.TEST_WORKER_INDEX} Test 01`);
        isSomethingMatched = testInfo.status as string;
    })
    test(`Test 02 - check if user`, async ({page}) => {
        expect(isSomethingMatched).toBe("true");
    })
    test(`${TEST_TYPES.Smoke} Test 03`, async ({page}) => {
        expect(isSomethingElseMatched).toBe("true");
    })
})
test.describe(`${TEST_TYPES.Smoke} Group 02`, () => {
    test(`Test 01`, async ({page}) => {
        console.log(`${process.env.TEST_WORKER_INDEX} Test 01`);
    })
    test(`Test 02`, async ({page}) => {
        console.log(`${process.env.TEST_WORKER_INDEX} Test 02`);
    })
})