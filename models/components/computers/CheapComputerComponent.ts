import {ComputersEssentialComponent} from "./ComputerEssentialComponent";
import {Locator} from "@playwright/test";

export class CheapComputerComponent extends ComputersEssentialComponent {

    constructor(component: Locator) {
        super(component);
    }

    selectRAM(value: string) {
        console.log("Cheap Computer RAM");
    }
}