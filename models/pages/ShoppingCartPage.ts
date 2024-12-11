import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";
import {CartItemRowComponent} from "../components/cart/CartItemRowComponent";
import {TotalComponent} from "../components/cart/TotalComponent";

export class ShoppingCartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public async cartItemRowComponent(): Promise<CartItemRowComponent[]> {
        // @ts-ignore
        const cartItemRows = await this.page.locator(CartItemRowComponent.selectorValue).all();
        return cartItemRows.map(cartComp => new CartItemRowComponent(cartComp));
    }

    public totalComponent(): TotalComponent {
        // @ts-ignore
        return new TotalComponent(this.page.locator(TotalComponent.selectorValue));
    }
}