import {ComputerComponent} from "../../models/components/computers/ComputerComponent";
import {Page} from "@playwright/test";
import HomePage from "../../models/pages/Login/HomePage";

export class BuyingComputerFlow {
    constructor(private page: Page, private testData: any) {
        this.page = page;
        this.testData = testData;
    }

    async selectRam() {
        const homePage: HomePage = new HomePage(this.page);
        const computerComp: ComputerComponent = homePage.computerComp(this.testData.type);
        computerComp.selectRAM(this.testData.RAM);
    }
}