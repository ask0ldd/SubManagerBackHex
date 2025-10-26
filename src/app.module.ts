import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DBModule } from './db.module';

@Module({
  imports: [UserModule, DBModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
