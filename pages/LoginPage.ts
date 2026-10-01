// To provide objects/locators and methods for the login page

import {BaseClass} from "../utils/BaseClass";

export class LoginPage extends BaseClass {

    // Locators/objects for the login page

static textbox_loginname = "//input[@name='txtUserName']";
static textbox_password = "//input[@name='txtPassword']";
static button_login = "//input[@name='Submit']";

// Methods for the login page

static async login(username: string, password: string) {
await this.page.locator(this.textbox_loginname).fill(username);
await this.page.locator(this.textbox_password).fill(password);
await this.page.locator(this.button_login).click();
console.log("Login completed");
}
}