import {Page} from "@playwright/test";
import {HeaderComponent} from "../../components/global/HeaderComponent";
import PageBodyComponent from "../../components/PageBodyComponent";
import {FooterComponent} from "../../components/global/footer/FooterComponent";
import {ComputerComponent} from "../../components/computers/ComputerComponent";
import {ComputerType} from "../../../types/ComputerType";
import {StandardComputerComponent} from "../../components/computers/StandardComputerComponent";
import {CheapComputerComponent} from "../../components/computers/CheapComputerComponent";

export default class HomePage {

    constructor(private page: Page) {
        this.page = page;
    }

    headerComp(): HeaderComponent {
        return new HeaderComponent(this.page.locator(HeaderComponent.selector));
    }

    pageBodyComp(): PageBodyComponent {
        return new PageBodyComponent(this.page.locator(PageBodyComponent.selector));
    }

    footerComp(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.selector));
    }

    computerComp(computerType: string): ComputerComponent {
        if (computerType === ComputerType.standard) {
            return new StandardComputerComponent();
        } else {
            return new CheapComputerComponent();
        }
    }
}