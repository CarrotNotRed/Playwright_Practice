import {Locator} from "@playwright/test";
import {selector} from "../SelectorDecorator";

@selector('#opc-shipping')
export class ShippingAddressComponent {

    private continueBtnSel = '#shipping-buttons-container > input'

    constructor(private component: Locator) {
        this.component = component;
    }

    async clickOnContinueBtn() {
        await this.component.locator(this.continueBtnSel).click();
    }

}