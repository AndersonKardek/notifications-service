import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabseModule } from './infra/database/database.module';

@Module({
  imports: [HttpModule, DatabseModule],
})
export class AppModule {}
