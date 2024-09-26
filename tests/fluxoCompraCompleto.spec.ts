import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

test("Fluxo compra completo", async ({ page }) => {
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

  // Realizar checkout - Parte 1
  await test.step("realizando o checkout", async () => {
    await page.locator(".shopping_cart_link").click();
    await page.locator('[data-test="checkout"]').click();

    // Preencher os campos obrigatórios
    await page.locator('[data-test="firstName"]').fill("Felipe");
    await page.locator('[data-test="lastName"]').fill("Simas");
    await page.locator('[data-test="postalCode"]').fill("01000530");

    // Prosseguir para a próxima etapa
    await page.locator('[data-test="continue"]').click();
  });

  // Realizar checkout - Parte 2 (Finalizar)
  await test.step("finalizar o checkout", async () => {
    // Verifica se estamos na página correta antes de finalizar
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );

    // Finalizar a compra
    await page.locator('[data-test="finish"]').click();

    // Verificar se a finalização foi bem-sucedida
    const completionMessage = await page
      .locator(".complete-header")
      .textContent();
    await expect(completionMessage).toContain("Thank you for your order!");
  });
});
