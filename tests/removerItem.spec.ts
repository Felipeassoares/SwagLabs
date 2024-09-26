import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

test('Remover item do carrinho', async ({ page }) => {

        const loginPage = new LoginPage(page); 
        
        // Realizar login
        await test.step('login', async () => {
            await loginPage.goto(); 
            await loginPage.login('standard_user', 'secret_sauce'); 
        });
        
    // Passo 2: Adicionar item ao carrinho
    await test.step('adicionar item ao carrinho', async () => {
        await page.goto('https://www.saucedemo.com/inventory.html');
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    });

    // Passo 3: Verificar item adicionado no carrinho
    await test.step('verificar item no carrinho', async () => {
        const cartBadge = await page.locator('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('1'); 
    });

    // Passo 4: Remover item do carrinho
    await test.step('remover item do carrinho', async () => {
        await page.goto('https://www.saucedemo.com/cart.html');
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    });

    // Passo 5: Verificar carrinho vazio
    await test.step('verificar carrinho vazio', async () => {
        const carrinho = await page.locator('.shopping_cart_badge');
        await expect(carrinho).toBeHidden(); // Verifica que o badge não está mais visível
    });
});
