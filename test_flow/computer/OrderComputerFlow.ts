import {Page} from "@playwright/test";
import {ComputerDetailsPage} from "../../models/pages/ComputerDetailsPage";
import {ComputersEssentialComponent} from "../../models/components/computers/ComputerEssentialComponent";
import {ComputerDataType} from "../../test_data/computer/ComputerDataType";
import {LoginFlow} from "../global/LoginFlow";
import {ShoppingCartPage} from "../../models/pages/ShoppingCartPage";
import {TotalComponent} from "../../models/components/cart/TotalComponent";
import {CartItemRowComponent} from "../../models/components/cart/CartItemRowComponent";

export class OrderComputerFlow extends LoginFlow {
    constructor(page: Page, private computerData: ComputerDataType) {
        super(page, computerData.loginCreds || {username: '', password: ''})
        this.computerData = computerData;
    }

    async buildComputerSpecAndAddToCart() {
        const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComp: ComputersEssentialComponent = computerDetailsPage.computerComponent(this.computerData.computerCompClass);
        const {processorType, hdd, ram, software, os} = this.computerData;
        const processorPrice = this.getAdditionalPrice(await computerComp.selectProcessor(processorType));
        const ramPrice = this.getAdditionalPrice(await computerComp.selectRAM(ram));
        const hddPrice = this.getAdditionalPrice(await computerComp.selectHDD(hdd));
        const softwarePrice = this.getAdditionalPrice(await computerComp.selectSoftware(software));
        let osPrice: number = 0;
        if (os) {
            osPrice = this.getAdditionalPrice(await computerComp.selectOS(os));
        }
        console.log(`Processor: ${processorPrice}, Ram: ${ramPrice}, software: ${softwarePrice}, hdd: ${hddPrice}, os: ${osPrice}`);
        const basePrice = await computerComp.getPriceItem();
        const itemPrice: number = basePrice + processorPrice + ramPrice + hddPrice + softwarePrice + osPrice;
        console.log(`Item Price: ${itemPrice}`);
        const quantityNumber: number = await computerComp.getQuantityNumber();
        const totalPrice = itemPrice * quantityNumber;
        console.log(`Total price: ${totalPrice}`);
        await computerComp.clickAddToCartBtn();
        const notiText = await computerDetailsPage.getBarNotiText();
        console.log(`Notification text: ${notiText}`);
        if (!notiText?.startsWith('The product has been added')) {
            throw new Error('Failing when adding product to shopping cart');
        }

        //Navigate to Shopping Cart page
        await computerDetailsPage.headerComponent().clickOnShoppingCart();
    }

    async verifyShoppingCart() {
        const shoppingCart = new ShoppingCartPage(this.page);
        const cartItemRowComp: CartItemRowComponent[] = await shoppingCart.cartItemRowComponent();
        const totalComp: TotalComponent = await shoppingCart.totalComponent();
    }

    async agreeTOSAndCheckout() {
        throw Error('TBD');
    }

    private getAdditionalPrice(optionText: string): number {
        if (optionText === null) {
            optionText = '';
        }
        const regex = /\+\d+\.\d+/g;
        const matches = optionText.match(regex);
        if (matches) {
            return Number(matches[0].replace('+', '').trim());
        }
        return 0;
    }
}