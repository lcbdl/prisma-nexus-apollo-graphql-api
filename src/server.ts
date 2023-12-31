import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import schema from './schema';
import { MyContext, createContext } from './context';

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
