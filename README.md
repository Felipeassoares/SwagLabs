# Swag Labs Test Automation

Este repositório contém um conjunto de testes automatizados desenvolvidos com [Playwright](https://playwright.dev/) para validar funcionalidades de compras online no site **Swag Labs**. O projeto simula o processo de login, adição e remoção de itens do carrinho, checkout e outras interações, permitindo testar o fluxo completo de uma compra online.

## 🚀 Descrição

Desafio criado para testar habilidades com automação de testes. Os testes cobrem diferentes funcionalidades do site **Swag Labs**, incluindo login, logout, manipulação do carrinho de compras e validação de campos obrigatórios no processo de checkout. Tudo isso é realizado em um ambiente de simulação de e-commerce.

## 🛠️ Tecnologias Utilizadas

- [Playwright](https://playwright.dev/) - Framework para automação de testes de navegadores.
- **Node.js** - Ambiente para execução dos testes.

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de que você tem o seguinte instalado em seu ambiente:

- **Node.js** (versão 12 ou superior)
- **NPM** (gerenciador de pacotes do Node.js)
- **Git** (para clonar o repositório)

## 🔧 Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/Felipeassoares/SwagLabs.git
   ```
2. Acesse o diretório do projeto:

```bash
cd swaglabs
```
3. Instale as dependências:

```bash
npm install
```

4. Instale os navegadores usados pelo Playwright:

```bash
npx playwright install
```

🚀 Executando os Testes
Para rodar os testes automatizados, use o seguinte comando:

```bash
npx playwright test
```
Se quiser ver os testes sendo executados no navegador, rode:

```bash
npx playwright test --headed
```
Para abrir o relatório dos testes após a execução:

```bash
npx playwright show-report
```
📁 Estrutura do Projeto
tests/: Contém todos os testes de automação, como login, carrinho e checkout.
pages/: Padrão Page Object para facilitar o reuso de componentes da página.
playwright.config.ts: Configuração do Playwright.
🌱 Contribuição
Se desejar contribuir com o projeto, siga os seguintes passos:

Faça um fork do projeto.
Crie uma branch com a sua feature (git checkout -b feature/nova-feature).
Faça commit das suas alterações (git commit -m 'Adiciona nova feature').
Envie suas mudanças (git push origin feature/nova-feature).
Abra um Pull Request.
📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
