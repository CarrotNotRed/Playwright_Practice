import {Locator} from "@playwright/test";
import {selector} from "../SelectorDecorator";

@selector('.header')
export class HeaderComponent {

    private headerLogoEle = '.header-logo';
    private shoppingCartLinkSel = '#topcartlink a';

    constructor(private component: Locator) {
        this.component = component;
    }

    headerLogo(): Locator {
        return this.component.locator(this.headerLogoEle);
    }

    async clickOnShoppingCart() {
        await this.component.locator(this.shoppingCartLinkSel).click();
    }
}