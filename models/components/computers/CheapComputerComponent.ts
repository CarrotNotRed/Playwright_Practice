import {ComputersEssentialComponent} from "./ComputerEssentialComponent";
import {Locator} from "@playwright/test";

export class CheapComputerComponent extends ComputersEssentialComponent {

    constructor(component: Locator) {
        super(component);
    }

    async selectRAM(type: string) {
        await this.selectComputerOptions(type);
    }

    async selectHDD(type: string) {
        await this.selectComputerOptions(type);
    }
}