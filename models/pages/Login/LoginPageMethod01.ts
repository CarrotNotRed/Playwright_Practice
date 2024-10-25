import {Page} from "@playwright/test";
import {LoginPageSelector} from "./LoginPageSelector";

export class LoginPage01 {

    constructor(private page: Page) {
        this.page = page;
    }

    //Main interaction methods
    async inputUserName(userName: string) {
        await this.page.locator(LoginPageSelector.userNameEle).fill(userName);
    }

    async inputPassword(password: string) {
        await this.page.locator(LoginPageSelector.passwordEle).fill(password);
    }

    async clickLoginBtn() {
        await this.page.locator(LoginPageSelector.loginBtn).click();
    }
}