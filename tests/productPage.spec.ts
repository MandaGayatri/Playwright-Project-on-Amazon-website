import { test, chromium, type Page, type Locator } from '@playwright/test';
import { pagesXpaths } from './pagesXpaths.spec';

export class productPage {
  readonly page: Page;
  readonly p: pagesXpaths;

  constructor(page: Page) {
    this.page = page;
    this.p = new pagesXpaths(page);
  }
  async clickOnProduct(): Promise<Page> {
    const product = this.p.list.nth(4);
    await product.scrollIntoViewIfNeeded();
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      product.click(),
    ]);
    const size = await this.page.evaluate(() => ({ width: window.screen.availWidth, height: window.screen.availHeight }));
    await newPage.setViewportSize(size);
    await newPage.waitForLoadState('domcontentloaded');
    return newPage;
  }

  async getProductTitle() {
    const title = await this.page.locator('//span[@id="productTitle"]').textContent();
    await this.p.addToCart.scrollIntoViewIfNeeded();
    await this.p.addToCart.focus();
    await this.p.addToCart.click();
    await this.p.goToCart.waitFor({ state: 'visible', timeout: 10000 });
    await this.p.goToCart.scrollIntoViewIfNeeded();
    await this.p.goToCart.focus();
    await this.p.goToCart.click();
    return title;
  }

}