import {Page} from "@playwright/test";
import {HeaderComponent} from "../components/global/HeaderComponent";

export class BasePage {
    protected barNotiSel = '#bar-notification p';

    protected constructor(protected page: Page) {
        this.page = page;
    }

    async getBarNotiText() {
        return await this.page.locator(this.barNotiSel).innerText();
    }

    headerComponent(): HeaderComponent {
        // @ts-ignore
        return new HeaderComponent(this.page.locator(HeaderComponent.selectorValue));
    }
}