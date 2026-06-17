# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login >> should login successfully
- Location: tests/specs/login.spec.ts:5:7

# Error details

```
Error: page.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('[data-testid="username"]')

```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   usernameInput = '[data-testid="username"]';
  7  |   passwordInput = '[data-testid="password"]';
  8  |   loginButton = '[data-testid="login"]';
  9  | 
  10 |   async open() {
  11 |     await this.page.goto('/login');
  12 |   }
  13 | 
  14 |   async login(username: string, password: string) {
> 15 |     await this.page.fill(this.usernameInput, username);
     |                     ^ Error: page.fill: Target page, context or browser has been closed
  16 |     await this.page.fill(this.passwordInput, password);
  17 |     await this.page.click(this.loginButton);
  18 |   }
  19 | }
  20 | 
```