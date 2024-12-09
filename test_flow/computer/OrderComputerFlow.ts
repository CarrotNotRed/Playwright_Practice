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
        const processorText = await computerComp.selectProcessor(processorType);
        const ramText = await computerComp.selectRAM(ram);
        const hddText = await computerComp.selectHDD(hdd);
        const softwareText = await computerComp.selectSoftware(software);
        let osText: string = '';
        if (os) {
            osText = await computerComp.selectOS(os);
        }
        console.log(`Processor: ${processorText}, Ram: ${ramText}, software: ${softwareText}, hdd: ${hddText}, os: ${osText}`)
    }
}