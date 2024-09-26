import { expect, test } from "@playwright/test";
import { LoginPage } from "./pages/loginPage"; // Ajuste o caminho conforme necessário

test.describe('Testes de logins', () => {
    test('Login com credenciais válidas e logout', async ({ page }) => {
        const loginPage = new LoginPage(page); // Instanciando o LoginPage

        // Passo 1: Acessar a página de login
        await loginPage.goto(); // Usando o método goto() da LoginPage

        // Passo 2: Realizar o login
        await loginPage.login('standard_user', 'secret_sauce'); // Usando o método login()

        // Passo 3: Verificar se a página de inventário foi carregada
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        
        // Passo 4: Abrir o menu lateral (sidebar)
        await page.locator('#react-burger-menu-btn').click(); 

        // Passo 5: Realizar logout
        await page.locator('[data-test="logout-sidebar-link"]').click();

        // Passo 6: Verificar se o usuário foi redirecionado para a página de login
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });
});

