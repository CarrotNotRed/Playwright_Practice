import {Locator} from "@playwright/test";
import {selector} from "../SelectorDecorator";

@selector('#opc-confirm_order')
export class ConfirmOrderComponent {

    private confirmBtnSel = 'input[type="button"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    async clickOnConfirmBtn() {
        await this.component.locator(this.confirmBtnSel).click();
    }
}