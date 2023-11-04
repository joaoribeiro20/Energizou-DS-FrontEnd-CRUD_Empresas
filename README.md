

## Overview

Essa aplicação tem como motivação o desafio proposto pela empresa ENERGIZOU, com principais objetos desenvolver um sistema de gerenciamento de empresas. 

### 🛠 Tools

✔️  TypeScript

✔️  React

✔️  VITE

✔️  Regex e Axios

✔️  API ViaCep

✔️  Mascaras (CEP, CNPJ TELEFONE)

## **🎲 Getting Started**

---

```xml
# Clone este repositório
$ git clone https://github.com/joaoribeiro20/Energizou-DS-BackEnd-CRUD_Empresas.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Energizou-DS-FrontEnd-CRUD_Empresas

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm run dev

```

# 🗒️ Pages Functions

## Home Page

<img src="/public/PageHome.png">

## Criar uma nova empresa

- [x]  Criar uma nova empresa.

Nesta página, oferecemos a funcionalidade de criar uma nova empresa por meio de uma solicitação à nossa API.

O formulário possui máscaras para CNPJ, CEP e telefone, bem como validações, como todos campos obrigatórios, verificação da quantidade correta de dígitos para o telefone, validação de e-mail com "@" e final ".br" ou ".com", além de outras validações, como a quantidade correta de dígitos para o CNPJ e o preenchimento automático do endereço a partir da API ViaCep.

<img src="/public/PageCadastro.png">

## Listar todas as empresas cadastradas e Consultar uma empresa específica por CNPJ

- [x]  Listar todas as empresas cadastradas.
- [x]  Consultar uma empresa específica por CNPJ.

Nesta página, exibimos uma lista fornecida pela API que contém todas as empresas cadastradas no banco de dados. Além disso, oferecemos a possibilidade de filtrar uma empresa pelo seu CNPJ.

<img src="/public/pageBucas.png">

## Atualizar os dados de uma empresa.

Nesta etapa, é necessário fornecer o CNPJ para localizar a empresa cujos dados deseja editar. Após isso, é exibido um formulário que contém, em cada campo de entrada, as informações atuais. Para realizar a alteração, basta modificar os campos de entrada desejados e clicar em "Enviar". Este formulário possui as mesmas características e validações do formulário na página de cadastro.

- [x]  Atualizar os dados de uma empresa.

<img src="/public/PageEdit.png">

## Excluir uma empresa.

- [x]  Excluir uma empresa.

Nesta área, oferecemos a função de excluir uma empresa, fornecendo o CNPJ da empresa desejada. Após fornecer as informações, os dados da empresa são exibidos para verificar os dados antes de prosseguir com a exclusão. Para efetuar a exclusão, é necessário responder a uma pergunta de confirmação.

<img src="/public/PageDelete.png">
