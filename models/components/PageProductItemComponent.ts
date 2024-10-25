import {Locator} from "@playwright/test";

export default class PageProductItemComponent {

    public static selector: string = '.product-item';
    private productTitleEle = '.product-title';
    private productPriceEle = '[class*="actual-price"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    productTitleLoc(): Locator {
        return this.component.locator(this.productTitleEle);
    }

    productPriceLoc(): Locator {
        return this.component.locator(this.productPriceEle);
    }
}