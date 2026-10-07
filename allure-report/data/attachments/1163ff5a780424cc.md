# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001.spec.ts >> TC001 Verify Title
- Location: tests\TC001.spec.ts:9:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_ABORTED at https://sureshitacademy.in/hrms/login.php
Call log:
  - navigating to "https://sureshitacademy.in/hrms/login.php", waiting until "load"

```

# Test source

```ts
  1  | // To provide common functions to all the pages/Methods which are related to whole app
  2  | import { BaseClass } from "./BaseClass";
  3  | 
  4  | export class CommonFun extends BaseClass {
  5  | 
  6  |     static async openApplication(url: string) {
> 7  |         await this.page.goto(url);
     |                         ^ Error: page.goto: net::ERR_CONNECTION_ABORTED at https://sureshitacademy.in/hrms/login.php
  8  |         console.log("Application is opened");
  9  |     }
  10 | 
  11 |     static async waitstmt(){
  12 |         await this.page.waitForTimeout(3000);
  13 |         console.log("Wait for 3 seconds");
  14 |     }
  15 | 
  16 |     }
```