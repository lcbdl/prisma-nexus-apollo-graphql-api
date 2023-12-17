import { inputObjectType, mutationField, objectType } from 'nexus';

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

export const CreatePostInput = inputObjectType({
  name: 'CreatePostInput',
  definition(t) {
    t.field(PostModel.title);
    t.field(PostModel.content);
    t.field(PostModel.userId);
  }
});

export const PostMutation = mutationField((t) => {
  t.field('createPost', {
    type: PostModel.$name,
    description: 'Create a new post',
    args: { newPost: CreatePostInput },
    resolve: async (_, { newPost }, { prisma }) => {
      return await prisma.post.create({
        data: {
          title: newPost.title,
          content: newPost.content,
          userId: newPost.userId
        }
      });
    }
  });
});
