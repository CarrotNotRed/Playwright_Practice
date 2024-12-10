import {Locator, Page} from "@playwright/test";
import {ComputersEssentialComponent} from "../components/computers/ComputerEssentialComponent";
import {BasePage} from "./BasePage";

export type ComputerComponentConstructor<T extends ComputersEssentialComponent> = new (component: Locator) => T;

export class ComputerDetailsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    computerComponent<T extends ComputersEssentialComponent>(computerComponentClass: ComputerComponentConstructor<T>): T {
        return new computerComponentClass(this.page.locator(computerComponentClass.selectorValue));
    }
}