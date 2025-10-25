
import { User } from "src/user/domain/entities/User.entity";
import { UserPersistencePort } from "../ports/UserPersistence.port";
import { Inject, Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class FindUserUseCase {
  // Injects the implementation of UserRepositoryPort associated with the USER_REPOSITORY token
  constructor(@Inject('USER_REPOSITORY') private readonly userRepository: UserPersistencePort) {}

  async execute(id: string): Promise<User> {
    if (!id) {
        throw new Error("User ID must be provided");
    }

    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return user;
  }
}