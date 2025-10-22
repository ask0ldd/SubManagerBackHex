import { Module } from '@nestjs/common';
import { UserController } from './adapters/in/http/User.controller';
import { FindUserUseCase } from './application/use-cases/FindUser.uc';
import { CreateUserUseCase } from './application/use-cases/CreateUser.uc';
import { InMemoryUserPersistence } from './adapters/out/db/InMemoryUserPersistence.adapter';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    FindUserUseCase,
    CreateUserUseCase,
    {
      provide: 'USER_REPOSITORY', // identifier that will be used for injection
      useClass: InMemoryUserPersistence, // the concrete implementation
    },
  ],
})
export class UserModule {}
