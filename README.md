# Documentação do Projeto Express: CRUD de Usuário + Permissão de Administrador

## Visão Geral
O projeto Express: CRUD de Usuário + Permissão de Administrador é uma aplicação desenvolvida em Node.js, utilizando JavaScript como linguagem principal. O objetivo do projeto é fornecer um serviço de CRUD (Create, Read, Update, Delete) para gerenciar usuários, com a adição de funcionalidades de permissão de administrador. A aplicação não utiliza um banco de dados tradicional, mas sim um array vazio para armazenar os dados dos usuários em memória.

### Tecnologias Utilizadas
- Node.js: plataforma de desenvolvimento em JavaScript para construir aplicações de rede escaláveis.
- JavaScript: linguagem de programação amplamente utilizada para desenvolvimento web.
- Express.js: framework web para Node.js que simplifica o desenvolvimento de aplicações web.

## Instalação

Antes de iniciar o projeto, certifique-se de ter o gerenciador de pacotes Yarn instalado em sua máquina. Caso não possua, você pode instalá-lo globalmente executando o seguinte comando:

```bash
npm install --global yarn
```

Em seguida, você precisa instalar as dependências do projeto. No diretório raiz do projeto, execute o seguinte comando:

```bash
yarn install
```

## Configure as variáveis de ambiente:
   
   - Renomeie o arquivo `.env.example` para `.env`.
   - Abra o arquivo `.env` e configure as variáveis de acordo com o seu ambiente.

## Executando o Projeto
Após ter instalado as dependências, você pode executar o projeto localmente. Siga os passos abaixo:

Certifique-se de estar no diretório raiz do projeto.

Execute o seguinte comando para iniciar o servidor:

```
yarn dev
```

O servidor será iniciado e estará disponível no endereço http://localhost:3000.
Agora você pode acessar a aplicação no navegador e interagir com ela.

## Testes

O projeto inclui testes automatizados para validar as regras de negócio e garantir o funcionamento adequado da aplicação. Os testes estão localizados no arquivo `src/test/user.spec.js`. É importante não alterar esse arquivo para preservar a integridade dos testes.

Para executar os testes, certifique-se de estar no diretório raiz do projeto e execute o seguinte comando:

```bash
yarn test
```

Se desejar um log mais detalhado, você pode executar o comando:

```bash
yarn test --all
```

Após a execução dos testes, será exibido um log no terminal com informações sobre a execução dos testes e os resultados obtidos. Certifique-se de que todos os testes tenham sido aprovados.

### Integração Contínua com GitHub Actions

O projeto está configurado para executar o CI usando o GitHub Actions. O fluxo de trabalho (workflow) está definido no arquivo `.github/workflows/integration_tests.yml`. Ele é acionado automaticamente em duas situações:

- Quando ocorre um push para a branch `master`.
- Quando é aberto um pull request para a branch `master`.

O fluxo de trabalho de CI realiza as seguintes etapas:

1. Verifica a sintaxe e a formatação do código usando ferramentas como ESLint e Prettier.
2. Instala as dependências do projeto usando o Yarn.
3. Executa os testes automatizados do projeto usando o comando `yarn test`.

Para acessar os resultados do CI, vá até a página do projeto no GitHub, clique na aba "Actions" e selecione o workflow "Execução dos testes de integração". Lá você encontrará os registros das execuções anteriores e poderá verificar se os testes estão passando ou se ocorreram erros.

## Endpoints

A seguir estão listados os endpoints disponíveis na aplicação, juntamente com suas responsabilidades e métodos HTTP correspondentes:

### Criação de Usuários
- **Método:** POST
- **Endpoint:** /users
- **Responsabilidade:** Cria um novo usuário no sistema. Os dados do usuário devem ser enviados no corpo da requisição no formato JSON.

### Listagem de Usuários
- **Método:** GET
- **Endpoint:** /users
- **Responsabilidade:** Retorna uma lista de todos os usuários cadastrados no sistema.

### Perfil do Usuário Logado
- **Método:** GET
- **Endpoint:** /users/profile
- **Responsabilidade:** Retorna os dados do usuário atualmente logado. Este endpoint requer autenticação através de um token JWT válido.

### Atualização de Usuário
- **Método:** PATCH
- **Endpoint:** /users/<uuid>
- **Responsabilidade:** Atualiza os dados de um usuário específico identificado pelo seu UUID (identificador único). Os dados atualizados devem ser enviados no corpo da requisição no formato JSON.

### Exclusão de Usuário
- **Método:** DELETE
- **Endpoint:** /users/<uuid>
- **Responsabilidade:** Ex

Exclui um usuário específico identificado pelo seu UUID (identificador único).

### Observações
- A aplicação não utiliza um banco de dados tradicional, mas sim um array vazio para armazenar os dados dos usuários em memória. Isso significa que os dados serão perdidos ao reiniciar a aplicação.
- O projeto inclui testes automatizados para garantir o funcionamento correto da aplicação. Certifique-se de que todos os testes tenham sido aprovados após qualquer modificação no código.
- A autenticação é realizada utilizando tokens JWT (JSON Web Token). Certifique-se de incluir o token válido nos headers das requisições autenticadas.
