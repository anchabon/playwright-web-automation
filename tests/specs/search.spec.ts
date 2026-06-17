import { test } from '@playwright/test';
import { SearchPage } from '../pages/search.page';

test.describe('Google Search', () => {
  test('should search keyword successfully', async ({ page }) => {
    const searchPage = new SearchPage(page);
    const keyword = 'Playwright Automation';

    await searchPage.open();
    await page.waitForLoadState('networkidle');
    await searchPage.search(keyword);
    // await searchPage.verifySearchResult(keyword);
  });
});