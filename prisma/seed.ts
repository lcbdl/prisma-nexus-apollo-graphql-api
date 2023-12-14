import { PrismaClient, Prisma } from '.prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'user1',
    email: 'user1@email.com',
    gender: 'MALE',
    authType: 'EMAIL'
  }
];

async function main() {
  console.log('Start seeding ...');
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log('Seeding finihsed.');
}

main().then(() => {});
