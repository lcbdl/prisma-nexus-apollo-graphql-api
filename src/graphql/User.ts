import { enumType, objectType, queryType } from 'nexus';
import { User as UserModel } from 'nexus-prisma';
import { MyContext } from './context';

export const Gender = enumType({
  name: 'Gender',
  members: ['MALE', 'FEMALE']
});

export const AuthType = enumType({
  name: 'AuthType',
  members: ['EMAIL', 'FACEBOOK', 'GOOGLE', 'APPLE']
});

export const User = objectType({
  name: UserModel.$name,
  description: UserModel.$description,
  definition(t) {
    t.field(UserModel.id);
    t.field(UserModel.name);
    t.field(UserModel.email);
    t.field(UserModel.gender);
    t.field(UserModel.authType);
    t.field(UserModel.createdAt);
    t.field(UserModel.updatedAt);
    t.field(UserModel.posts);
    t.field(UserModel.notifications);
  }
});

export const UserQuery = queryType({
  definition(t) {
    t.list.field('users', {
      type: UserModel.$name,
      resolve(_, __, ctx: MyContext) {
        return ctx.prisma.user.findMany();
      }
    });
  }
});
