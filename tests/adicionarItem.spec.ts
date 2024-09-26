import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

test('Adicionar item ao carrinho', async ({ page }) => {
    const loginPage = new LoginPage(page); 
    
    // Realizar login
    await test.step('login', async () => {
        await loginPage.goto(); 
        await loginPage.login('standard_user', 'secret_sauce'); 

    // Adicionar item ao carrinho
    await test.step('adicionar item ao carrinho', async () => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    });
        
        // Verificar se o item foi adicionado ao carrinho
        const carrinho = await page.locator('.shopping_cart_badge');
        await expect(carrinho).toBeVisible();
        await expect(carrinho).toHaveText('1'); 
    });

    // Acessar o carrinho para ver o item
    await test.step('verificar item no carrinho', async () => {
        await page.locator('.shopping_cart_link').click();
        
        // Verificar se o item está na página do carrinho
        const itemCarrinho = await page.locator('.inventory_item_name');
        await expect(itemCarrinho).toBeVisible();
        await expect(itemCarrinho).toHaveText('Sauce Labs Backpack');
    });
});
