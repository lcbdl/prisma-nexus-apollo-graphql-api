import { enumType } from 'nexus';
import { User as UserModel } from 'nexus-prisma';

export const Sort = enumType({
  description: 'Sort enum for ascending or descending',
  name: 'Sort',
  members: ['asc', 'desc']
});

export const Gender = enumType({
  name: 'Gender',
  members: ['MALE', 'FEMALE']
});

export const AuthType = enumType({
  name: 'AuthType',
  members: ['EMAIL', 'FACEBOOK', 'GOOGLE', 'APPLE']
});
