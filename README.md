# Reservas Já
Reservas Já é uma aplicação web para reserva de mesas em restaurantes. O sistema permite aos usuários cadastrar restaurantes, fazer reservas, gerenciar suas reservas, e acessar um painel administrativo para controle de usuários e reservas.

## Tecnologias Utilizadas
- __Backend__: NestJS, Prisma, TypeScript, Multer, bcryptjs

- __Frontend__: React, Next.js, Tailwind CSS

- __Banco de Dados__: MySQL

- __ORM__: Prisma

- __Autenticação__: JWT

## Funcionalidades

- __Registro de Usuários__: Permite que os usuários se registrem com nome, email, senha e foto de perfil (opcional).

- __Autenticação__: Sistema de login seguro utilizando JWT.

- __Cadastro de Restaurantes__: Permite que os administradores cadastrem restaurantes.

- __Reserva de Mesas__: Usuários podem reservar mesas em restaurantes disponíveis.

- __Painel Administrativo__: Controle de usuários, restaurantes e reservas.

- __Upload de Imagem__: Upload e manipulação de fotos de perfil utilizando Multer.

## Requisitos
- Node.js (v16+)
- MySQL 
- Git

## Instruções para Rodar o Projeto
__1. Clonar o Repositório__

Copiar  e rodar estas duas linhas de código: 
```bash
git clone https://github.com/DaviRKL/ReservasJa.git

cd ReservasJa
```
__2. Configuração do Backend__

__2.1 Configurar Variáveis de Ambiente__

No diretório backend-reservas-ja, crie um arquivo .env com as seguintes variáveis:
```bash
DATABASE_URL="mysql://usuario:senha@localhost:5432/reservasja?schema=public"

JWT_SECRET="seu_segredo_jwt"
```
__2.2 Instalar Dependências__

Navegue até a pasta do backend e instale as dependências:
Copiar e rodar ocódigo
```bash

cd backend-reservas-ja
npm install
```
__2.3 Configurar o Banco de Dados__

Execute as migrações do Prisma para configurar o banco de dados:

Copiar e rodar o código
```bash

npx prisma migrate dev --name init
```
__2.4 Rodar o Backend__

Copiar código
```bash
npm start
```
__O backend estará rodando em http://localhost:3000.__

__3. Configuração do Frontend__

__3.1 Instalar Dependências__

Navegue até a pasta do frontend e instale as dependências:

Copiar código
```bash
cd ../frontend-reservas-ja
npm install
```
__3.2 Rodar o Frontend__

Copiar e rodar o código
```bash
npm run build
npm start
```
O frontend estará disponível em http://localhost:3030.

__4. Acessando a Aplicação__

- __Frontend: http://localhost:3030__
- __Backend: http://localhost:3000__

## Contribuição
Se você deseja contribuir com este projeto, sinta-se à vontade para abrir issues ou enviar pull requests.

