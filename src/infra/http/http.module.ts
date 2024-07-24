import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabseModule } from '../database/database.module';

@Module({
  imports: [DatabseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
