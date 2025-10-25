
import { User } from "src/user/domain/entities/User.entity";
import { Injectable, Inject } from "@nestjs/common";
import CreateUserDto from "../dto/requests/CreateUser.dto";
import { UserPersistencePort } from "../ports/UserPersistence.port";

@Injectable()
export class CreateUserUseCase {
  
  // Injects the implementation of UserRepositoryPort associated with the USER_REPOSITORY token
  constructor(@Inject('USER_REPOSITORY') private readonly userRepository: UserPersistencePort) {}

  async execute(userDto: CreateUserDto): Promise<User | null> {
    const existingUser = await this.userRepository.findByEmail(userDto.email);

    if (existingUser) {
      throw new Error('User with this email already exists.');
    }

    const user = User.build(userDto.name, userDto.email);
    const savedUser = await this.userRepository.save(user);

    return savedUser;
  }
}