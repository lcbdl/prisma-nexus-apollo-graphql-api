import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { createServer as createHttpServer } from 'http';
import { MyContext, createContext } from './context';
import schema from './schema';
import { DocumentNode } from 'graphql';

const { PORT = 4000 } = process.env;

const loggingPlugin = {
  // Fires whenever a GraphQL request is received from a client.
  async requestDidStart(requestContext) {
    console.log('Request started! Query:\n' + requestContext.request.query.trim());
    return {
      // Fires whenever Apollo Server will parse a GraphQL
      // request to create its associated document AST.
      async parsingDidStart() {
        //console.log('Parsing started!');
      },

      // Fires whenever Apollo Server will validate a
      // request's document AST against your GraphQL schema.
      async validationDidStart() {
        //console.log('Validation started!');
      },

      // Fires when Apollo Server received an invalid request.
      async invalidRequestWasReceived({ error }) {
        console.error('Invalid request: ', error);
      }
    };
  }
};

const approximateDocumentStoreMiB = 10;

const createApolloServer = (httpServer): ApolloServer<MyContext> =>
  new ApolloServer<MyContext>({
    documentStore: new InMemoryLRUCache<DocumentNode>({
      maxSize: Math.pow(2, 20) * approximateDocumentStoreMiB,
      sizeCalculation: InMemoryLRUCache.sizeCalculation
    }),
    schema,
    cache: new InMemoryLRUCache({
      // ~30MiB cache
      maxSize: Math.pow(2, 20) * 30,
      // 5 minutes (in seconds)
      ttl: 300
    }),
    logger: console,
    introspection: process.env.NODE_ENV !== 'production',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), loggingPlugin]
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
