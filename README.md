# TodoList

Aplicação de lista de tarefas com **temas** (grupos). Além de criar e organizar todos, dá para agrupar as tarefas por tema — por exemplo Trabalho, Estudos ou Pessoal.

Este repositório é um **projeto de prática**. O objetivo é aplicar e consolidar conhecimentos (TypeScript, Prisma, PostgreSQL, organização em módulos, etc.). **Ainda não está completo.**

## O que o projeto pretende fazer

- Criar, listar, atualizar e excluir tarefas
- Definir status (`PENDENTE`, `EM_ANDAMENTO`, `CONCLUIDO`) e data de vencimento
- Criar temas/grupos (nome, cor e ícone)
- Associar uma tarefa a um tema

## Estado atual

Há só o **back-end** em andamento. Ainda não existe front-end nem API HTTP pronta.

Já existe:

- Schema Prisma com os models `Todo` e `Tema`
- Migration inicial
- Cliente Prisma configurado (`src/lib/prisma.ts`)
- Repositório de tarefas (`src/modules/todo/Todo.repository.ts`)

Ainda falta, entre outras coisas:

- Módulo de temas
- Camada de rotas/controllers (API)
- Front-end
- Autenticação e demais regras de negócio

## Stack

- TypeScript (ESM)
- PostgreSQL
- Prisma 7
- Node.js

## Como rodar o back-end

Pré-requisitos: Node.js, PostgreSQL e um banco criado.

1. Entre na pasta do back-end e instale as dependências:

```bash
cd back-end
npm install
```

2. Crie um arquivo `.env` com a URL do banco:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/TodoList"
```

3. Aplique as migrations e gere o client:

```bash
npx prisma migrate dev
npx prisma generate
```

4. Suba o servidor (quando a API estiver pronta):

```bash
npm start
```

## Estrutura (resumo)

```
TodoList/
├── back-end/
│   ├── prisma/              # schema e migrations
│   ├── generated/prisma/    # client gerado pelo Prisma
│   └── src/
│       ├── lib/prisma.ts
│       └── modules/todo/
└── README.md
```
