import { expect, test } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

    test('Ordenação de produtos por preço', async ({ page }) => {

        const loginPage = new LoginPage(page); 
        
        // Realizar login
        await test.step('login', async () => {
            await loginPage.goto(); 
            await loginPage.login('standard_user', 'secret_sauce'); 
        });

    // Selecionar a ordenação por preço (do menor para o maior)
    await page.selectOption('.product_sort_container', 'lohi'); // "lohi" é o valor para "low to high"

    // Capturar os preços dos produtos
    const precosNumericos = await page.locator('.inventory_item_price').evaluateAll(
        elementos => elementos.map(el => parseFloat(el.textContent.replace('$', '').trim()))
    );

    // Verificar se os preços estão ordenados corretamente (do menor para o maior)
    const precosOrdenados = [...precosNumericos].sort((a, b) => a - b);
    expect(precosNumericos).toEqual(precosOrdenados);
});
