import { inputObjectType, intArg, mutationField, nonNull, objectType, queryField, stringArg } from 'nexus';
import { User as UserModel } from 'nexus-prisma';
import { MyContext } from '../../context';

export const User = objectType({
  name: UserModel.$name,
  description: UserModel.$description,
  definition(t) {
    t.field(UserModel.id);
    t.field(UserModel.firstName);
    t.field(UserModel.lastName);
    t.field(UserModel.email);
    t.field(UserModel.gender);
    t.field(UserModel.authType);
    t.field(UserModel.createdAt);
    t.field(UserModel.updatedAt);
    t.field(UserModel.posts);
    t.field('numOfPost', {
      description: 'Number of posts the user posted.',
      type: 'Int',
      resolve: async ({ id }, _, { prisma }: MyContext) => prisma.post.count({ where: { userId: id } })
    });
  }
});

export const SaveUserInput = inputObjectType({
  name: 'SaveUserInput',
  definition(t) {
    t.field(UserModel.firstName);
    t.field(UserModel.lastName);
    t.field(UserModel.email);
    t.field(UserModel.gender);
    t.field(UserModel.authType);
  }
});

export const UserQuery = queryField((t) => {
  t.list.field('findUsers', {
    type: UserModel.$name,
    args: { offset: intArg({ default: 0 }), limit: intArg({ default: 25 }) },
    async resolve(_, { offset, limit }, ctx: MyContext) {
      return ctx.prisma.user.findMany({
        skip: offset,
        take: limit
      });
    }
  });
  t.field('findUserById', {
    type: UserModel.$name,
    args: { userId: nonNull(stringArg()) },
    async resolve(_, { userId }, ctx: MyContext) {
      return await ctx.prisma.user.findUnique({ where: { id: userId } });
    }
  });
  t.field('findUserByEmail', {
    type: UserModel.$name,
    args: { email: nonNull(stringArg()) },
    async resolve(_, { email }, ctx: MyContext) {
      return await ctx.prisma.user.findUnique({ where: { email: email } });
    }
  });
});

export const UserMutation = mutationField((t) => {
  t.field('createUser', {
    type: UserModel.$name,
    description: 'Create a new user',
    args: { newUser: SaveUserInput },
    async resolve(_, { newUser }, ctx: MyContext) {
      const emailExpression = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      const isValidEmail = emailExpression.test(String(newUser.email).toLowerCase());
      if (!isValidEmail) throw new Error('email not in proper format');
      return await ctx.prisma.user.create({
        data: {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          gender: newUser.gender,
          authType: newUser.authType
        }
      });
    }
  });
  t.field('updateUser', {
    type: UserModel.$name,
    description: 'update user',
    args: { userId: nonNull(stringArg()), newUser: SaveUserInput },
    async resolve(_, { userId, newUser }, ctx: MyContext) {
      return await ctx.prisma.user.update({
        where: { id: userId },
        data: {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          gender: newUser.gender,
          authType: newUser.authType
        }
      });
    }
  });
  t.field('deleteUser', {
    type: UserModel.$name,
    description: 'Delete user',
    args: { userId: nonNull(stringArg()) },
    async resolve(_, { userId }, ctx: MyContext) {
      return await ctx.prisma.user.delete({
        where: { id: userId }
      });
    }
  });
});
