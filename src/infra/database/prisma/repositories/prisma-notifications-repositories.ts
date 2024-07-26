import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from 'src/application/repositories/notifications-repositories';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationMapper } from '../mapper/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
