import { inputObjectType, intArg, mutationField, nonNull, objectType, queryField, stringArg } from 'nexus';
import { MyContext } from '../../context';
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

export const PostQuery = queryField((t) => {
  t.list.field('posts', {
    type: PostModel.$name,
    args: { offset: intArg({ default: 0 }), limit: intArg({ default: 25 }) },
    async resolve(_, { offset, limit }, ctx: MyContext) {
      return ctx.prisma.post.findMany({
        skip: offset,
        take: limit
      });
    }
  });
  t.field('post', {
    type: PostModel.$name,
    args: { postId: nonNull(stringArg()) },
    async resolve(_, { postId }, ctx: MyContext) {
      return await ctx.prisma.post.findUnique({ where: { id: postId } });
    }
  });
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
