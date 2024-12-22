import {expect, Locator} from "@playwright/test";
import {selector} from "../SelectorDecorator";

@selector('#opc-shipping_method')
export class ShippingMethodComponent {

    private continueBtnSel = 'input[type="button"]';
    // private continueBtnSel = '[class*=\'shipping-method-next-step-button\']';
    private allShippingMethodSel = '.method-name label';

    constructor(private component: Locator) {
        this.component = component;
    }

    async selectShippingMethod(method: string) {
        await this.component.locator(`//label[contains(text(), "${method}")]`).click();
    }

    async clickOnContinueBtn() {
        await this.component.locator(this.continueBtnSel).click();
        console.log("Clicked onContinueBtn");
    }

    async waitForComponentVisible() {
        await this.component.locator(this.allShippingMethodSel).first().waitFor({state: "visible"});
    }

    async getAllShippingMethods(): Promise<string[]> {
        let shippingMethodNames: string[] = [];
        const allShippingMethodLocs = await this.component.locator('.method-name label').all();
        expect(allShippingMethodLocs).toHaveLength(3);
        for (let shippingMethodLoc of allShippingMethodLocs) {
            const methodName = await shippingMethodLoc.textContent() as string;
            shippingMethodNames.push(methodName.trim());
        }
        return shippingMethodNames;
    }

}