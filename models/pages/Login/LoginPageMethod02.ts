import {Locator, Page} from "@playwright/test";
import {LoginPageSelector} from "./LoginPageSelector";

export class LoginPage02 {

    constructor(private page: Page) {
        this.page = page;
    }

    //Found Elements
    username(): Locator {
        return this.page.locator(LoginPageSelector.userNameEle);
    }

    password() {
        return this.page.locator(LoginPageSelector.passwordEle);
    }

    loginBtn() {
        return this.page.locator(LoginPageSelector.loginBtn);
    }
}