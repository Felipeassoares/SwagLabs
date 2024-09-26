import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';

test.describe('Testes de login', () => {

    test('login com credenciais válidas', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Acessar a página de login e realizar login com credenciais válidas
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('login com credenciais inválidas', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Acessar a página de login e tentar login com credenciais inválidas
        await loginPage.goto();
        await loginPage.login('user', 'user');

        // Verificar se a mensagem de erro está visível
        await loginPage.assertLoginErrorVisible();
    });
});
