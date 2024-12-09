import {Locator} from "@playwright/test";
import {selector} from "./SelectorDecorator";

@selector('.product-essential')
export class BaseItemDetailsComponent {

    protected component: Locator;
    protected priceItemSel = '.product-price span';
    protected addToCartBtnSel = '[id^="add-to-cart-button"]';

    constructor(component: Locator) {
        this.component = component;
    }

    public async getPriceItem(): Promise<number> {
        const priceLoc = this.component.locator(this.priceItemSel);
        return Number(await priceLoc.innerText());
    }

    public async clickAddToCartBtn() {
        await this.component.locator(this.addToCartBtnSel).click();
    }
}