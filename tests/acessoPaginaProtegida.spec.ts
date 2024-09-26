import { expect, test } from "@playwright/test";

test.describe('Acesso a pagina protegida', async () => {
    test ('acesso a pagina protegida', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/cart.html');

            // Verificar se a URL ainda é a do carrinho

        await page.goto('https://www.saucedemo.com/cart.html');
        
        const errorText = await page.getByText("Epic sadface: You can only access '/cart.html' when you are logged in.")
    
        await expect(errorText).toBeVisible();
    });
})
