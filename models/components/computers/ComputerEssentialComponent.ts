import {BaseItemDetailsComponent} from "../BaseItemDetailsComponent";
import {Locator} from "@playwright/test";

export abstract class ComputersEssentialComponent extends BaseItemDetailsComponent {

    protected constructor(component: Locator) {
        super(component);
    }

    public abstract selectRAM(type: String): Promise<string>;

    public abstract selectProcessor(type: String): Promise<string>;

    async selectHDD(type: string): Promise<string> {
        return await this.selectComputerOptions(type);
    }

    async selectOS(type: string): Promise<string> {
        return await this.selectComputerOptions(type);
    }

    async selectSoftware(type: string): Promise<string> {
        return await this.selectComputerOptions(type);
    }

    protected async selectComputerOptions(type: string): Promise<string> {
        const computerOptionSel = `//label[contains(text(), "${type}")]`;
        const optionLoc = this.component.locator(computerOptionSel).first();
        await optionLoc.click();
        return await optionLoc.innerText();
    }
}