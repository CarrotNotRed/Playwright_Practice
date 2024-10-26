import {FooterColumnComponent} from "./FooterColumnComponent";
import {Locator} from "@playwright/test";

export class CustomerServiceColumnComponent extends FooterColumnComponent {

    public static selector: string = '.column.customer-service';

    constructor(component: Locator) {
        super(component);
    }
}