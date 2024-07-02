import { inputObjectType, intArg, mutationField, nonNull, objectType, queryField, stringArg } from 'nexus';
import { Comment as CommentModel } from 'nexus-prisma';
import { MyContext } from '../../context';

export const Comment = objectType({
  name: CommentModel.$name,
  description: CommentModel.$description,
  definition(t) {
    t.field(CommentModel.id);
    t.field(CommentModel.comment);
    t.field(CommentModel.user);
    t.field(CommentModel.post);
  }
});

export const SaveCommentInput = inputObjectType({
  name: 'SaveCommentInputType',
  definition(t) {
    t.field(CommentModel.comment);
    t.field(CommentModel.userId);
    t.field(CommentModel.postId);
  }
});

export const CommentQuery = queryField((t) => {
  t.list.field('comments', {
    type: CommentModel.$name,
    args: { offset: intArg({ default: 0 }), limit: intArg({ default: 25 }), postId: nonNull(stringArg()) },
    async resolve(_, { offset, limit, postId }, ctx: MyContext) {
      return ctx.prisma.comment.findMany({
        skip: offset,
        take: limit,
        where: { postId }
      });
    }
  });
  t.field('comment', {
    type: CommentModel.$name,
    args: { commentId: nonNull(stringArg()) },
    async resolve(_, { commentId }, ctx: MyContext) {
      return await ctx.prisma.comment.findUnique({ where: { id: commentId } });
    }
  });
});

export const CommentMutation = mutationField((t) => {
  t.field('createComment', {
    type: CommentModel.$name,
    description: 'Create a comment',
    args: { newComment: SaveCommentInput },
    async resolve(_, { newComment }, ctx: MyContext) {
      return await ctx.prisma.comment.create({
        data: {
          ...newComment
        }
      });
    }
  });
  t.field('updateComment', {
    type: CommentModel.$name,
    description: 'Update comment',
    args: { commentId: nonNull(stringArg()), newComment: SaveCommentInput },
    async resolve(_, { commentId, newComment }, ctx: MyContext) {
      return await ctx.prisma.comment.update({
        where: { id: commentId },
        data: {
          ...newComment
        }
      });
    }
  });
  t.field('deleteComment', {
    type: CommentModel.$name,
    description: 'delete comment',
    args: { commentId: nonNull(stringArg()) },
    async resolve(_, { commentId }, ctx: MyContext) {
      return await ctx.prisma.comment.delete({
        where: { id: commentId }
      });
    }
  });
});
