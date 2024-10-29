import test from "@playwright/test";
import {BuyingComputerFlow} from "../../test_flow/computer/BuyingComputerFlow";
import {ComputerType} from "../../types/ComputerType";

test(`Test Buying Computer | First Design`, async ({page}) => {
    //TODO: Go to target page base on URL
    const testData = {
        type: ComputerType.cheap,
        RAM: '2GB'
    }

    //Init test flow
    const testFlow: BuyingComputerFlow = new BuyingComputerFlow(page, testData);
    await testFlow.selectRam();

    //DEBUG PURPOSE ONLY
    // await page.waitForTimeout(3 * 1000);
})



