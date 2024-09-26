import { expect, test } from "@playwright/test";

test('Todos os produtos começam com "Sauce Labs"', async ({ page }) => {
    
        // Passo 1: Login
    test.fail();
    await test.step('login', async () => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    })

        // Passo 2: Verificar títulos dos produtos
    await test.step('verificar titulo do produto', async () => {
        const listaDeTitulosLocator = await page.locator('.inventory_item_name');
        const listaDeTitulosProduto = await listaDeTitulosLocator.allTextContents();

        // Verifica se todos os produtos começam com "Sauce Labs"
        for(const item of listaDeTitulosProduto) {
            await expect(item.slice(0, 10)).toBe('Sauce Labs');
        }
    });
});