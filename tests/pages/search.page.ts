import { expect, Page } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  searchInput = 'textarea[name="q"]';

  async open() {
    await this.page.goto('/');
  }

  async search(keyword: string) {
    await this.page.fill(this.searchInput, keyword);
    await this.page.keyboard.press('Enter');
  }

  async verifySearchResult(keyword: string) {
    await expect(this.page).toHaveURL(/search/);
    await expect(this.page.locator(this.searchInput)).toHaveValue(keyword);
  }
}
