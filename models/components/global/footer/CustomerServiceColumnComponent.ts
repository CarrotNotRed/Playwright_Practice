import {FooterColumnComponent} from "./FooterColumnComponent";
import {Locator} from "@playwright/test";
import {selector} from "../../SelectorDecorator";

@selector('.column.customer-service')
export class CustomerServiceColumnComponent extends FooterColumnComponent {
    constructor(component: Locator) {
        super(component);
    }
}