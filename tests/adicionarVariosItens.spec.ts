import { expect, test } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

test("Verificar número de itens no carrinho", async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Realizar login
  await test.step("login", async () => {
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
  });

  await test.step("Adicionar item ao carrinho", async () => {
    // Adicionar o primeiro item ao carrinho
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  });

  await test.step("Adicionar mais um item ao carrinho", async () => {
    // Adicionar o segundo item ao carrinho
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .click();
  });

  await test.step("Verificar número de itens no carrinho", async () => {
    // Localizar o badge do carrinho
    const carrinho = await page.locator(".shopping_cart_badge");
    const contarItens = await carrinho.innerText();

    // Verificar se o número de itens no carrinho é igual a 2
    await expect(contarItens).toBe("2");
  });
});
