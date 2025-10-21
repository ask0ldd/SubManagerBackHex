import { Module } from '@nestjs/common';
import { InMemoryUserRepository } from './adapters/out/db/in-memory-user-repo.adapter';
import { UserController } from './adapters/in/http/User.controller';
import { FindUserUseCase } from './application/use-cases/find-user.uc';
import { CreateUserUseCase } from './application/use-cases/create-user.uc';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    FindUserUseCase,
    CreateUserUseCase,
    {
      provide: 'USER_REPOSITORY', // identifier that will be used for injection
      useClass: InMemoryUserRepository, // the concrete implementation
    },
  ],
})
export class UserModule {}
