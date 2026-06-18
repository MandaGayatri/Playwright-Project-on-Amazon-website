import { test, expect, type Page } from '@playwright/test';
import { homePage } from '../tests/homePage.spec';
import { loginPages } from '../tests/loginPages.spec';
import { productPage } from '../tests/productPage.spec';

let sharedPage: Page;

test.beforeAll(async ({ browser }) => {
    sharedPage = await browser.newPage();
    const size = await sharedPage.evaluate(() => ({ width: window.screen.availWidth, height: window.screen.availHeight }));
    await sharedPage.setViewportSize(size);
    await sharedPage.goto('/');
})



test('Amazon Login to cart Page', async () => {
    const page = sharedPage;
    const context = page.context();
    const hm = new homePage(page);
    const lp = new loginPages(page);
    const pp = new productPage(page);

    await lp.loginToAmazonEmail('');
    await lp.loginToAmazonPassword('');
    const newPage = await hm.changeCountry('India');
    await newPage.screenshot({ path: 'reports/changedCountry.png' });
    const hmNew = new homePage(newPage);
    const ppNew = new productPage(newPage);
    await hmNew.searchInSearchBox('Bluetooth Speaker');
    await newPage.screenshot({ path: 'reports/searchedItem.png' });
    const productPageNew = await ppNew.clickOnProduct();
    await productPageNew.screenshot({ path: 'reports/clickedOnProduct.png' });
    const ppOnProduct = new productPage(productPageNew);
    const title = await ppOnProduct.getProductTitle();
    await productPageNew.screenshot({ path: 'reports/capturedTitle.png' });
    test.info().annotations.push({ type: 'Product Title', description: title ?? '' });
    if (title) {
        await expect(productPageNew.locator('body')).toContainText(title);
        await productPageNew.screenshot({ path: 'reports/verifiedTitle.png' });
    }
})

test.afterAll(async () => {
    await sharedPage.close();
})

