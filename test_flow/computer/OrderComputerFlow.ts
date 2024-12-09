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
        const {processorType, hdd, ram, software, os} = this.computerData;
        await computerComp.selectProcessor(processorType);
        await computerComp.selectRAM(ram);
        await computerComp.selectHDD(hdd);
        await computerComp.selectSoftware(software);
        if (os) {
            await computerComp.selectOS(os);
        }
    }
}