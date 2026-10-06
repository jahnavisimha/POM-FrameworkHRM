import {test} from '@playwright/test';
import {BaseClass} from '../utils/BaseClass';
import {CommonFun} from '../utils/CommonFun';
import {LoginPage} from '../pages/LoginPage';
import {VerifyPage} from '../pages/VerifyPage';
import {EmpModule} from '../pages/EmpModule';
import {LogoutPage} from '../pages/LogoutPage';

test('TC002 Add Employee', async ({ page }) => {
    // Navigate to the application URL
   BaseClass.page = page;   
   await CommonFun.openApplication("https://sureshitacademy.in/hrms/login.php");
    await CommonFun.waitstmt();
    await LoginPage.login("sureshit", "sureshit");
    await VerifyPage.verifyTitle("SureshIT");
    await CommonFun.waitstmt();
    await EmpModule.addEmployee("John", "simha", "C:\\Users\\user\\Downloads\\images.JPG");
    await EmpModule.button_save;
    await CommonFun.waitstmt();
    await LogoutPage.logout();

    
});
