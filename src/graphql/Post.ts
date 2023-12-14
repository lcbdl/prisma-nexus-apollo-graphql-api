import { objectType } from 'nexus';

import { Post as PostModel } from 'nexus-prisma';

export const Post = objectType({
  name: PostModel.$name,
  description: PostModel.$description,
  definition(t) {
    t.field(PostModel.id);
    t.field(PostModel.title);
    t.field(PostModel.content);
    t.field(PostModel.createdAt);
    t.field(PostModel.updatedAt);
    t.field(PostModel.user);
  }
});
