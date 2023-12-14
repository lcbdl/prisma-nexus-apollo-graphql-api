import { objectType } from 'nexus';

import { Notification as NotificationModel } from 'nexus-prisma';

export const Notification = objectType({
  name: NotificationModel.$name,
  description: NotificationModel.$description,
  definition(t) {
    t.field(NotificationModel.id);
    t.field(NotificationModel.device);
    t.field(NotificationModel.os);
    t.field(NotificationModel.token);
    t.field(NotificationModel.createdAt);
    t.field(NotificationModel.updatedAt);
    t.field(NotificationModel.user);
  }
});
