import {Locator} from "@playwright/test";
import {selector} from "../SelectorDecorator";

@selector('.product-essential')
export abstract class ComputersEssentialComponent {
    protected component: Locator;

    protected constructor(component: Locator) {
        this.component = component;
    }

    public abstract selectRAM(type: String);
}