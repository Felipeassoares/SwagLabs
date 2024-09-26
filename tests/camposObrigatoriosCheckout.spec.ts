import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

test("Campos obrigatórios no checkout", async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Realizar login
  await test.step("login", async () => {
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
  });
  // Adicionar item ao carrinho
  await test.step("adicionar item ao carrinho", async () => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Verificar se o item foi adicionado ao carrinho
    const itemCarrinho = await page.locator(".shopping_cart_badge");
    await expect(itemCarrinho).toBeVisible();
    await expect(itemCarrinho).toHaveText("1");
  });

  // Realizar o checkout
  await test.step("realizando o checkout", async () => {
    await page.locator(".shopping_cart_link").click();
    await page.locator('[data-test="checkout"]').click();
  });

  // Verificar campos obrigatórios
  await test.step("verificando campos obrigatórios", async () => {
    await page.locator('[data-test="continue"]').click(); // Clicar em "Continue" sem preencher
  });

  // Verificar mensagem de erro
  const errorText = await page.locator('[data-test="error"]').textContent();
  await expect(errorText).toContain("Error: First Name is required");
});
