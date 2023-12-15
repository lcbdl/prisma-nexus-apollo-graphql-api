import { PrismaClient } from '@prisma/client';

export interface MyContext {
  prisma: PrismaClient;
}

const prisma = new PrismaClient();

export const createContext = async () => ({
  prisma
});
