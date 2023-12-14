import { makeSchema } from 'nexus';
import { DateTime } from 'nexus-prisma/scalars';
import { join } from 'path';
import { Post } from './Post';
import { AuthType, Gender, User } from './User';
import { Notification } from './Notification';

export const schema = makeSchema({
  types: [DateTime, Gender, AuthType, User, Post, Notification], // 1
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'), // 2
    schema: join(__dirname, '..', 'schema.graphql') // 3
  }
});
