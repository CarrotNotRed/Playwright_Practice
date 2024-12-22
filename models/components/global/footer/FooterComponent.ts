import {Locator} from "@playwright/test";
import {InformationColumnComponent} from "./InformationColumnComponent";
import {CustomerServiceColumnComponent} from "./CustomerServiceColumnComponent";

export class FooterComponent {

    public static selector: string = '.footer';

    constructor(private component: Locator) {
        this.component = component;
    }

    informationColumnComp(): InformationColumnComponent {
        return new InformationColumnComponent(this.component.locator(InformationColumnComponent.selectorValue));
    }

    customerServiceColumnComp(): CustomerServiceColumnComponent {
        return new CustomerServiceColumnComponent(this.component.locator(CustomerServiceColumnComponent.selectorValue));
    }
}