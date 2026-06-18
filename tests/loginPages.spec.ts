import { test, chromium,Page, Locator } from '@playwright/test';
import {pagesXpaths} from './pagesXpaths.spec';

export class loginPages
{
    readonly p : pagesXpaths;
    readonly page : Page;

    constructor(page: Page)
    {
      this.p = new pagesXpaths(page);
      this.page = page;
    }

    async loginToAmazonEmail(e: string)
    {
      await this.p.helloSignIn.click();
        await this.p.email.fill(e);
       await  this.p.emailContinue.click();
    }
    async loginToAmazonPassword(p:string)
    {
       await this.p.password.fill(p);
       await this.p.submit.click();
    }
}
