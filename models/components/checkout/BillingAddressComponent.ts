import {Locator} from "@playwright/test";
import {selector} from "../SelectorDecorator";

@selector('#checkout-step-billing')
export class BillingAddressComponent {

    private firstNameSel = '#BillingNewAddress_FirstName';
    private lastNameSel = '#BillingNewAddress_LastName';
    private emailSel = '#BillingNewAddress_Email';
    private citySel = '#BillingNewAddress_City';
    private addressSel = '#BillingNewAddress_Address1';
    private zipCodeSel = '#BillingNewAddress_ZipPostalCode';
    private phoneNumberSel = '#BillingNewAddress_PhoneNumber';
    private countrySel = '#BillingNewAddress_CountryId';
    private continueBtnSel = '#billing-buttons-container > input';
    private selectStateDropdownSel = '#BillingNewAddress_StateProvinceId';

    constructor(private component: Locator) {
        this.component = component;
    }

    async enterFirstName(name: string) {
        return await this.component.locator(this.firstNameSel).fill(name);
    }

    async enterLastName(name: string) {
        return await this.component.locator(this.lastNameSel).fill(name);
    }

    async enterEmail(name: string) {
        return await this.component.locator(this.emailSel).fill(name);
    }

    async enterCity(name: string) {
        return await this.component.locator(this.citySel).fill(name);
    }

    async enterAddress(name: string) {
        return await this.component.locator(this.addressSel).fill(name);
    }

    async enterZipCode(name: string) {
        return await this.component.locator(this.zipCodeSel).fill(name);
    }

    async enterPhoneNumber(name: string) {
        return await this.component.locator(this.phoneNumberSel).fill(name);
    }

    async selectCountry(country: string) {
        return await this.component.locator(this.countrySel).selectOption(country);
    }

    async clickOnContinueBtn() {
        await this.component.locator(this.continueBtnSel).click();
    }

    async selectState(state: string) {
        await this.component.locator(this.selectStateDropdownSel).selectOption({label: state});
    }
}