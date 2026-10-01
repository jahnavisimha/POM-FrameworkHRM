// To provide objects/locators and methods related to verification whole application

import { BaseClass } from "../utils/BaseClass";
import { expect } from "@playwright/test";

export class VerifyPage extends BaseClass { 

    // Verify the title of the page
    static async verifyTitle(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
        console.log("Title is matched ");
    }

}