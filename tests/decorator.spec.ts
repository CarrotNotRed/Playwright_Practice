import test from "@playwright/test";
import {CustomerServiceColumnComponent} from "../models/components/global/footer/CustomerServiceColumnComponent";

function getComponentSelector(compClass: any): void {
    console.log(compClass.selectorValue);
}

test('Test decorator', () => {
    getComponentSelector(CustomerServiceColumnComponent);
})