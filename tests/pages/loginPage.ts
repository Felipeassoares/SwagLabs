import { expect, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.page.locator('[data-test="username"]').fill(username);
        await this.page.locator('[data-test="password"]').fill(password);
        await this.page.locator('[data-test="login-button"]').click();
    }

    async assertLoginErrorVisible() {
        const errorText = await this.page.getByText('Epic sadface: Username and password do not match any user in this service');
        await expect(errorText).toBeVisible();
    }

    async logout() {
        await this.page.locator('#react-burger-menu-btn').click(); // Abrir o menu lateral
        await this.page.locator('[data-test="logout-sidebar-link"]').click(); // Realizar logout
    }

    async assertIsLoggedOut() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/'); // Verificar se a URL é a da página de login
    }
}
