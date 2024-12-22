import {selector} from "../SelectorDecorator";
import {Locator} from "@playwright/test";

@selector('.totals')
export class TotalComponent {

    private tOSCheckboxSel = '#termsofservice';
    private priceTableRowSel = '.cart-total tr';
    private priceTypeSel = '.cart-total-left span';
    private priceValueSel = '.cart-total-right span span';
    private checkoutBtnSel = '#checkout';

    constructor(private component: Locator) {
        this.component = component;
    }

    public async agreeTOSCheckbox() {
        return await this.component.locator(this.tOSCheckboxSel).click();
    }

    public async clickOnCheckoutBtn() {
        return await this.component.locator(this.checkoutBtnSel).click();
    }

    public async priceCategories(): Promise<any> {
        let priceCategories: any = {};
        const priceTableRowLoc = await this.component.locator(this.priceTableRowSel).all();
        for (let tableRow of priceTableRowLoc) {
            const priceType: string = await tableRow.locator(this.priceTypeSel).innerText();
            const priceValue: string = await tableRow.locator(this.priceValueSel).innerText();
            priceCategories[priceType] = Number(priceValue);
        }
        return priceCategories;
    }
}