import {Locator} from "@playwright/test";

export class FooterColumnComponent {

    private titleEle: string = 'h3';
    private linksEle: string = 'li a';

    constructor(private component: Locator) {
        this.component = component;
    }

    titleLoc(): Locator {
        return this.component.locator(this.titleEle);
    }

    async linksLoc(): Promise<Locator[]> {
        return await this.component.locator(this.linksEle).all();
    }
}