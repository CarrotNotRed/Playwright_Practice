import {ComputerComponentConstructor} from "../../models/pages/ComputerDetailsPage";
import {ComputersEssentialComponent} from "../../models/components/computers/ComputerEssentialComponent";

export interface ComputerDataType {
    loginCreds?: { username: string, password: string };
    computerCompClass: ComputerComponentConstructor<ComputersEssentialComponent>,
    processorType: string,
    ram: string,
    hdd: string,
    software: string,
    os?: string
}