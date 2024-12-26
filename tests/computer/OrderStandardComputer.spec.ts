import test from "@playwright/test";
import {OrderComputerFlow} from "../../test_flow/computer/OrderComputerFlow";
import {standardComputerData} from "../../test_data/computer/StandardComputerData";

standardComputerData.forEach(computerData => {
    test(`Test Buying Computer | First Design ${computerData.ram}`, async ({page}) => {
        await page.goto("/build-your-own-computer");
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
        await page.waitForTimeout(5 * 1000);
    })
})




