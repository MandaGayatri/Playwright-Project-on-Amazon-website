# Playwright Automation Project for Amazon Website

This project automates an end-to-end shopping flow on Amazon using **Playwright** with **TypeScript**. It walks through logging in, changing the country, searching for a product, adding it to the cart, and verifying the product title — all automatically. The code is built using the **Page Object Model (POM)** pattern, which keeps the test clean and the locators easy to maintain.


## What Each File Does

| File | What it does |

| `tests/RunnerFile.spec.ts` | The main test file — it runs the full Amazon flow from login to cart verification |
| `tests/homePage.spec.ts` | Handles home page actions like changing country and searching for a product |
| `tests/loginPages.spec.ts` | Handles the login flow (email and password) |
| `tests/productPage.spec.ts` | Clicks on a product, grabs its title, adds it to cart, and goes to cart page |
| `tests/pagesXpaths.spec.ts` | Stores all XPath locators in one place — if a locator changes, you only edit this file |
| `playwright.config.ts` | Configures Playwright settings — browsers (Chromium & Firefox), reporter, viewport |
| `.github/workflows/playwright.yml` | CI/CD pipeline — runs tests automatically on GitHub when you push code |

---

## How It Works

1. Opens Amazon and logs in
2. Changes the country to India
3. Searches for "Bluetooth Speaker"
4. Clicks on the 5th product
5. Captures the product title
6. Adds the product to the cart
7. Verifies the title on the cart page
8. Takes screenshots at every important step

---

## Running the Tests

npx playwright test --headed

```

---

## Your Own Credentials

The test uses empty **username** and **password** fields by default. To run the login flow with your own Amazon account, open `tests/RunnerFile.spec.ts` and replace the empty strings:

```typescript
await lp.loginToAmazonEmail('your-email@example.com');
await lp.loginToAmazonPassword('your-password');
```

---

## Reports

After the test runs, you'll find:
- An **HTML report** in the `reports/` folder
- **Screenshots** captured at each step inside `reports/`
