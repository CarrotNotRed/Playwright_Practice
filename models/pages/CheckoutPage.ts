import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";
import {BillingAddressComponent} from "../components/checkout/BillingAddressComponent";
import {ShippingAddressComponent} from "../components/checkout/ShippingAddressComponent";
import {ShippingMethodComponent} from "../components/checkout/ShippingMethodComponent";
import {PaymentMethodComponent} from "../components/checkout/PaymentMethodComponent";
import {PaymentInformationComponent} from "../components/checkout/PaymentInformationComponent";
import {ConfirmOrderComponent} from "../components/checkout/ConfirmOrderComponent";

export class CheckoutPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    billingAddressComponent(): BillingAddressComponent {
        const componentSel = this.page.locator(BillingAddressComponent.selectorValue);
        return new BillingAddressComponent(componentSel);
    }

    shippingAddressComponent(): ShippingAddressComponent {
        const componentSel = this.page.locator(ShippingAddressComponent.selectorValue);
        return new ShippingAddressComponent(componentSel);
    }

    shippingMethodComponent(): ShippingMethodComponent {
        const componentSel = this.page.locator(ShippingMethodComponent.selectorValue);
        return new ShippingMethodComponent(componentSel);
    }

    paymentMethodComponent(): PaymentMethodComponent {
        const componentSel = this.page.locator(PaymentMethodComponent.selectorValue);
        return new PaymentMethodComponent(componentSel);
    }

    paymentInformationComponent(): PaymentInformationComponent {
        const componentSel = this.page.locator(PaymentInformationComponent.selectorValue);
        return new PaymentInformationComponent(componentSel);
    }

    confirmOrderComponent(): ConfirmOrderComponent {
        const componentSel = this.page.locator(ConfirmOrderComponent.selectorValue);
        return new ConfirmOrderComponent(componentSel);
    }
}