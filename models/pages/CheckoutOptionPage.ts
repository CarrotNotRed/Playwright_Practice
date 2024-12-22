import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";

export class CheckoutOptionPage extends BasePage {

    private checkoutAsGuestBtnSel = '[class$="checkout-as-guest-button"]';

    constructor(page: Page) {
        super(page);
    }

    async clickOnCheckoutAsGuestBtn() {
        return await this.page.locator(this.checkoutAsGuestBtnSel).click();
    }
}