import { test, chromium, Page, Locator } from '@playwright/test';

export class pagesXpaths {
  readonly page: Page;
  readonly helloSignIn: Locator;
  readonly signIn: Locator;
  readonly email: Locator;
  readonly emailContinue: Locator;
  readonly password: Locator;
  readonly submit: Locator;
  readonly searchBox: Locator;
  readonly list: Locator;
  readonly addToCart: Locator;
  readonly goToCart: Locator;
  readonly country: Locator;
  readonly changeCountry: Locator;
  readonly selectCountry: Locator;
  readonly goToWebsite: Locator;

  constructor(page: Page) {
    this.page = page;
    this.helloSignIn = page.locator("//span[text()='Hello, sign in']");
    this.signIn = page.locator("//span[text()='Sign in']");
    this.email = page.locator("//input[@id='ap_email_login']");
    this.emailContinue = page.locator("//span[@id='continue']");
    this.password = page.locator("//input[@name='password']");
    this.submit = page.locator("//input[@id='signInSubmit']");
    this.searchBox = page.locator("//input[@id='twotabsearchtextbox']");
    this.list = page.locator("//div[@data-component-type='s-search-result']//a[.//h2]");
    this.addToCart = page.locator("//span[@id='submit.add-to-cart']");
    this.goToCart = page.locator("(//a[contains(text(),'Go to Cart')])[2]");
    this.country = page.locator("//div[@id='icp-nav-flyout']");
    this.changeCountry = page.locator("(//div[text()='Change country/region.'])[1]");
    this.selectCountry = page.locator("//select[@id='icp-dropdown']");
    this.goToWebsite = page.locator("//span[@id='icp-save-button']");
  }
}
