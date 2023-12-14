# GraphQL Server with Apollo and Prisma

This is a boilerplate of Apollo Graphql backend API using prisma, nexus, nexus-prisma, typescript, and PostgreSQL based on [Prisma](https://www.prisma.io/), [apollo-server](https://www.apollographql.com/server/), [Nexus Prisma](https://graphql-nexus.github.io/nexus-prisma) plugin.

## How to use

### 1. Clone this repo & install dependencies

Install Node dependencies:

`yarn` (recommended) or `npm install`

### 2. Set up the database

Create a .env file in the project folder, and set ***DATABASE_URL*** with your PostgreSQL URL

Run this command to migrate Prisma schema to database, and seed your database.

```sh
prisma migrate dev --name 'init'
```



### 3. Generate Prisma Client (type-safe database client)

Run the following command to generate [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/generating-prisma-client):

```sh
yarn generate
```

### 4. Start the GraphQL server

Launch your GraphQL server with this command:

```sh
yarn dev
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server..
