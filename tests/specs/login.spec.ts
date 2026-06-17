import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login', () => {
  test('should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('admin', '1234');
  });
});
