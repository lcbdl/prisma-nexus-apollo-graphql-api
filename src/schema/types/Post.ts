import { inputObjectType, intArg, mutationField, nonNull, objectType, queryField, stringArg } from 'nexus';
import { Post as PostModel } from 'nexus-prisma';
import { MyContext } from '../../context';

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
  t.list.field('findPosts', {
    type: PostModel.$name,
    args: { offset: intArg({ default: 0 }), limit: intArg({ default: 25 }) },
    async resolve(_, { offset, limit }, ctx: MyContext) {
      return ctx.prisma.post.findMany({
        skip: offset,
        take: limit
      });
    }
  });
  t.field('findPostById', {
    type: PostModel.$name,
    args: { postId: nonNull(stringArg()) },
    async resolve(_, { postId }, ctx: MyContext) {
      return await ctx.prisma.post.findUnique({ where: { id: postId } });
    }
  });
  t.list.field('findPostsByUser', {
    type: PostModel.$name,
    args: { userId: nonNull(stringArg()), offset: intArg({ default: 0 }), limit: intArg({ default: 25 }) },
    async resolve(_, { userId, offset, limit }, ctx: MyContext) {
      return await ctx.prisma.post.findMany({ where: { userId: userId }, skip: offset, take: limit });
    }
  });
});

export const SavePostInput = inputObjectType({
  name: 'SavePostInput',
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
    args: { newPost: SavePostInput },
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
  t.field('updatePost', {
    type: PostModel.$name,
    description: 'Update post',
    args: { postId: nonNull(stringArg()), newPost: SavePostInput },
    resolve: async (_, { postId, newPost }, { prisma }) => {
      return await prisma.post.update({
        where: { id: postId },
        data: {
          title: newPost.title,
          content: newPost.content,
          userId: newPost.userId
        }
      });
    }
  });
  t.field('deletePost', {
    type: PostModel.$name,
    description: 'Delete post',
    args: { postId: nonNull(stringArg()) },
    resolve: async (_, { postId }, { prisma }) => {
      return await prisma.post.delete({
        where: { id: postId }
      });
    }
  });
});
