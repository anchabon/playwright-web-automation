# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Google Search >> should search keyword successfully
- Location: tests/specs/search.spec.ts:5:7

# Error details

```
Error: page.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('textarea[name="q"]')

```

# Test source

```ts
  1  | import { expect, Page } from '@playwright/test';
  2  | 
  3  | export class SearchPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   searchInput = 'textarea[name="q"]';
  7  | 
  8  |   async open() {
  9  |     await this.page.goto('/');
  10 |   }
  11 | 
  12 |   async search(keyword: string) {
> 13 |     await this.page.fill(this.searchInput, keyword);
     |                     ^ Error: page.fill: Target page, context or browser has been closed
  14 |     await this.page.keyboard.press('Enter');
  15 |   }
  16 | 
  17 |   async verifySearchResult(keyword: string) {
  18 |     await expect(this.page).toHaveURL(/search/);
  19 |     await expect(this.page.locator(this.searchInput)).toHaveValue(keyword);
  20 |   }
  21 | }
  22 | 
```