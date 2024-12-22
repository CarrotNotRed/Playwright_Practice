import {selector} from "../SelectorDecorator";
import {Locator} from "@playwright/test";

@selector('.cart-item-row')
export class CartItemRowComponent {

    private priceSel = '.product-unit-price';
    private quantitySel = '.qty-input';
    private totalSel = '.product-subtotal';

    constructor(private component: Locator) {
        this.component = component;
    }

    public async getPrice(): Promise<number> {
        const priceLoc = this.component.locator(this.priceSel);
        return Number(await priceLoc.innerText());
    }

    public async getQuantity(): Promise<number> {
        const quantityLoc = this.component.locator(this.quantitySel);
        return Number(await quantityLoc.getAttribute('value'));
    }

    public async getSubTotal(): Promise<number> {
        const totalLoc = this.component.locator(this.totalSel);
        return Number(await totalLoc.innerText());
    }
}