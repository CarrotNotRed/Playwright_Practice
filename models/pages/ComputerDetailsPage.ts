import {Locator, Page} from "@playwright/test";
import {ComputersEssentialComponent} from "../components/computers/ComputerEssentialComponent";

export type ComputerComponentConstructor<T extends ComputersEssentialComponent> = new (component: Locator) => T;

export class ComputerDetailsPage {

    constructor(private page: Page) {
        this.page = page;
    }

    computerComponent<T extends ComputersEssentialComponent>(computerComponentClass: ComputerComponentConstructor<T>): T {
        return new computerComponentClass(this.page.locator(computerComponentClass.selectorValue));
    }
}