import {selector} from "../SelectorDecorator";
import {Locator} from "@playwright/test";

@selector('#opc-payment_info')
export class PaymentInformationComponent {

    private selectCardTypeDropdownSel = '#CreditCardType';
    private cardHolderNameSel = '#CardholderName';
    private cardNumSel = '#CardNumber';
    private expirationMonthDropdownSel = '#ExpireMonth';
    private expirationYearDropdownSel = '#ExpireYear';
    private cardCodeSel = '#CardCode';
    private continueBtnSel = 'input[type="button"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    async selectCreditCard(cadType: string) {
        await this.component.locator(this.selectCardTypeDropdownSel).selectOption({label: cadType});
    }

    async inputCardHolderName(name: string) {
        await this.component.locator(this.cardHolderNameSel).fill(name);
    }

    async inputCardNumber(cardNum: string) {
        await this.component.locator(this.cardNumSel).fill(cardNum);
    }

    async selectExpirationMonth(month: string) {
        await this.component.locator(this.expirationMonthDropdownSel).selectOption({label: month});
    }

    async selectExpirationYear(year: string) {
        await this.component.locator(this.expirationYearDropdownSel).selectOption({label: year});
    }

    async inputCardCode(cardCode: string) {
        await this.component.locator(this.cardCodeSel).fill(cardCode);
    }

    async clickOnContinueBtn() {
        await this.component.locator(this.continueBtnSel).click();
    }

}