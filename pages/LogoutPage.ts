// To provide objects/locators and methods for the login page
import {BaseClass} from "../utils/BaseClass";

export class LogoutPage extends BaseClass { 
    // Locators/objects for the login page
    static link_logout="//a[text()='Logout']";

    // Methods for the login page
    static async logout() {
        await this.page.locator(this.link_logout).click();
        console.log("Logout is successful"); 
    }
}