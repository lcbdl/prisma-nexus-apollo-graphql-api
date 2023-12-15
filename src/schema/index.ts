import { makeSchema } from 'nexus';

import { join } from 'path';
import * as types from './types';

const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, 'generated/nexus-typegen.ts'),
    schema: join(__dirname, 'generated/schema.graphql')
  }
});

export default schema;
