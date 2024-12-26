import test from "@playwright/test";
import {OrderComputerFlow} from "../../test_flow/computer/OrderComputerFlow";
import {cheapComputerData} from "../../test_data/computer/CheapComputerData";
import {TEST_TYPES} from "../../types/TestTypes";

cheapComputerData.forEach(computerData => {
    test(`${TEST_TYPES.Smoke} Test Buying Computer | First Design ${computerData.ram}`, async ({page}) => {
        await page.goto("/build-your-cheap-own-computer");
        const orderComputerFlow: OrderComputerFlow = new OrderComputerFlow(page, computerData);
        await orderComputerFlow.login();
        await orderComputerFlow.buildComputerSpecAndAddToCart();
        await orderComputerFlow.verifyShoppingCart();
        await orderComputerFlow.agreeTOSAndCheckout();
        await orderComputerFlow.inputBillingAddress();
        await orderComputerFlow.inputShippingAddress();
        await orderComputerFlow.selectShippingMethod();
        await orderComputerFlow.selectPaymentMethod();
        await orderComputerFlow.inputPaymentInformation();
        await orderComputerFlow.confirmOrder();
        await page.waitForTimeout(3 * 1000);
    })
})




