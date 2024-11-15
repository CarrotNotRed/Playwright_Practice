import test from "@playwright/test";
import {OrderComputerFlow} from "../../test_flow/computer/OrderComputerFlow";
import {ComputerComponentConstructor} from "../../models/pages/ComputerDetailsPage";
import {ComputersEssentialComponent} from "../../models/components/computers/ComputerEssentialComponent";
import {CheapComputerComponent} from "../../models/components/computers/CheapComputerComponent";

export interface ComputerDataType {
    ram: String,
    os?: String,
    computerCompClass: ComputerComponentConstructor<ComputersEssentialComponent>
}

test(`Test Buying Computer | First Design`, async ({page}) => {
    //TODO: Go to target page base on URL
    const testData: ComputerDataType = {
        ram: '2GB',
        computerCompClass: CheapComputerComponent
    }

    //Init test flow
    const testFlow: OrderComputerFlow = new OrderComputerFlow(page, testData.computerCompClass, testData);
    await testFlow.buildComputerSpecAndAddToCart();

})



