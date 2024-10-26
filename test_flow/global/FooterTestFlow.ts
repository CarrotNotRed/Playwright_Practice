import {Page} from "@playwright/test";
import HomePage from "../../models/pages/Login/HomePage";
import {FooterComponent} from "../../models/components/global/footer/FooterComponent";
import {FooterColumnComponent} from "../../models/components/global/footer/FooterColumnComponent";
import {deepStrictEqual} from "assert";

export class FooterTestFlow {

    constructor(private page: Page) {
        this.page = page;
    }

    async verifyFooterComp() {
        const homePage = new HomePage(this.page);
        const footerComponent: FooterComponent = homePage.footerComp();
        await this.verifyInformationColumn(footerComponent);
        await this.verifyCustomerServiceColumn(footerComponent);
        await this.verifyMyAccountColumn(footerComponent);
        await this.verifyFollowUsColumn(footerComponent);
    }

    async verifyInformationColumn(footerComp: FooterComponent) {
        const expectedInformationTexts: string[] = ['Sitemap', 'Shipping & Returns', 'Privacy Notice', 'Conditions of Use', 'About us', 'Contact us'];
        const expectedInformationLinkTexts: string[] = ['/sitemap', '/shipping-returns', '/privacy-policy', '/conditions-of-use', '/about-us', '/contactus'];
        await this.verifyFooterColumn(footerComp.informationColumnComp(), expectedInformationTexts, expectedInformationLinkTexts);
    }

    async verifyCustomerServiceColumn(footerComponent: FooterComponent) {
    }

    async verifyMyAccountColumn(footerComponent: FooterComponent) {
    }

    async verifyFollowUsColumn(footerComponent: FooterComponent) {
    }

    async verifyFooterColumn(footerColumnComp: FooterColumnComponent, expectedTexts: string[], expectedLinkTexts: string[]) {
        const actualTexts: string[] = [];
        const actualLinkTexts: string[] = [];
        const footerCompLinks = await footerColumnComp.linksLoc();
        for (const footerCompLink of footerCompLinks) {
            const text = await footerCompLink.innerText();
            const href = await footerCompLink.getAttribute('href');
            actualTexts.push(text);
            actualLinkTexts.push(href as string);
        }
        deepStrictEqual(actualTexts, expectedTexts,
            `The results don't match with actual texts are ${actualTexts} and expected texts are ${expectedTexts}`);
        deepStrictEqual(actualLinkTexts, expectedLinkTexts,
            `The results don't match with actual texts are ${actualLinkTexts} and expected texts are ${expectedLinkTexts}`);
    }
}