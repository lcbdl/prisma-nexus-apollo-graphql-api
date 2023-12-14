import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './graphql/schema';
import { MyContext, createContext } from './graphql/context';

const start = async () => {
  const server = new ApolloServer<MyContext>({ schema });

  const { url } = await startStandaloneServer(server, {
    context: createContext,
    listen: { port: 4000 }
  });

  console.log(`\
  🚀 Server ready at: ${url}
  `);
};

start();
