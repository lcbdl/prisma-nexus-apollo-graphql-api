import { makeSchema } from 'nexus';
import { DateTime } from 'nexus-prisma/scalars';
import { join } from 'path';
import * as Post from './Post';
import * as User from './User';
import * as Notification from './Notification';

export const schema = makeSchema({
  types: [DateTime, User, Post, Notification], 
  outputs: {
    typegen: join(__dirname, 'generated/nexus-typegen.ts'),
    schema: join(__dirname, 'generated/schema.graphql') 
  }
});
