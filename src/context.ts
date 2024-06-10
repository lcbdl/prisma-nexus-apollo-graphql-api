import { PrismaClient } from '@prisma/client';

export interface MyContext {
  prisma: PrismaClient;
  token?: string;
}

const prisma = new PrismaClient();

export const createContext = async ({ req }) => ({
  token: req.headers.token,
  prisma
});
