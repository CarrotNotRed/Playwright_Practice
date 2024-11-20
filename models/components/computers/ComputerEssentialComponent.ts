import {BaseItemDetailsComponent} from "../BaseItemDetailsComponent";
import {Locator} from "@playwright/test";

export abstract class ComputersEssentialComponent extends BaseItemDetailsComponent {

    protected constructor(component: Locator) {
        super(component);
    }

    public abstract selectRAM(type: String): any;

    public abstract selectHDD(type: String): any;

    protected async selectComputerOptions(type: string) {
        const computerOptionSel = `//label[contains(text(), "${type}")]`;
        await this.component.locator(computerOptionSel).click();
    }
}