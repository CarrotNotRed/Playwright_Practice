import {Page} from "@playwright/test";

export class LoginFlow {
    constructor(protected page: Page, protected loginCreds: { username: string, password: string }) {
        this.page = page;
        this.loginCreds = loginCreds;
    }

    async login() {
        return;
        // const {username, password} = this.loginCreds;
        // const loginPage = new LoginPage(this.page);
        // await loginPage.fillUsername(username);
        // await loginPage.fillPassword(password);
        // await loginPage.clickLoginBtn();
    }
}

class LoginPage {

    private usernameSel: string = '#username';
    private passwordSel: string = '#password';
    private loginBtnSel: string = 'button[type="submit"]';

    constructor(private page: Page) {
        this.page = page;
    }

    async fillUsername(value: string) {
        await this.page.locator(this.usernameSel).fill(value);
    }

    async fillPassword(value: string) {
        await this.page.locator(this.passwordSel).fill(value);
    }

    async clickLoginBtn() {
        await this.page.locator(this.loginBtnSel).click();
    }
}