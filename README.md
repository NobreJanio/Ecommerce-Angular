# E-commerce de Produtos Eletrônicos

Um e-commerce moderno desenvolvido com Angular para venda de produtos eletrônicos como mouses, teclados, monitores, fones de ouvido e outros equipamentos para computador.

![Angular](https://img.shields.io/badge/Angular-14.0.2-red)
![TypeScript](https://img.shields.io/badge/TypeScript-4.7.2-blue)
![Material UI](https://img.shields.io/badge/Material%20UI-14.0.3-purple)

## 📋 Sobre o Projeto

Este projeto é um e-commerce completo para produtos eletrônicos, desenvolvido com Angular 14. A aplicação oferece uma experiência de compra intuitiva com diversas funcionalidades essenciais para uma loja virtual.

### ✨ Funcionalidades

- **Catálogo de Produtos**: Visualização de todos os produtos disponíveis
- **Detalhes do Produto**: Página individual com informações detalhadas de cada produto
- **Carrinho de Compras**: Adição, remoção e gerenciamento de produtos no carrinho
- **Barra de Pesquisa**: Busca rápida de produtos por nome ou descrição
- **Persistência de Dados**: Carrinho salvo no localStorage do navegador
- **Interface Responsiva**: Experiência otimizada em dispositivos móveis e desktop

## 🚀 Tecnologias Utilizadas

- **Angular 14**: Framework para desenvolvimento do front-end
- **TypeScript**: Linguagem de programação
- **Angular Material**: Biblioteca de componentes UI
- **RxJS**: Biblioteca para programação reativa
- **Angular Animations**: Para animações na interface
- **ngx-mask**: Para formatação de campos

## 🔧 Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node)
- Angular CLI (versão 14.0.2)

### Passos para instalação

1. Clone o repositório:
   ```
   git clone [URL_DO_REPOSITÓRIO]
   ```

2. Navegue até a pasta do projeto:
   ```
   cd Ecommerce-Angular
   ```

3. Instale as dependências:
   ```
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```
   ng serve
   ```

5. Acesse a aplicação em seu navegador:
   ```
   http://localhost:4200
   ```

## 📦 Estrutura do Projeto

O projeto segue a estrutura padrão do Angular com alguns componentes e serviços específicos:

- **Componentes**:
  - Header: Navegação principal e acesso ao carrinho
  - Footer: Informações de rodapé
  - Produtos: Listagem e detalhes de produtos
  - Carrinho: Gerenciamento de itens no carrinho
  - Barra de Pesquisa: Busca de produtos

- **Serviços**:
  - ProdutosService: Gerencia a lista de produtos disponíveis
  - CarrinhoService: Gerencia operações do carrinho de compras
  - NotificacaoService: Exibe mensagens de notificação ao usuário

## 🛠️ Build e Deploy

Para gerar uma versão de produção do projeto:

```
ng build --prod
```

Os arquivos de build serão armazenados no diretório `dist/`.

## 🧪 Testes

Para executar os testes unitários:

```
ng test
```

Para executar os testes end-to-end (necessário configurar primeiro):

```
ng e2e
```

## 📚 Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a [Documentação do Angular CLI](https://angular.io/cli).

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido com ❤️ usando Angular.
