import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { createServer as createHttpServer } from 'http';
import { MyContext, createContext } from './context';
import schema from './schema';

const { PORT = 4000 } = process.env;

const createApolloServer = (httpServer): ApolloServer<MyContext> =>
  new ApolloServer<MyContext>({
    schema,
    introspection: process.env.NODE_ENV !== 'production',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });

export const startServer = async () => {
  const app: express.Application = express();

  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
  app.use(cors());

  const httpServer = createHttpServer(app);

  const apollo = createApolloServer(httpServer);
  await apollo.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(apollo, {
      context: createContext
    })
  );

  return httpServer.listen({ port: PORT }, () => {
    process.stdout.write(`\n🚀 Server ready at http://localhost:${PORT}/graphql\n\n`);
  });
};

if (process.env.NODE_ENV !== 'test') {
  startServer();
}
