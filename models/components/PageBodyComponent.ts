import {Locator} from "@playwright/test";
import PageProductItemComponent from "./PageProductItemComponent";

export default class PageBodyComponent {

    public static selector: string = '.page-body';

    constructor(private component: Locator) {
        this.component = component;
    }

    async productItemList(): Promise<PageProductItemComponent[]> {
        const productItemComps = await this.component.locator(PageProductItemComponent.selector).all();
        return productItemComps.map(locator => new PageProductItemComponent(locator));
    }
}