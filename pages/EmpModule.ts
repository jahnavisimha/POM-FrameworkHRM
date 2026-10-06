
// To provide objects/locators and methods for the employee module

import {BaseClass} from "../utils/BaseClass";

export class EmpModule extends BaseClass {  
   
    // Locators/objects for the add employee page
     static frame_empinfo : string = "//iframe[@id='rightMenu']";
     static button_add : string = "//input[@value='Add']";
     static text_firstname : string = "//input[@name='txtEmpFirstName']";
     static text_lastname : string = "//input[@name='txtEmpLastName']";
     static photo_upload : string = "#photofile";
     static button_save : string = "//input[@value='Save']";   
     
     // Locators /object for the employee list page

     static search_By : string = "//select[@name='loc_code']";
     static search_for : string ="//input[@name='loc_name']";
     static search_button : string ="//input[@value='Search']";


     

     static async addEmployee(firstname: string, lastname: string, photopath: string) {
        await this.page.frameLocator(this.frame_empinfo).locator(this.button_add).click();
        await this.page.frameLocator(this.frame_empinfo).locator(this.text_firstname).fill(firstname);
        await this.page.frameLocator(this.frame_empinfo).locator(this.text_lastname).fill(lastname);
        await this.page.frameLocator(this.frame_empinfo).locator(this.photo_upload).setInputFiles('‪D:\\images.JPG');
        await this.page.frameLocator(this.frame_empinfo).locator(this.button_save).click();
        console.log("Employee added successfully");
     }
      // Methods for the add employee page
     static async employeeList(searchBy: string, searchFor: string) {

      await this.page.frameLocator(this.frame_empinfo).locator(this.search_By).selectOption({ value: "2" });
      await this.page.frameLocator(this.frame_empinfo).locator(this.search_for).fill(searchFor);
      await this.page.frameLocator(this.frame_empinfo).locator(this.search_button).click();
      console.log("Employee searched successfully");


     }
}
