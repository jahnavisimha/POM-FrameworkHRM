// To provide common functions to all the pages/Methods which are related to whole app
import { BaseClass } from "./BaseClass";

export class CommonFun extends BaseClass {

    static async openApplication(url: string) {
        await this.page.goto(url);
        console.log("Application is opened");
    }

    static async waitstmt(){
        await this.page.waitForTimeout(3000);
        console.log("Wait for 3 seconds");
    }

    }