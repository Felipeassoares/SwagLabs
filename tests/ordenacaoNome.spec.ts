import { expect, test } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

    test('Ordenação de produtos por nome (Z a A)', async ({ page }) => {

        const loginPage = new LoginPage(page); 
        
        // Realizar login
        await test.step('login', async () => {
            await loginPage.goto(); 
            await loginPage.login('standard_user', 'secret_sauce'); 
        });

    // Selecionar a ordenação por nome (Z a A)
    await page.selectOption('.product_sort_container', 'za'); 

    // Capturar os nomes dos produtos
    const nomesProdutos = await page.locator('.inventory_item_name').evaluateAll(
        elementos => elementos.map(el => el.textContent.trim())
    );

    // Verificar se os nomes estão ordenados de Z a A
    const nomesOrdenados = [...nomesProdutos].sort((a, b) => b.localeCompare(a)); 
    expect(nomesProdutos).toEqual(nomesOrdenados);
});
