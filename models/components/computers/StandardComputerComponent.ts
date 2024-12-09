import {ComputersEssentialComponent} from "./ComputerEssentialComponent";
import {Locator} from "@playwright/test";

export class StandardComputerComponent extends ComputersEssentialComponent {

    private dropdownSel: string = 'select[id^="product_attribute"]';

    constructor(component: Locator) {
        super(component);
    }

    async selectRAM(type: string): Promise<string> {
        const RAM_DROPDOWN_INDEX = 1;
        const allDropdownLoc: Locator[] = await this.component.locator(this.dropdownSel).all();
        return await this.selectOptionDropdown(allDropdownLoc[RAM_DROPDOWN_INDEX], type);
    }

    async selectProcessor(type: string): Promise<string> {
        const PROCESSOR_DROPDOWN_INDEX = 0;
        const allDropdownLoc: Locator[] = await this.component.locator(this.dropdownSel).all();
        return await this.selectOptionDropdown(allDropdownLoc[PROCESSOR_DROPDOWN_INDEX], type);
    }

    private async selectOptionDropdown(dropdown: Locator, type: string): Promise<string> {
        const allOptions: Locator[] = await dropdown.locator('option').all();
        let optionIndex = -1;
        let optionText = '';
        for (const option of allOptions) {
            optionText = await option.innerText();
            if (optionText?.startsWith(type)) {
                optionIndex = allOptions.indexOf(option);
                break;
            }
        }
        if (optionIndex === -1) {
            throw new Error(`Option ${type} not found`);
        }
        await dropdown.selectOption({index: optionIndex});
        return optionText;
    }
}