import {Page} from "@playwright/test";
import {ComputerDetailsPage} from "../../models/pages/ComputerDetailsPage";
import {ComputersEssentialComponent} from "../../models/components/computers/ComputerEssentialComponent";
import {ComputerDataType} from "../../test_data/computer/ComputerDataType";
import {LoginFlow} from "../global/LoginFlow";

export class OrderComputerFlow extends LoginFlow {
    constructor(page: Page, private computerData: ComputerDataType) {
        super(page, computerData.loginCreds || {username: '', password: ''})
        this.computerData = computerData;
    }

    async buildComputerSpecAndAddToCart() {
        const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComp: ComputersEssentialComponent = computerDetailsPage.computerComponent(this.computerData.computerCompClass);
        await computerComp.selectRAM(this.computerData.ram);
        await computerComp.selectHDD(this.computerData.hdd);
    }
}