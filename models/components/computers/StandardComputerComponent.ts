import {ComputersEssentialComponent} from "./ComputerEssentialComponent";
import {Locator} from "@playwright/test";

export class StandardComputerComponent extends ComputersEssentialComponent {

    constructor(component: Locator) {
        super(component);
    }

    selectRAM(value: string) {
        console.log("Standard Computer RAM");
    }
}