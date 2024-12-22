import {selector} from "../SelectorDecorator";
import {Locator} from "@playwright/test";

@selector('#opc-payment_method')
export class PaymentMethodComponent {

    private continueBtn = 'input[type="button"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    async selectPaymentMethod(method: string) {
        await this.component.locator(`//label[contains(text(), "${method}")]`).click();
    }

    async clickOnContinueBtn() {
        await this.component.locator(this.continueBtn).click();
    }
}