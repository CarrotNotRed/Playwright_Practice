import {Locator} from "@playwright/test";

export class HeaderComponent {

    public static selector: string = '.header';
    private headerLogoEle = '.header-logo';

    constructor(private component: Locator) {
        this.component = component;
    }

    headerLogo(): Locator {
        return this.component.locator(this.headerLogoEle);
    }
}