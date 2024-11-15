import {Page} from "@playwright/test";
import {ComputerDetailsPage} from "../../models/pages/ComputerDetailsPage";
import {ComputersEssentialComponent} from "../../models/components/computers/ComputerEssentialComponent";

export class OrderComputerFlow {
    constructor(private page: Page, private computerCompClass: any, private computerData: any) {
        this.page = page;
        this.computerCompClass = computerCompClass;
        this.computerData = computerData;
    }

    async buildComputerSpecAndAddToCart() {
        const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComp: ComputersEssentialComponent = computerDetailsPage.computerComponent(this.computerCompClass);
        computerComp.selectRAM('RAM 128GB');
    }
}