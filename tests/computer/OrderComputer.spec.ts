import test from "@playwright/test";
import {OrderComputerFlow} from "../../test_flow/computer/OrderComputerFlow";
import {cheapComputerData} from "../../test_data/computer/CheapComputerData";

cheapComputerData.forEach(computerData => {
    test(`Test Buying Computer | First Design ${computerData.ram}`, async ({page}) => {
        await page.goto("/build-your-cheap-own-computer");
        const orderComputerFlow: OrderComputerFlow = new OrderComputerFlow(page, computerData);
        await orderComputerFlow.login();
        await orderComputerFlow.buildComputerSpecAndAddToCart();
        await page.waitForTimeout(3 * 1000);
    })
})




