import {BaseItemDetailsComponent} from "../BaseItemDetailsComponent";
import {Locator} from "@playwright/test";

export abstract class ComputersEssentialComponent extends BaseItemDetailsComponent {

    protected constructor(component: Locator) {
        super(component);
    }

    public abstract selectRAM(type: String): any;

    public abstract selectProcessor(type: String): any;

    async selectHDD(type: string) {
        return await this.selectComputerOptions(type);
    }

    async selectOS(type: string) {
        return await this.selectComputerOptions(type);
    }

    async selectSoftware(type: string) {
        return await this.selectComputerOptions(type);
    }

    protected async selectComputerOptions(type: string) {
        const computerOptionSel = `//label[contains(text(), "${type}")]`;
        await this.component.locator(computerOptionSel).first().click();
    }
}