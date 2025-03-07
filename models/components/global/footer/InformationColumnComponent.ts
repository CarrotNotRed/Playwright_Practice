import {FooterColumnComponent} from "./FooterColumnComponent";
import {Locator} from "@playwright/test";

export class InformationColumnComponent extends FooterColumnComponent {

    public static selector: string = '.column.information';

    constructor(component: Locator) {
        super(component);
    }
}