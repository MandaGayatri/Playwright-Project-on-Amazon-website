import { test, chromium, type Page, type Locator } from '@playwright/test';
import {pagesXpaths} from './pagesXpaths.spec';

export class homePage
{
    readonly p : pagesXpaths;
    readonly page : Page;

    constructor(page : Page)
    {
        this.p = new pagesXpaths(page);
        this.page = page;
    }

    async changeCountry(country:string): Promise<Page>
     {
      await this.p.country.scrollIntoViewIfNeeded();
      for (let i = 0; i < 5; i++) {
        await this.p.country.hover({ force: true });
        await this.p.country.dispatchEvent('mouseover');
        const visible = await this.p.changeCountry.isVisible().catch(() => false);
        if (visible) break;
        await this.page.waitForTimeout(500);
      }
      await this.p.changeCountry.click();
      await this.p.selectCountry.selectOption({label : country });
      const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.p.goToWebsite.click(),
      ]);
      const size = await this.page.evaluate(() => ({ width: window.screen.availWidth, height: window.screen.availHeight }));
      await newPage.setViewportSize(size);
      await newPage.waitForLoadState('domcontentloaded');
      return newPage;
    }
     async goToLoginPage()
     {
       await  this.p.helloSignIn.hover();
       await  this.p.helloSignIn.click();
     }
     async searchInSearchBox(item:string)
     {
      await this.p.searchBox.fill(item);
      await this.page.keyboard.press('Enter');
     }
}