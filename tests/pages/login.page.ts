import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  usernameInput = '[data-testid="username"]';
  passwordInput = '[data-testid="password"]';
  loginButton = '[data-testid="login"]';

  async open() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
