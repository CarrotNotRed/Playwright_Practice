import {expect, Page} from "@playwright/test";
import {ComputerDetailsPage} from "../../models/pages/ComputerDetailsPage";
import {ComputersEssentialComponent} from "../../models/components/computers/ComputerEssentialComponent";
import {ComputerDataType} from "../../test_data/computer/ComputerDataType";
import {LoginFlow} from "../global/LoginFlow";
import {ShoppingCartPage} from "../../models/pages/ShoppingCartPage";
import {TotalComponent} from "../../models/components/cart/TotalComponent";
import {CartItemRowComponent} from "../../models/components/cart/CartItemRowComponent";
import {CheckoutOptionPage} from "../../models/pages/CheckoutOptionPage";
import {CheckoutPage} from "../../models/pages/CheckoutPage";
import defaultCheckoutUser from "../../test_data/DefaultCheckoutUser.json";
import defaultCheckoutCard from "../../test_data/DefaultCheckoutCard.json";
import {waitForElementDisappeared} from "../../utils/PageHelpers";

export class OrderComputerFlow extends LoginFlow {

    // For verification purpose in other steps in the flows
    private shippingMethodName: string | undefined;
    private loadingSel = ".please-wait[disabled]";

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
        // await computerComp.clickAddToCartBtn();
        // const notiText = await computerDetailsPage.getBarNotiText();
        // console.log(`Notification text 122333322: ${notiText}`);
        // if (!notiText?.startsWith('The product has been added')) {
        //     throw new Error('Failing when adding product to shopping cart');
        // }

        const ADD_PRODUCT_TO_CART = `**/addproducttocart/**`;
        const addToCartRequest = this.page.waitForResponse(ADD_PRODUCT_TO_CART);
        await computerComp.clickAddToCartBtn();
        const response = await addToCartRequest;
        const body = await response.json();
        console.log(body);
        //Navigate to Shopping Cart page
        await computerDetailsPage.headerComponent().clickOnShoppingCart();
    }

    async verifyShoppingCart() {
        const shoppingCart = new ShoppingCartPage(this.page);
        const cartItemRowComp: CartItemRowComponent[] = await shoppingCart.cartItemRowComponent();
        const totalComp: TotalComponent = shoppingCart.totalComponent();
        for (let cartItem of cartItemRowComp) {
            const price = await cartItem.getPrice();
            const quantity = await cartItem.getQuantity();
            const subTotal = await cartItem.getSubTotal();
            expect(subTotal).toBe(price * quantity);
        }
        const priceCategories = await totalComp.priceCategories();
        const subTotal = await priceCategories["Sub-Total:"];
        const shippingFee = await priceCategories["Shipping:"];
        const tax = await priceCategories["Tax:"];
        const total = await priceCategories["Total:"];
        expect(total).toBe(subTotal + shippingFee + tax);
    }

    async agreeTOSAndCheckout() {
        const shoppingCart = new ShoppingCartPage(this.page);
        const totalComp: TotalComponent = await shoppingCart.totalComponent();
        await totalComp.agreeTOSCheckbox();
        await totalComp.clickOnCheckoutBtn();
        await new CheckoutOptionPage(this.page).clickOnCheckoutAsGuestBtn();
    }

    async inputBillingAddress() {
        const {
            firstName, lastName,
            email, country,
            state, city,
            add1, zipCode,
            phoneNum
        } = defaultCheckoutUser;

        const checkoutPage = new CheckoutPage(this.page);
        const billingAddressComponent = checkoutPage.billingAddressComponent();
        await billingAddressComponent.enterFirstName(firstName);
        await billingAddressComponent.enterLastName(lastName);
        await billingAddressComponent.enterEmail(email);
        await billingAddressComponent.selectCountry(country);
        await billingAddressComponent.selectState(state);
        await billingAddressComponent.enterCity(city);
        await billingAddressComponent.enterAddress(add1);
        await billingAddressComponent.enterZipCode(zipCode);
        await billingAddressComponent.enterPhoneNumber(phoneNum);
        await billingAddressComponent.clickOnContinueBtn();
    }

    async inputShippingAddress() {
        await new CheckoutPage(this.page).shippingAddressComponent().clickOnContinueBtn();
    }

    async selectShippingMethod() {
        const checkoutPage = new CheckoutPage(this.page);
        const shippingMethodComp = checkoutPage.shippingMethodComponent();
        await shippingMethodComp.waitForComponentVisible();
        const allCurrentShippingMethods = await shippingMethodComp.getAllShippingMethods();
        const randomIndex = Math.floor(Math.random() * allCurrentShippingMethods.length);
        this.shippingMethodName = allCurrentShippingMethods[randomIndex];
        await shippingMethodComp.selectShippingMethod(this.shippingMethodName);
        await shippingMethodComp.clickOnContinueBtn();
        await waitForElementDisappeared(this.page, this.loadingSel);
    }

    async selectPaymentMethod() {
        // This can be a test data as well, but keep it as Credit Card here
        const checkoutPage = new CheckoutPage(this.page);
        const paymentMethodComp = checkoutPage.paymentMethodComponent();
        await paymentMethodComp.selectPaymentMethod('Credit');
        await paymentMethodComp.clickOnContinueBtn();
    }

    async inputPaymentInformation() {
        // This can be a test data as well, but keep it as Discover Card here
        const checkoutPage = new CheckoutPage(this.page);
        const paymentInformationComp = checkoutPage.paymentInformationComponent();
        const {firstName, lastName} = defaultCheckoutUser;
        const {cardNumber, expirationMonth, expirationYear, cardCode} = defaultCheckoutCard.discover;

        await paymentInformationComp.selectCreditCard('Discover');
        await paymentInformationComp.inputCardHolderName(`${firstName} ${lastName}`);
        await paymentInformationComp.inputCardNumber(cardNumber);
        await paymentInformationComp.selectExpirationMonth(expirationMonth);
        await paymentInformationComp.selectExpirationYear(expirationYear);
        await paymentInformationComp.inputCardCode(cardCode);
        await paymentInformationComp.clickOnContinueBtn();
    }

    async confirmOrder() {
        await new CheckoutPage(this.page).confirmOrderComponent().clickOnConfirmBtn();
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