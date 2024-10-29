import {ComputerComponent} from "./ComputerComponent";

export class StandardComputerComponent implements ComputerComponent {
    selectRAM(value: string) {
        console.log("Standard Computer RAM");
    }
}