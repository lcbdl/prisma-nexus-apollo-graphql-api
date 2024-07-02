import { PrismaClient } from '@prisma/client';

export interface MyContext {
  prisma: PrismaClient;
  token?: string;
}

const prisma = new PrismaClient({
  log: [
    {
      emit: 'stdout',
      level: 'query'
    },
    {
      emit: 'stdout',
      level: 'error'
    },
    {
      emit: 'stdout',
      level: 'info'
    },
    {
      emit: 'stdout',
      level: 'warn'
    }
  ]
});

export const createContext = async ({ req }) => {
  const token = (req.headers.authorization || ' ').split(' ')[1];
  // TODO parse user from token
  return {
    token,
    prisma
  };
};
